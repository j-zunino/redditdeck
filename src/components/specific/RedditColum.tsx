import { useSubreddit } from '../../hooks';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';
import type { ListingResponse, Post } from '../../types/Subreddit';
import { RedditPost } from './RedditPost';
import { Loading } from '../shared';

interface Props {
    subreddit: string;
}

export const RedditColum = ({ subreddit }: Props) => {
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
            <div className="overflow-x-hidden overflow-y-auto">
                {posts.map((post: Post) => (
                    <RedditPost key={post.id} post={post} />
                ))}

                <div
                    ref={loadMoreRef}
                    className="mb-12 animate-pulse py-8 text-center"
                >
                    {isFetchingNextPage && <Loading />}
                </div>
            </div>
        </div>
    );
};
