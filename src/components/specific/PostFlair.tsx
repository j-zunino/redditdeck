import type { Post } from '../../types';
import { getReadableTextColor } from '../../utils';

interface Props {
    label: Post['link_flair_text'];
    background: Post['link_flair_background_color'];
}

export const PostFlair = ({ label, background }: Props) => {
    return (
        <span
            style={{
                backgroundColor: background,
                color: getReadableTextColor(background),
            }}
            className="rounded-2xl px-2"
        >
            {label}
        </span>
    );
};
