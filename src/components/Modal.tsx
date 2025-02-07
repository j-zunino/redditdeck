import { useEffect, useRef } from 'react';

interface Props {
    title: string;
    body: string;
    placeHolder?: string;
    button?: string;
    buttonAccept: string;
    isOpen: boolean;
    onClose: () => void;
    parentMethod?: () => void;
}

export const Modal = ({
    title,
    body,
    placeHolder,
    button,
    buttonAccept,
    isOpen,
    onClose,
    parentMethod
}: Props) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        const handleClickOutside = (event: MouseEvent) => {
            if (
                modalRef.current &&
                !modalRef.current.contains(event.target as Node)
            ) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <>
            <article
                ref={modalRef}
                role="dialog"
                className="fixed inset-x-0 top-20 z-50 mx-auto flex max-h-fit max-w-xl flex-col rounded-md bg-white p-12 px-4 sm:w-3/4"
            >
                <div className="mb-4 text-center">
                    <h2 className="text-xl font-bold">{title}</h2>
                    <p className="text-gray-600">{body}</p>
                </div>
                <form action="" className="flex flex-col">
                    {placeHolder && (
                        <input
                            required
                            type="text"
                            placeholder={placeHolder}
                            className="mx-10 mb-4 rounded-full bg-gray-100 p-2 px-4"
                        />
                    )}
                    <div className="flex justify-center">
                        {button && (
                            <button
                                onClick={onClose}
                                type="button"
                                className="mr-4 rounded-full bg-gray-100 p-2 px-4 text-gray-500 hover:bg-gray-200"
                            >
                                {button}
                            </button>
                        )}
                        <button
                            onClick={parentMethod}
                            className="rounded-full bg-orange-600 p-2 px-4 text-white hover:bg-orange-700"
                        >
                            {buttonAccept}
                        </button>
                    </div>
                </form>
            </article>
            <div className="absolute z-20 h-full w-full bg-gray-950 opacity-40"></div>
        </>
    );
};
