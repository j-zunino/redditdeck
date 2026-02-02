import { useRef, useState, useCallback } from 'react';

interface Options {
    minWidth: number;
    initialWidth: number;
}

export const useHorizontalResize = ({ minWidth, initialWidth }: Options) => {
    const [width, setWidth] = useState(initialWidth);
    const startX = useRef(0);
    const startWidth = useRef(0);

    const onPointerMove = useCallback(
        (e: PointerEvent) => {
            const delta = e.clientX - startX.current;
            setWidth(Math.max(minWidth, startWidth.current + delta));
        },
        [minWidth],
    );

    const onPointerUp = useCallback(() => {
        document.body.style.cursor = 'unset';
        document.body.style.userSelect = 'unset';
        document.removeEventListener('pointermove', onPointerMove);
        document.removeEventListener('pointerup', onPointerUp);
    }, [onPointerMove]);

    const onPointerDown = useCallback(
        (e: React.PointerEvent) => {
            startX.current = e.clientX;
            startWidth.current = width;

            document.body.style.cursor = 'col-resize';
            document.body.style.userSelect = 'none';
            document.addEventListener('pointermove', onPointerMove);
            document.addEventListener('pointerup', onPointerUp);
        },
        [width, onPointerMove, onPointerUp],
    );

    return {
        width,
        onPointerDown,
    };
};
