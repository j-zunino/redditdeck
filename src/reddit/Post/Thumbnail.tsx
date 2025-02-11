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
                <div className="min-w-24 mr-4 hidden h-20 w-24 items-center justify-center rounded-md bg-gray-200 text-gray-500 lg:flex">
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
