import { Children, ReactNode, useEffect, useRef, useState } from 'react';

interface Props {
    children: ReactNode;
}

export default function DropdownContent({ children }: Props) {
    const listRef = useRef<HTMLUListElement>(null);
    const [isScrollable, setIsScrollable] = useState(false);

    useEffect(() => {
        const ul = listRef.current;
        if (ul) {
            setIsScrollable(ul.scrollHeight > ul.clientHeight);
        }
    }, [children]);

    return (
        <div className="absolute top-12 mt-2 overflow-hidden rounded-md border border-gray-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
            <ul
                ref={listRef}
                className="no-scrollbar flex max-h-64 flex-col items-center overflow-y-scroll p-2"
            >
                {Children.map(children, (child, i) => (
                    <li className="w-full" key={i}>
                        {child}
                    </li>
                ))}
            </ul>
            {isScrollable ? (
                <div className="pointer-events-none absolute inset-x-0 bottom-[-0.1rem] h-20 bg-gradient-to-b from-transparent to-gray-100 dark:to-zinc-900" />
            ) : null}
        </div>
    );
}
