import { TbMoodConfuzedFilled, TbReload } from 'react-icons/tb';
import { useInfiniteScroll, useSubreddit } from '../../hooks';
import type { Post } from '../../types';
import { Button, Loading } from '../shared';
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
        refetch,
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
            <div className="flex h-full flex-col items-center justify-center space-y-4 p-2">
                <TbMoodConfuzedFilled size={80} />
                <p className="max-w-100 text-pretty">
                    Reddit may have <b>rate-limited</b> or{' '}
                    <b>temporarily block requests</b>, please try again later.
                </p>

                <Button
                    onClick={() => refetch()}
                    icon={<TbReload size={24} />}
                    label="Try again"
                />
            </div>
        );
    }

    const posts =
        data.pages.flatMap((page) =>
            page.data.children.map((c: { data: Post }) => c.data),
        ) ?? [];

    return (
        <div className="flex flex-col overflow-x-hidden overflow-y-auto">
            {posts.map((post: Post) => (
                <RedditPost key={post.id} post={post} />
            ))}

            <div
                ref={loadMoreRef}
                className="min-h-24 animate-pulse text-center"
            >
                {isFetchingNextPage && <Loading />}
            </div>
        </div>
    );
};
