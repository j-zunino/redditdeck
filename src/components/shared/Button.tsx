import type { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    variant?: 'default' | 'none';
    onClick?: () => {};
}

export const Button = ({ children, variant, onClick }: Props) => {
    if (variant === 'none') {
        return <button onClick={onClick}>{children}</button>;
    }

    return (
        <button
            onClick={onClick}
            title="Test"
            className="rounded-full bg-btn-bg px-4 py-2 font-bold text-btn-fg hover:bg-btn-bg-hover active:bg-btn-bg-active"
        >
            {children}
        </button>
    );
};
