import { TbMoodConfuzedFilled } from 'react-icons/tb';
import { useSubreddit } from '../../hooks';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';
import type { ListingResponse, Post } from '../../types/Subreddit';
import { Loading } from '../shared';
import { RedditPost } from './RedditPost';

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

    if (isLoading) {
        return (
            <div className="flex h-full w-full justify-center">
                <Loading />
            </div>
        );
    }

    if (isError || !data) {
        return (
            <div className="flex h-full flex-col items-center justify-center p-2">
                <TbMoodConfuzedFilled size={80} />
                <p className="max-w-100 text-pretty">
                    Looks like Reddit may have <b>rate-limited</b> or{' '}
                    <b>temporarily block requests</b>, please try agarin later.
                </p>
            </div>
        );
    }

    const posts =
        data.pages.flatMap((page) =>
            page.data.children.map((c: ListingResponse) => c.data),
        ) ?? [];

    return (
        <div className="flex flex-col overflow-x-hidden overflow-y-auto">
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
    );
};
