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
        <div className="border-r min-w-[50dvw]">
            <header className="flex justify-between p-2 border-b">
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

            <div className="h-full max-h-screen w-full overflow-auto">
                {posts.map((post: Post) => (
                    <RedditPost key={post.id} post={post} />
                ))}

                <div ref={loadMoreRef} className="p-4 text-center">
                    {isFetchingNextPage && 'Loading more...'}
                </div>
            </div>
        </div>
    );
};
