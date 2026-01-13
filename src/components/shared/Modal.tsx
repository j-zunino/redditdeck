import type { ReactNode, RefObject } from 'react';
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
                <div className="flex flex-col space-y-4 bg-surface-300 p-8">
                    <div className="flex w-full justify-end">
                        <button
                            onClick={(e) => handleClose(e, modalRef)}
                            className="aspect-square bg-surface-400 px-2 hover:bg-surface-500 active:bg-surface-600"
                        >
                            x
                        </button>
                    </div>

                    {children}
                </div>
            </div>
        </dialog>
    );
};
