import { ReactNode } from 'react';

interface Props {
    labelStart?: string;
    labelEnd?: string;
    icon: ReactNode;
    role?: string;
    ariaLabel: string;
    className?: string;
    parentMethod?: () => void;
}

export const ButtonIcon = ({
    labelStart,
    labelEnd,
    icon,
    role,
    ariaLabel,
    className,
    parentMethod
}: Props) => {
    return (
        <button
            className={`flex items-center justify-center gap-2 rounded-full p-2 text-sm ${className ? className : 'hover:bg-gray-50 dark:hover:bg-zinc-800'} `}
            onClick={parentMethod}
            role={role}
            aria-label={ariaLabel}
        >
            {labelStart}
            {icon}
            {labelEnd}
        </button>
    );
};
