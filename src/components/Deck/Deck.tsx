import { Sidebar } from '../Sidebar';
import { Subreddit } from '../Subreddit/Subreddit';

export const Deck = () => {
    return (
        <div className="flex">
            <Sidebar />
            <Subreddit />
            <Subreddit />
        </div>
    );
};
