import { Sidebar } from '../Sidebar';
import { Subreddit } from '../Subreddit/Subreddit';

export const Deck = () => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex flex-1">
                <Subreddit subreddit="all" />
                <Subreddit subreddit="unixporn" />
            </div>
        </div>
    );
};
