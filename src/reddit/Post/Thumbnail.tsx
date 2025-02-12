import { IconArticle } from '@tabler/icons-react';

interface Props {
    alt: string;
    thumbnail: string;
    is_video: boolean;
}

export const Thumbnail = ({ alt, thumbnail, is_video }: Props) => {
    return (
        <>
            {is_video === true ||
            thumbnail === 'self' ||
            thumbnail === 'default' ? (
                <div className="min-w-24 border-1 mr-4 hidden h-20 w-24 items-center justify-center rounded-md border-gray-200 bg-gray-100 text-gray-500 dark:border-zinc-800 dark:bg-black dark:text-zinc-700 lg:flex">
                    <IconArticle />
                </div>
            ) : (
                <img
                    src={thumbnail}
                    alt={alt}
                    className="min-w-24 mr-4 hidden h-20 w-24 rounded-md object-cover lg:flex"
                />
            )}
        </>
    );
};
