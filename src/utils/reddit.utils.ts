import type { FormEvent } from 'react';

export const addSub = (e: FormEvent, subreddit: string) => {
    e.preventDefault();
    if (!subreddit) return;

    const url = new URL(window.location.href);

    const normalized = subreddit.toLowerCase();
    const subs = url.searchParams.getAll('sub').map((s) => s.toLowerCase());
    if (!subs.includes(normalized)) {
        url.searchParams.append('sub', normalized);
        window.history.pushState({}, '', url.toString());
    }
};
