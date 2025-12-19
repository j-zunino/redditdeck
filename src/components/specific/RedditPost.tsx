import type { Post } from '../../types/Subreddit';

interface Props {
    post: Post;
}

export const RedditPost = ({ post }: Props) => {
    return (
        <a
            href={`https://www.reddit.com${post.permalink}`}
            target="_blank"
            className="flex gap-2 border-y border-global-border p-2 hover:bg-global-bg-hover"
        >
            {post.preview?.enabled && (
                <img
                    className="bg-black object-contain"
                    src={post.thumbnail}
                    alt=""
                />
            )}

            <article>
                <p>r/{post.subreddit}</p>
                <h3 className="font-bold">{post.title}</h3>
                <span
                    style={{
                        backgroundColor: post.link_flair_background_color,
                        color: post.link_flair_text_color || '#FFFFFF',
                    }}
                >
                    {post.link_flair_text}
                </span>
                <p>u/{post.author}</p>

                <div className="flex w-fit gap-2 bg-global-bg-hover">
                    <span>{post.ups}</span>
                    <span>{post.downs}</span>
                    <span>{post.num_comments}</span>
                </div>
            </article>
        </a>
    );
};
