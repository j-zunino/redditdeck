import { useEffect, useRef, useState } from 'react';

interface Props {
    title: string;
    body: string;
    placeHolder?: string;
    button?: string;
    buttonAccept: string;
    isOpen: boolean;
    onClose: () => void;
    onSubmit?: (input: string) => void | undefined;
}

export const Modal = ({
    title,
    body,
    placeHolder,
    button,
    buttonAccept,
    isOpen,
    onClose,
    onSubmit
}: Props) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const [inputValue, setInputValue] = useState('');

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

    useEffect(() => {
        if (!isOpen) {
            setInputValue('');
        }
    }, [isOpen]);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (!onSubmit) return null;

        if (inputValue.trim()) {
            onSubmit(inputValue);
        }
    };

    if (!isOpen) return null;

    return (
        <>
            <article
                ref={modalRef}
                role="dialog"
                className="border-1 fixed inset-x-0 top-20 z-50 mx-auto flex max-h-fit max-w-xl flex-col rounded-md border-gray-200 bg-white p-12 px-4 text-black dark:border-zinc-800 dark:bg-zinc-900 dark:text-white sm:w-3/4"
            >
                <div className="mb-4 text-center">
                    <h2 className="text-xl font-bold">{title}</h2>
                    <p className="text-gray-600 dark:text-zinc-400">{body}</p>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col">
                    {placeHolder && (
                        <input
                            required
                            name="subRedditInput"
                            autoFocus={true}
                            value={inputValue}
                            type="text"
                            onChange={(event) =>
                                setInputValue(event.target.value)
                            }
                            placeholder={placeHolder}
                            className="mx-10 mb-4 rounded-full bg-gray-100 p-2 px-4 dark:bg-zinc-700"
                        />
                    )}
                    <div className="flex justify-center">
                        {button && (
                            <button
                                onClick={onClose}
                                type="button"
                                role="button"
                                aria-label={button}
                                className="mr-4 rounded-full bg-gray-100 p-2 px-4 text-gray-500 hover:bg-gray-200 dark:bg-zinc-700 dark:text-white dark:hover:bg-zinc-800"
                            >
                                {button}
                            </button>
                        )}
                        <button
                            type="submit"
                            role="button"
                            aria-label={buttonAccept}
                            className="rounded-full bg-orange-600 p-2 px-4 text-white hover:bg-orange-700"
                        >
                            {buttonAccept}
                        </button>
                    </div>
                </form>
            </article>

            <div className="absolute z-20 h-full w-full bg-black/20"></div>
        </>
    );
};
