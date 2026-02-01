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
        document.body.style.userSelect = 'unset';
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
                className="group absolute right-0 z-10 hidden h-full cursor-col-resize border-r transition-colors after:absolute after:inset-y-0 after:-right-2.5 after:w-5 after:content-[''] hover:border-brand-hover active:border-brand-main md:block"
            >
                <span className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 rounded-xl bg-surface-300 px-2 py-0.5 opacity-0 shadow-md shadow-surface-100 transition-opacity group-hover:opacity-100 group-active:opacity-100">
                    <span className="text-content-strong">
                        {Math.trunc(width)}
                    </span>
                    <small className="text-content-weak">px</small>
                </span>
            </div>
        </section>
    );
}
