export const hexToRgb = (color: string) => {
    const [r, g, b] = color
        .replace('#', '')
        .match(/.{2}/g)!
        .map((x) => parseInt(x, 16));

    return { r, g, b };
};

export const getReadableTextColor = (bg: string): string => {
    if (!bg || bg === 'transparent') return '#FFFFFF';

    const { r, g, b } = hexToRgb(bg);
    return (r * 299 + g * 587 + b * 114) / 1000 > 150 ? '#000000' : '#FFFFFF';
};
