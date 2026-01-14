import type { FormEvent, RefObject } from 'react';

export const handleOpen = (
    event: FormEvent,
    modalRef: RefObject<HTMLDialogElement | null>,
) => {
    event.preventDefault();
    modalRef.current?.showModal();
};

export const handleClose = (
    event: FormEvent,
    modalRef: RefObject<HTMLDialogElement | null>,
) => {
    event.preventDefault();
    modalRef.current?.close();
};
