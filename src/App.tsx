import { RedditPost } from './components/specific';
import { useSubreddit } from './hooks';
import { useInfiniteScroll } from './hooks/useInfiniteScroll';
import type { ListingResponse, Post } from './types/Subreddit';

function App() {
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
        isError,
    } = useSubreddit();

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
        <div className="flex max-h-screen overflow-x-auto p-5">
            <div className="overflow-y-auto border border-global-border">
                {posts.map((post: Post) => (
                    <RedditPost key={post.id} post={post} />
                ))}

                <div ref={loadMoreRef} className="p-4 text-center">
                    {isFetchingNextPage && 'Loading more...'}
                </div>
            </div>
        </div>
    );
}

export default App;
