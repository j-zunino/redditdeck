import { UpvoteIcon, DownvoteIcon } from '../icons';
import { Thumbnail } from '../Thumbnail';

interface Props {
    author: string;
    title?: string;
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
            <article className="m-2 flex cursor-pointer items-center rounded-xl bg-gray-50 p-4 hover:bg-gray-100">
                <div className="m-4 ml-0 flex-row justify-center justify-items-center text-center">
                    {score >= 0 ? <UpvoteIcon /> : <DownvoteIcon />}
                    <p>{score}</p>
                </div>
                <Thumbnail thumbnail={thumbnail} is_video={is_video} />
                <div>
                    <p>u/{author}</p>
                    <h2 className="mb-3 font-black">{title}</h2>
                    <span
                        className="text-dark rounded-full p-2 py-0.5 text-xs"
                        style={{ backgroundColor: link_flair_background_color }}
                    >
                        {link_flair_text}
                    </span>
                </div>
            </article>

            <div className="border-1 mx-2 border-gray-200"></div>
        </>
    );
};
