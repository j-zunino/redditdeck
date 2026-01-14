import { FaRegComment } from 'react-icons/fa6';
import { TbArrowBigUp } from 'react-icons/tb';
import type { Post } from '../../types/Subreddit';
import { getReadableTextColor } from '../../utils';

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
                            <span className="flex items-center">
                                <TbArrowBigUp />
                                {post.ups}
                            </span>
                            <span className="flex items-center gap-1">
                                <FaRegComment />
                                {post.num_comments}
                            </span>
                        </div>

                        <span
                            style={{
                                backgroundColor:
                                    post.link_flair_background_color,
                                color: getReadableTextColor(
                                    post.link_flair_background_color ||
                                        '#000000',
                                ),
                            }}
                            className="rounded-full px-2"
                        >
                            {post.link_flair_text}
                        </span>
                    </div>
                </article>
            </div>

            <hr className="mx-2 bg-surface-400" />
        </>
    );
};
