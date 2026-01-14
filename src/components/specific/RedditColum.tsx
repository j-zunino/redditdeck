import { TbTrash } from 'react-icons/tb';
import { useSubreddit } from '../../hooks';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';
import type { ListingResponse, Post } from '../../types/Subreddit';
import { RedditPost } from './RedditPost';

interface Props {
    subreddit: string;
    onRemove: (sub: string) => void;
}

export const RedditColum = ({ subreddit, onRemove }: Props) => {
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
        isError,
    } = useSubreddit(subreddit);

    const loadMoreRef = useInfiniteScroll(() => {
        if (hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }
    });

    if (isLoading) return <div>Loading...</div>;
    if (isError || !data) return <div>Error loading subreddit</div>;

    const posts =
        data.pages.flatMap((page) =>
            page.data.children.map((c: ListingResponse) => c.data),
        ) ?? [];

    return (
        <div className="flex w-full min-w-[95dvw] flex-col border-r sm:min-w-140">
            <header className="flex shrink-0 items-center justify-between border-b p-2">
                <h3 className="text-md w-full">
                    r/<strong className="capitalize">{subreddit}</strong>
                </h3>

                <button
                    onClick={() => onRemove(subreddit)}
                    className="aspect-square rounded-full p-1 hover:bg-surface-300 hover:text-content-main"
                >
                    <TbTrash size={24} className="text-inherit" />
                </button>
            </header>

            <div className="overflow-x-hidden overflow-y-auto">
                {posts.map((post: Post) => (
                    <RedditPost key={post.id} post={post} />
                ))}

                <div
                    ref={loadMoreRef}
                    className="mb-6 animate-pulse p-2 text-center"
                >
                    {isFetchingNextPage && 'Loading more...'}
                </div>
            </div>
        </div>
    );
};
