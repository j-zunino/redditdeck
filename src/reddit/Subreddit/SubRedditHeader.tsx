import { IconDotsVertical, IconRefresh, IconTrash } from '@tabler/icons-react';
import { ButtonIcon, Dropdown } from '../../components';

interface Props {
    subreddit: string;
    onRefresh: () => void;
}

export const SubRedditHeader = ({ subreddit, onRefresh }: Props) => {
    return (
        <div className="border-b-1 text-md sticky top-0 flex w-full items-center justify-between border-gray-200 bg-white p-2 text-black dark:border-zinc-800 dark:bg-black dark:text-white md:text-lg lg:text-xl">
            <h2 className="font-bold">{subreddit}</h2>

            <Dropdown icon={<IconDotsVertical />}>
                <ButtonIcon
                    icon={<IconRefresh size={20} />}
                    onClick={onRefresh}
                    labelEnd="Refresh"
                    ariaLabel="Refresh subreddit"
                    className="min-w-full hover:bg-gray-100 dark:hover:bg-zinc-800"
                />
                <ButtonIcon
                    icon={<IconTrash size={20} />}
                    labelEnd="Remove"
                    ariaLabel="Remove subreddit"
                    className="min-w-full font-bold text-red-500 hover:bg-red-500/20"
                />
            </Dropdown>
        </div>
    );
};
