import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'default' | 'accent' | 'modal';

const VARIANT_STYLES: Record<ButtonVariant, string> = {
    default: 'hover:bg-surface-300',
    accent: 'bg-brand-main hover:bg-brand-hover',
    modal: 'text-content-weak bg-surface-400 hover:bg-surface-500',
};

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    icon?: ReactNode;
    variant?: ButtonVariant;
}
export const Button = ({
    label,
    icon,
    variant = 'default',
    className,
    ...props
}: Props) => {
    return (
        <button
            type="button"
            className={`${VARIANT_STYLES[variant]} ${className} ${label && icon && 'pr-2'} flex cursor-pointer items-center justify-center gap-1 rounded-full p-1`}
            {...props}
        >
            {icon && <span className="text-inherit">{icon}</span>}
            {label && <span className="text-inherit">{label}</span>}
        </button>
    );
};
