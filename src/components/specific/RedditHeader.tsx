import { TbTrash } from 'react-icons/tb';

interface Props {
    subreddit: string;
    onRemove: (sub: string) => void;
}

export const RedditHeader = ({ subreddit, onRemove }: Props) => {
    return (
        <header className="flex shrink-0 items-center justify-between border-b px-4 py-2">
            <h3 className="text-md w-full">
                r/<strong className="capitalize">{subreddit}</strong>
            </h3>

            <button
                onClick={() => onRemove(subreddit)}
                className="aspect-square rounded-full p-1 hover:bg-surface-300"
            >
                <TbTrash size={24} className="text-inherit" />
            </button>
        </header>
    );
};
