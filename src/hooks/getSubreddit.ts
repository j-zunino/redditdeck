import { useInfiniteQuery } from '@tanstack/react-query';

type GetSubredditParams = {
    subreddit: string;
    pageParam?: string;
};

const getSubreddit = async ({ subreddit, pageParam }: GetSubredditParams) => {
    const url = new URL(
        `https://www.reddit.com/r/${subreddit}.json`,
        window.location.origin,
    );

    if (pageParam) url.searchParams.set('after', pageParam);

    const res = await fetch(url.toString());
    if (!res.ok) throw new Error('Failed to fetch');

    return res.json();
};

export const useSubreddit = (subreddit: string) =>
    useInfiniteQuery({
        queryKey: ['subreddit', subreddit],
        queryFn: ({ pageParam, queryKey }) => {
            const [, subreddit] = queryKey as [string, string];
            return getSubreddit({ subreddit, pageParam });
        },
        initialPageParam: undefined,
        getNextPageParam: (lastPage) => lastPage.data.after,
        staleTime: 1000 * 60 * 30,
        gcTime: 1000 * 60 * 60,
        enabled: Boolean(subreddit),
    });
