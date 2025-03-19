import {
    IconArrowBigDown,
    IconArrowBigUp,
    IconExternalLink,
} from '@tabler/icons-react';
import { ErrorMessage } from '../../components';
import { Post } from '../Post';
import { Thumbnail } from '../Post/Thumbnail';
import { SubRedditHeader, SubRedditSkeleton } from '../Subreddit';
import { useSubRedditContext } from './SubRedditContext';

interface Props {
    subreddit: string;
}

export const SubReddit = ({ subreddit }: Props) => {
    const { data, loading, error, handleRefresh } = useSubRedditContext();

    if (loading) {
        return <SubRedditSkeleton quantity={10} />;
    }

    if (error) {
        return <ErrorMessage urgency="critical" errorMessage={error.message} />;
    }

    return (
        <section className="no-scrollbar border-r-1 h-screen flex-1 overflow-y-auto border-gray-200 dark:border-zinc-800 dark:bg-black">
            <SubRedditHeader
                subreddit={`r/${subreddit}`}
                onRefresh={handleRefresh}
            />
            {data?.data.children.map((post) => (
                <Post key={post.data.id}>
                    <article className="group m-2 flex items-center rounded-xl p-2 hover:bg-gray-100 dark:hover:bg-zinc-900">
                        <Thumbnail
                            thumbnail={post.data.thumbnail}
                            preview={post.data.preview}
                            is_video={post.data.is_video}
                            alt={post.data.title}
                        />
                        <div>
                            <p className="md:text-md text-xs sm:text-sm">
                                u/{post.data.author}
                            </p>
                            <h2 className="md:text-md mb-2 line-clamp-2 text-xs font-black sm:text-sm">
                                {post.data.title}
                            </h2>
                            <div className="flex items-center text-center">
                                <div className="mr-2 flex h-fit items-center">
                                    {post.data.ups >= 0 ? (
                                        <IconArrowBigUp size={20} />
                                    ) : (
                                        <IconArrowBigDown size={20} />
                                    )}
                                    <p className="flex justify-center">
                                        {post.data.ups}
                                    </p>
                                </div>

                                {post.data.link_flair_text ===
                                null ? undefined : (
                                    <span
                                        className="mr-2 rounded-full p-2 py-0.5 text-xs text-black"
                                        style={{
                                            backgroundColor:
                                                post.data
                                                    .link_flair_background_color ===
                                                    '' ||
                                                post.data
                                                    .link_flair_background_color ===
                                                    null
                                                    ? '#E7E7E7'
                                                    : post.data
                                                          .link_flair_background_color,
                                        }}
                                    >
                                        {post.data.link_flair_text}
                                    </span>
                                )}

                                <a
                                    href={post.data.permalink}
                                    target="_blank"
                                    aria-label={`Read more about: ${post.data.title}`}
                                    rel="noreferrer"
                                    className="rounded-full p-1 text-gray-300 opacity-0 transition-all duration-300 hover:bg-gray-300/30 hover:text-gray-400/50 group-hover:opacity-100 dark:text-zinc-700 dark:hover:bg-zinc-700/30 dark:hover:text-zinc-600/50"
                                >
                                    <IconExternalLink size={20} />
                                </a>
                            </div>
                        </div>
                    </article>
                </Post>
            ))}
        </section>
    );
};
