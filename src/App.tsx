import { RedditPost } from './components/specific';
import { useSubreddit } from './hooks';
import type { ListingResponse, Post } from './types/Subreddit';

function App() {
    const { data, isLoading, isError } = useSubreddit();

    if (isLoading) return <div>Loading...</div>;
    if (isError || !data) return <div>Error loading subreddit</div>;

    const posts =
        data?.data?.children?.map((c: ListingResponse) => c.data) ?? [];

    console.log(posts);

    return (
        <div className="flex max-h-screen overflow-x-auto p-5">
            <div className="overflow-y-auto border border-global-border">
                {posts.map((post: Post) => (
                    <RedditPost key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
}

export default App;
