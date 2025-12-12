import { useQuery } from '@tanstack/react-query';

const getSubreddit = async () => {
    const response = await fetch('https://www.reddit.com/r/all.json');

    if (!response.ok) throw new Error('Failed to fetch');

    return response.json();
};

export const useSubreddit = () => {
    return useQuery({
        queryKey: ['subreddit'],
        queryFn: getSubreddit,
        staleTime: 1000 * 60 * 30, // 30 min
        gcTime: 1000 * 60 * 60, // 1h
    });
};
