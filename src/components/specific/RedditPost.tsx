import { TbArrowBigUp, TbMessageCircle } from 'react-icons/tb';
import type { Post } from '../../types';
import { getReadableTextColor } from '../../utils';
import { PostFlair } from './PostFlair';

interface Props {
    post: Post;
}

export const RedditPost = ({ post }: Props) => {
    return (
        <>
            <div className="m-2 flex gap-2 rounded-2xl p-2 hover:bg-surface-200">
                {post.preview?.enabled && (
                    <img
                        className="aspect-auto max-w-30 rounded-xl border bg-black"
                        src={post.thumbnail}
                        alt=""
                    />
                )}

                <article className="space-y-2">
                    <div>
                        <p className="text-content-main">
                            <small className="text-content-main">
                                u/{post.author}
                            </small>
                        </p>
                        <h2>
                            <a
                                target="_blank"
                                href={`https://www.reddit.com${post.permalink}`}
                                className="font-bold text-content-strong visited:text-content-main hover:underline"
                            >
                                {post.title}
                            </a>
                        </h2>
                    </div>

                    <div className="flex gap-2 text-content-weak">
                        <div className="flex gap-4 rounded-full bg-surface-400 px-2">
                            <span className="flex items-center gap-1">
                                <TbArrowBigUp size={20} />
                                {post.ups}
                            </span>
                            <span className="flex items-center gap-1">
                                <TbMessageCircle size={20} />
                                {post.num_comments}
                            </span>
                        </div>

                        {post.link_flair_text && (
                            <PostFlair
                                label={post.link_flair_text}
                                background={post.link_flair_background_color}
                            />
                        )}
                    </div>
                </article>
            </div>

            <hr className="mx-2 bg-surface-400" />
        </>
    );
};
