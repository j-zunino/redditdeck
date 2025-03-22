import {
    IconArrowLeft,
    IconExclamationCircleFilled,
} from '@tabler/icons-react';
import { SubReddit } from '../reddit';
import { SubRedditContextProvider } from '../reddit/Subreddit/SubRedditContext';

interface Props {
    subRedditList: string[];
}

export const Deck = ({ subRedditList }: Props) => {
    if (subRedditList.length <= 0) {
        return (
            <div className="flex h-screen flex-1 flex-col items-center justify-center text-center text-sky-400">
                <IconArrowLeft className="left-15 absolute top-4" />
                <IconExclamationCircleFilled size={34} />
                <h1 className="text-2xl font-bold">
                    There are no Subreddits to display!
                </h1>
                <p>Click the button on the sidebar to add one.</p>
            </div>
        );
    }

    return (
        <main className="flex flex-1">
            {subRedditList.map((subReddit) => (
                <SubRedditContextProvider key={subReddit} subreddit={subReddit}>
                    <SubReddit key={subReddit} subreddit={subReddit} />
                </SubRedditContextProvider>
            ))}
        </main>
    );
};
