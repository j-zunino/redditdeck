import { IconDotsVertical, IconRefresh, IconTrash } from '@tabler/icons-react';
import { ButtonIcon, Dropdown } from '../../components';

interface Props {
    subreddit: string;
}

export const SubRedditHeader = ({ subreddit }: Props) => {
    return (
        <div className="border-b-1 text-md sticky top-0 flex w-full items-center justify-between border-gray-200 bg-white p-2 text-black dark:border-zinc-800 dark:bg-black dark:text-white md:text-lg lg:text-xl">
            <h2 className="font-bold">{subreddit}</h2>

            <Dropdown icon={<IconDotsVertical />}>
                <ButtonIcon
                    icon={<IconRefresh size={20} />}
                    ariaLabel="Refresh subreddit"
                    labelEnd="Refresh"
                />
                <ButtonIcon
                    icon={<IconTrash size={20} />}
                    className="font-bold text-red-500 hover:bg-red-600/20"
                    ariaLabel="Remove subreddit"
                    labelEnd="Remove"
                />
            </Dropdown>
        </div>
    );
};
