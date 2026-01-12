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
        <div className="h-full max-h-screen w-full overflow-auto border border-global-border">
            <div className="flex justify-between">
                <h3 className="w-full bg-global-bg-hover text-center">
                    {subreddit}
                </h3>

                <button onClick={() => onRemove(subreddit)}>Remove</button>
            </div>

            <div className="overflow-y-auto">
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
