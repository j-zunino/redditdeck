import { IconPlus } from '@tabler/icons-react';

interface Props {
    parentMethod?: () => void;
}

export const Sidebar = ({ parentMethod }: Props) => {
    return (
        <nav className="border-r-1 sticky left-0 top-0 z-10 flex h-screen items-start justify-center border-gray-200 bg-white p-2 text-2xl font-bold">
            <button
                onClick={parentMethod}
                role="button"
                aria-label="Add Subreddit"
                className="max-h-fit p-2 text-black hover:rounded-full hover:bg-gray-50"
            >
                <IconPlus />
            </button>
        </nav>
    );
};
