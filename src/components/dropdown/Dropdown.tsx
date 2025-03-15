import { ReactNode, useState } from 'react';
import { useClickOutside } from '../../hooks/useClickOutside';
import { Button } from '../Button';
import DropdownContent from './DropdownContent';

interface Props {
    icon: ReactNode;
    children: ReactNode;
}

export function Dropdown({ icon, children }: Props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen((open) => !open);
    };

    const { elementRef } = useClickOutside(() => setIsOpen(false));

    return (
        <div className="relative flex flex-col items-end" ref={elementRef}>
            <Button icon={icon} ariaLabel="Dropdown" onClick={toggleDropdown} />
            {isOpen ? <DropdownContent>{children}</DropdownContent> : null}
        </div>
    );
}
