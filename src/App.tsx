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
        <>
            <div className="m-10 border-x-2 border-global-border">
                {posts.map((post: Post) => (
                    <RedditPost key={post.id} post={post} />
                ))}
            </div>
        </>
    );
}

export default App;
