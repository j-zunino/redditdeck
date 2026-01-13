import type { Post } from '../../types/Subreddit';
import { getReadableTextColor } from '../../utils';

interface Props {
    post: Post;
}

export const RedditPost = ({ post }: Props) => {
    return (
        <>
            <div className="m-2 flex gap-2 p-2 hover:bg-global-bg-hover">
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
                            className="font-bold hover:underline"
                        >
                            {post.title}
                        </a>
                    </h2>

                    <div className="flex gap-2">
                        <div className="flex gap-2">
                            <span>{post.ups}</span>
                            <span>{post.num_comments}</span>
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
