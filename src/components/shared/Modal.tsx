import type { ReactNode, RefObject } from 'react';
import { TbX } from 'react-icons/tb';
import { handleClose } from '../../utils';

interface Props {
    children: ReactNode;
    modalRef: RefObject<HTMLDialogElement | null>;
}

export const Modal = ({ children, modalRef }: Props) => {
    return (
        <dialog
            ref={modalRef}
            className="h-full max-h-none w-full max-w-none bg-transparent backdrop-brightness-60"
        >
            <div className="flex h-full w-full flex-col items-center justify-center">
                <div className="flex flex-col space-y-4 rounded-2xl bg-surface-300 p-4">
                    <div className="flex w-full justify-end">
                        <button
                            onClick={(e) => handleClose(e, modalRef)}
                            className="aspect-square rounded-full bg-surface-400 p-1 text-content-weak hover:bg-surface-500 hover:text-content-main"
                        >
                            <TbX size={24} className="text-inherit" />
                        </button>
                    </div>

                    {children}
                </div>
            </div>
        </dialog>
    );
};
