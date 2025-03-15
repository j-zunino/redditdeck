import { ReactNode } from 'react';

interface Props {
    labelStart?: string;
    labelEnd?: string;
    icon: ReactNode;
    type?: 'button' | 'submit' | 'reset';
    ariaLabel: string;
    className?: string;
    onClick?: () => void;
}

export const Button = ({
    labelStart,
    labelEnd,
    icon,
    type = 'button',
    ariaLabel,
    className,
    onClick,
}: Props) => {
    return (
        // TODO: Add disabled styles
        <button
            className={`flex items-center justify-center gap-2 rounded-full p-2 text-sm ${className ? className : 'hover:bg-gray-100 dark:hover:bg-zinc-800'} `}
            onClick={onClick}
            type={type}
            role={type}
            aria-label={ariaLabel}
        >
            {labelStart}
            {icon}
            {labelEnd}
        </button>
    );
};
