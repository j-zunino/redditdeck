import { SubReddit } from '../reddit';

interface Props {
    subRedditList: string[];
}

export const Deck = ({ subRedditList }: Props) => {
    return (
        <>
            {subRedditList.map((subReddit) => (
                <SubReddit key={subReddit} subreddit={subReddit} />
            ))}
        </>
    );
};
