import { IconDotsVertical } from '@tabler/icons-react';

interface Props {
    subreddit: string;
}

export const SubRedditHeader = ({ subreddit }: Props) => {
    return (
        <div className="border-b-1 text-md sticky top-0 flex w-full items-center justify-between border-gray-200 bg-white font-bold md:text-lg lg:text-xl">
            <h2 className="p-2">{subreddit}</h2>
            <div className="m-1 p-2 text-black hover:rounded-full hover:bg-gray-50">
                <IconDotsVertical />
            </div>
        </div>
    );
};
