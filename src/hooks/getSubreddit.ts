import { useInfiniteQuery } from '@tanstack/react-query';

const getSubreddit = async ({ pageParam }: { pageParam?: string }) => {
    const url = new URL('https://www.reddit.com/r/all.json');
    if (pageParam) url.searchParams.set('after', pageParam);

    const res = await fetch(url.toString());
    if (!res.ok) throw new Error('Failed to fetch');

    return res.json();
};

export const useSubreddit = () =>
    useInfiniteQuery({
        queryKey: ['subreddit'],
        queryFn: getSubreddit,
        initialPageParam: undefined,
        getNextPageParam: (lastPage) => lastPage.data.after,
        staleTime: 1000 * 60 * 30,
        gcTime: 1000 * 60 * 60,
    });
