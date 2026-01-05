import type { ReactNode, RefObject } from 'react';
import { handleClose } from '../../utils/modal.utils';

interface Props {
    children: ReactNode;
    modalRef: RefObject<HTMLDialogElement | null>;
}

export const Modal = ({ children, modalRef }: Props) => {
    return (
        <dialog
            ref={modalRef}
            className="h-full max-h-none w-full max-w-none bg-transparent backdrop-brightness-50"
        >
            <div className="flex h-full w-full flex-col items-center justify-center">
                <div className="flex flex-col items-end">
                    <button
                        onClick={(e) => handleClose(e, modalRef)}
                        className="text-white"
                    >
                        x
                    </button>

                    {children}
                </div>
            </div>
        </dialog>
    );
};
