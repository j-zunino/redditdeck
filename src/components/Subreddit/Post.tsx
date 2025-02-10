import {
    IconArrowBigDown,
    IconArrowBigUp,
    IconLink
} from '@tabler/icons-react';
import { Thumbnail } from '../../components';

interface Props {
    author: string;
    title: string;
    score: number;
    link_flair_text: string;
    link_flair_background_color: string;
    thumbnail: string;
    thumbnail_height: number;
    thumbnail_width: number;
    is_video: boolean;
    permalink: string;
}

export const Post = ({
    author,
    title,
    score,
    link_flair_text,
    link_flair_background_color,
    thumbnail,
    is_video,
    permalink
}: Props) => {
    return (
        <>
            <article className="m-2 flex items-center rounded-xl bg-gray-50 p-2 hover:bg-gray-100">
                <Thumbnail
                    thumbnail={thumbnail}
                    is_video={is_video}
                    alt={title}
                />
                <div>
                    <p className="md:text-md text-xs sm:text-sm">u/{author}</p>
                    <h2 className="md:text-md mb-2 text-xs font-black sm:text-sm">
                        {title}
                    </h2>
                    <div className="flex items-center text-center">
                        <div className="mr-2 flex h-fit items-center">
                            {score >= 0 ? (
                                <IconArrowBigUp size={20} />
                            ) : (
                                <IconArrowBigDown size={20} />
                            )}
                            <p className="flex justify-center">{score}</p>
                        </div>

                        {link_flair_text === null ? undefined : (
                            <span
                                className="text-dark mr-2 rounded-full p-2 py-0.5 text-xs"
                                style={{
                                    backgroundColor:
                                        link_flair_background_color === '' ||
                                        link_flair_background_color === null
                                            ? '#E7E7E7'
                                            : link_flair_background_color
                                }}
                            >
                                {link_flair_text}
                            </span>
                        )}

                        <a
                            href={permalink}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-full p-1 text-gray-400 hover:bg-gray-200"
                        >
                            <IconLink size={20} />
                        </a>
                    </div>
                </div>
            </article>

            <div className="border-b-1 mx-2 border-gray-200"></div>
        </>
    );
};
