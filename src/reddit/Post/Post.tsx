import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

export const Post = ({ children }: Props) => {
    return (
        <>
            {children}

            <div className="border-b-1 mx-2 border-gray-200 dark:border-zinc-800"></div>
        </>
    );
};
