import type { Post } from '../../types/Subreddit';
import { getReadableTextColor } from '../../utils';

interface Props {
    post: Post;
}

export const RedditPost = ({ post }: Props) => {
    return (
        <>
            <div className="m-2 flex gap-2 p-2 hover:bg-surface-300">
                {post.preview?.enabled && (
                    <img
                        className="aspect-auto max-w-30 bg-black object-cover"
                        src={post.thumbnail}
                        alt=""
                    />
                )}

                <article>
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

                    <div className="flex gap-2 text-content-weak">
                        <div className="flex gap-2 text-content-weak">
                            <span className="text-inherit">{post.ups}</span>
                            <span className="text-inherit">
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
                            className="px-2"
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
