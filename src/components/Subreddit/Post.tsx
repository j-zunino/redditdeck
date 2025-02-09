import { Thumbnail, UpvoteIcon, DownvoteIcon } from '../../components';

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
}

export const Post = ({
    author,
    title,
    score,
    link_flair_text,
    link_flair_background_color,
    thumbnail,
    is_video
}: Props) => {
    return (
        <>
            <article className="m-2 flex cursor-pointer items-center rounded-xl bg-gray-50 p-2 hover:bg-gray-100">
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
                        <div className="mr-4 flex h-fit">
                            {score >= 0 ? <UpvoteIcon /> : <DownvoteIcon />}
                            <p className="flex justify-center">{score}</p>
                        </div>

                        {link_flair_text !== null ? (
                            <span
                                className="text-dark rounded-full p-2 py-0.5 text-xs"
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
                        ) : undefined}
                    </div>
                </div>
            </article>

            <div className="border-b-1 mx-2 border-gray-200"></div>
        </>
    );
};
