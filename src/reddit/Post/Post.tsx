import {
    IconArrowBigDown,
    IconArrowBigUp,
    IconExternalLink
} from '@tabler/icons-react';
import { Thumbnail } from './Thumbnail';

interface Props {
    author: string;
    title: string;
    ups: number;
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
    ups,
    link_flair_text,
    link_flair_background_color,
    thumbnail,
    is_video,
    permalink
}: Props) => {
    return (
        <>
            <article className="group m-2 flex items-center rounded-xl p-2 hover:bg-gray-100 dark:hover:bg-zinc-900">
                <Thumbnail
                    thumbnail={thumbnail}
                    is_video={is_video}
                    alt={title}
                />
                <div>
                    <p className="md:text-md text-xs sm:text-sm">u/{author}</p>
                    <h2 className="md:text-md mb-2 line-clamp-2 text-xs font-black sm:text-sm">
                        {title}
                    </h2>
                    <div className="flex items-center text-center">
                        <div className="mr-2 flex h-fit items-center">
                            {ups >= 0 ? (
                                <IconArrowBigUp size={20} />
                            ) : (
                                <IconArrowBigDown size={20} />
                            )}
                            <p className="flex justify-center">{ups}</p>
                        </div>

                        {link_flair_text === null ? undefined : (
                            <span
                                className="mr-2 rounded-full p-2 py-0.5 text-xs text-black"
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
                            aria-label={`Read more about: ${title}`}
                            rel="noreferrer"
                            className="rounded-full p-1 text-gray-300 opacity-0 transition-all duration-300 hover:bg-gray-300/30 hover:text-gray-400/50 group-hover:opacity-100 dark:text-zinc-700 dark:hover:bg-zinc-700/30 dark:hover:text-zinc-600/50"
                        >
                            <IconExternalLink size={20} />
                        </a>
                    </div>
                </div>
            </article>

            <div className="border-b-1 mx-2 border-gray-200 dark:border-zinc-700"></div>
        </>
    );
};
