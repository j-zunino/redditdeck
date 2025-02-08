import { Subreddit } from '../../components';

interface Props {
    subRedditList: string[];
}

export const Deck = ({ subRedditList }: Props) => {
    return (
        <>
            {subRedditList.map((subReddit) => (
                <Subreddit key={subReddit} subreddit={subReddit} />
            ))}
        </>
    );
};
