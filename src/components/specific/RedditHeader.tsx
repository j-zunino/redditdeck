import { TbTrash } from 'react-icons/tb';
import { Button } from '../shared';

interface Props {
    subreddit: string;
    onRemove: (sub: string) => void;
}

export const RedditHeader = ({ subreddit, onRemove }: Props) => {
    return (
        <header className="flex shrink-0 items-center justify-between border-b px-4 py-2">
            <h2 className="text-md w-full text-content-weak">
                r/
                <strong className="text-content-strong capitalize">
                    {subreddit}
                </strong>
            </h2>

            <Button
                aria-label="Remove subreddit"
                onClick={() => onRemove(subreddit)}
                icon={<TbTrash size={24} />}
            />
        </header>
    );
};
