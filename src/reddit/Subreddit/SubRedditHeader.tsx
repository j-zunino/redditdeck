import { IconDotsVertical } from '@tabler/icons-react';

interface Props {
    subreddit: string;
}

export const SubRedditHeader = ({ subreddit }: Props) => {
    return (
        <div className="border-b-1 text-md sticky top-0 flex w-full items-center justify-between border-gray-200 bg-white font-bold text-black dark:border-zinc-800 dark:bg-black dark:text-white  md:text-lg lg:text-xl">
            <h2 className="p-2">{subreddit}</h2>
            <div className="m-1 p-2 hover:rounded-full hover:bg-gray-50 dark:hover:bg-zinc-900">
                <IconDotsVertical />
            </div>
        </div>
    );
};
