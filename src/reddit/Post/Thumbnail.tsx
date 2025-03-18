import {
    IconArticle,
    IconPhoto,
    IconVideo,
    IconXxx,
} from '@tabler/icons-react';
import { ReactNode } from 'react';

interface Props {
    alt: string;
    thumbnail: string;
    is_video: boolean;
    preview: { enabled: boolean; images: { source: { url: string } }[] } | null;
}

export const Thumbnail = ({ alt, thumbnail, preview, is_video }: Props) => {
    let imageUrl = thumbnail;
    let icon: ReactNode;

    if (preview?.enabled && preview?.images?.[0]?.source?.url) {
        imageUrl = preview.images[0].source.url.replace('&amp;', '&');
    }

    switch (thumbnail) {
        case 'image':
            icon = <IconPhoto />;
            break;
        case 'nsfw':
            icon = <IconXxx />;
            break;
        case 'self':
        case 'default':
        case '':
            icon = <IconArticle />;
            break;

        default:
            break;
    }

    if (is_video) {
        icon = <IconVideo />;
    }

    if (icon) {
        return (
            <div className="border-1 min-w-24 mr-4 hidden h-20 w-24 items-center justify-center rounded-md border-gray-200 bg-gray-100 text-gray-500 dark:border-zinc-800 dark:bg-black dark:text-zinc-700 sm:flex">
                {icon}
            </div>
        );
    }

    return (
        <img
            src={imageUrl}
            alt={alt}
            className="border-1 max-w-24 mr-4 hidden h-20 w-24 rounded-md border-gray-200 object-cover dark:border-zinc-800 sm:flex"
            loading="lazy"
        />
    );
};
