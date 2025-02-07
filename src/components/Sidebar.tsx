import { PlusIcon } from './icons';

interface Props {
    parentMethod?: () => void;
}

export const Sidebar = ({ parentMethod }: Props) => {
    return (
        <aside className="border-r-1 sticky left-0 top-0 z-10 flex h-screen justify-center border-gray-200 bg-white p-2 text-2xl font-bold">
            <button
                onClick={parentMethod}
                className="max-h-fit p-2 text-black hover:rounded-full hover:bg-gray-50"
            >
                <PlusIcon />
            </button>
        </aside>
    );
};
