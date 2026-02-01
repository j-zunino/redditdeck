import { useRef, useState } from 'react';

interface Props {
    children: React.ReactNode;
    minWidth?: number;
    initialWidth?: number;
}

export function ResizableContent({
    children,
    minWidth = 300,
    initialWidth = 300,
}: Props) {
    const [width, setWidth] = useState(initialWidth);
    const startX = useRef(0);
    const startWidth = useRef(0);

    const onPointerDown = (e: React.PointerEvent) => {
        startX.current = e.clientX;
        startWidth.current = width;

        document.body.style.cursor = 'col-resize';
        document.body.style.userSelect = 'none';
        document.addEventListener('pointermove', onPointerMove);
        document.addEventListener('pointerup', onPointerUp);
    };

    const onPointerMove = (e: PointerEvent) => {
        const delta = e.clientX - startX.current;
        setWidth(Math.max(minWidth, startWidth.current + delta));
    };

    const onPointerUp = () => {
        document.body.style.cursor = 'unset';
        document.body.style.userSelect = 'none';
        document.removeEventListener('pointermove', onPointerMove);
        document.removeEventListener('pointerup', onPointerUp);
    };

    return (
        <section
            style={{ width }}
            className="relative flex shrink-0 flex-col border-r md:border-none"
        >
            {children}

            <div
                onPointerDown={onPointerDown}
                className="absolute right-0 z-10 hidden h-full cursor-col-resize border-r transition-colors after:absolute after:inset-y-0 after:-right-2.5 after:w-5 after:content-[''] hover:border-brand-hover active:border-brand-main md:block md:block"
            />
        </section>
    );
}
