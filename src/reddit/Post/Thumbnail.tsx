import {
    IconArticle,
    IconPhoto,
    IconVideo,
    IconXxx,
} from '@tabler/icons-react';
import { ReactNode, useState } from 'react';

interface Props {
    alt: string;
    thumbnail: string;
    is_video: boolean;
    preview: { enabled: boolean; images: { source: { url: string } }[] } | null;
}

export const Thumbnail = ({ alt, thumbnail, preview, is_video }: Props) => {
    const [loaded, setLoaded] = useState(false);
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

    return (
        <div className="border-1 min-w-24 mr-4 hidden h-20 w-24 items-center justify-center overflow-clip rounded-md border-gray-200 bg-gray-100 text-gray-500 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-700 sm:flex">
            {icon ? (
                icon
            ) : (
                <img
                    src={imageUrl}
                    alt={alt}
                    className={`${loaded ? 'opacity-100' : 'opacity-0'} h-full w-full object-cover transition-opacity`}
                    loading="lazy"
                    onLoad={() => setLoaded(true)}
                />
            )}
        </div>
    );
};
