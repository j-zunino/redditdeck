import {
    IconArticle,
    IconPhoto,
    IconVideo,
    IconXxx
} from '@tabler/icons-react';
import { ReactNode } from 'react';

interface Props {
    alt: string;
    thumbnail: string;
    is_video: boolean;
}

let icon: ReactNode;

export const Thumbnail = ({ alt, thumbnail, is_video }: Props) => {
    if (is_video) {
        icon = <IconVideo />;
    }

    if (thumbnail === 'image') {
        icon = <IconPhoto />;
    }

    if (thumbnail === 'nsfw') {
        icon = <IconXxx />;
    }

    if (thumbnail === 'self' || thumbnail === 'default' || thumbnail === '') {
        icon = <IconArticle />;
    }

    if (icon) {
        return (
            <div className="min-w-24 border-1 mr-4 hidden h-20 w-24 items-center justify-center rounded-md border-gray-200 bg-gray-100 text-gray-500 dark:border-zinc-800 dark:bg-black dark:text-zinc-700 lg:flex">
                {icon}
            </div>
        );
    }

    return (
        <img
            src={thumbnail}
            alt={alt}
            className="min-w-24 mr-4 hidden h-20 w-24 rounded-md object-cover lg:flex"
        />
    );
};
