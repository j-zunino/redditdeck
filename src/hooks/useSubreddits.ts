import { useCallback, useState } from 'react';
import { config } from '../config';

const getSubredditsFromUrl = (): Array<string> => {
    return new URLSearchParams(window.location.search)
        .getAll(config.urlParam)
        .map((sub) => sub.toLowerCase());
};

const writeSubredditToUrl = (subreddits: Array<string>) => {
    const url = new URL(window.location.href);

    url.searchParams.delete(config.urlParam);
    subreddits.forEach((sub) => {
        url.searchParams.append(config.urlParam, sub);
    });

    window.history.pushState({}, '', url.toString());
};

export const useSubreddits = () => {
    const [subreddits, setSubreddits] = useState<Array<string>>(() =>
        getSubredditsFromUrl(),
    );

    const addSubreddit = useCallback((subreddit: string) => {
        const normalized = subreddit.toLowerCase().trim();
        if (!normalized) return;

        setSubreddits((prev) => {
            if (prev.includes(normalized)) return prev;

            const next = [...prev, normalized];
            writeSubredditToUrl(next);
            return next;
        });
    }, []);

    const removeSubreddit = useCallback((subreddit: string) => {
        setSubreddits((prev) => {
            const next = prev.filter((sub) => sub !== subreddit);
            writeSubredditToUrl(next);
            return next;
        });
    }, []);

    return {
        subreddits,
        addSubreddit,
        removeSubreddit,
    };
};
