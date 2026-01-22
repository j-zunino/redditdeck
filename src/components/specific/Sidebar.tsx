import type { ReactNode } from 'react';

interface Props {
    children?: ReactNode;
}

const mobile =
    'fixed bottom-2 left-1/2 flex -translate-x-1/2 flex-row justify-between gap-6 rounded-full border bg-surface-100 p-2 shadow-md shadow-surface-100';

const desktop =
    'md:static md:translate-x-0 md:h-screen md:flex-col gap-2 md:rounded-none md:border-0 md:border-r md:bg-transparent md:shadow-transparent';

export const Sidebar = ({ children }: Props) => {
    return <nav className={`${mobile} ${desktop}`}>{children}</nav>;
};
