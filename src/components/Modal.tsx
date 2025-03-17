import { ReactNode } from 'react';
import { useClickOutside } from '../hooks';

interface Props {
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

export const Modal = ({ children, isOpen, onClose }: Props) => {
    const { elementRef } = useClickOutside<HTMLDialogElement>(onClose);

    if (!isOpen) return null;

    return (
        <>
            <dialog
                ref={elementRef}
                role="dialog"
                className="border-1 fixed inset-x-0 top-20 z-50 mx-auto flex max-h-fit max-w-xl flex-col rounded-md border-gray-200 bg-white p-12 px-4 text-black dark:border-zinc-800 dark:bg-zinc-900 dark:text-white sm:w-3/4"
            >
                {children}
            </dialog>

            <div className="absolute z-20 h-full w-full bg-black/20"></div>
        </>
    );
};
