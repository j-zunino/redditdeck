import type { Post } from '../../types';
import { PostFlair } from './PostFlair';
import { PostStats } from './PostStats';

interface Props {
    post: Post;
}

export const RedditPost = ({ post }: Props) => {
    return (
        <>
            <article className="m-2 flex flex-wrap-reverse gap-2 rounded-2xl p-2 hover:bg-surface-200">
                {post.preview?.enabled && (
                    <img
                        className="aspect-auto rounded-xl border bg-black object-contain"
                        src={post.thumbnail}
                        alt=""
                    />
                )}

                <div className="flex flex-col gap-2">
                    <header>
                        <p className="text-content-main">
                            <small className="text-inherit">
                                u/{post.author}
                            </small>
                        </p>
                        <h3>
                            <a
                                target="_blank"
                                href={`https://www.reddit.com${post.permalink}`}
                                className="font-bold text-content-strong visited:text-content-main hover:underline"
                            >
                                {post.title}
                            </a>
                        </h3>
                    </header>

                    <div className="flex flex-wrap gap-2">
                        <PostStats
                            ups={post.ups}
                            comments={post.num_comments}
                        />

                        {post.link_flair_text && (
                            <PostFlair
                                label={post.link_flair_text}
                                background={post.link_flair_background_color}
                            />
                        )}
                    </div>
                </div>
            </article>

            <hr className="mx-2 bg-surface-400" />
        </>
    );
};
