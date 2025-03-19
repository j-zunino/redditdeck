import { ReactNode } from 'react';

interface Props {
    labelStart?: string;
    labelEnd?: string;
    icon: ReactNode;
    type?: 'button' | 'submit' | 'reset';
    ariaLabel: string;
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
}

export const Button = ({
    labelStart,
    labelEnd,
    icon,
    type = 'button',
    ariaLabel,
    className,
    disabled = false,
    onClick,
}: Props) => {
    return (
        <button
            className={`flex items-center justify-center gap-2 rounded-full p-2 text-sm  ${className ? className : 'hover:bg-gray-100 dark:hover:bg-zinc-800'} ${disabled ? 'cursor-not-allowed opacity-20' : null}`}
            onClick={onClick}
            type={type}
            role={type}
            aria-label={ariaLabel}
            disabled={disabled}
        >
            {labelStart}
            {icon}
            {labelEnd}
        </button>
    );
};
