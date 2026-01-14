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
        <div className="flex min-w-[50dvw] flex-col border-r">
            <header className="flex shrink-0 justify-between border-b p-2">
                <h3 className="text-md w-full">
                    r/<strong className="capitalize">{subreddit}</strong>
                </h3>

                <button
                    onClick={() => onRemove(subreddit)}
                    className="px-2 hover:bg-surface-300"
                >
                    Remove
                </button>
            </header>

            <div className="flex-1 overflow-x-hidden overflow-y-auto">
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
