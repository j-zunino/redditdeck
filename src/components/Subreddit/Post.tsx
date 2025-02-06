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
                    {score >= 0 ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 20v-8h-3.586a1 1 0 0 1 -.707 -1.707l6.586 -6.586a1 1 0 0 1 1.414 0l6.586 6.586a1 1 0 0 1 -.707 1.707h-3.586v8a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M15 4v8h3.586a1 1 0 0 1 .707 1.707l-6.586 6.586a1 1 0 0 1 -1.414 0l-6.586 -6.586a1 1 0 0 1 .707 -1.707h3.586v-8a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1z" />
                        </svg>
                    )}
                    <p>{score}</p>
                </div>
                {is_video === true ||
                thumbnail === 'self' ||
                thumbnail === 'default' ? (
                    <div className="min-w-24 mr-4 flex h-20 w-24 items-center justify-center rounded-md bg-gray-200 text-gray-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                            <path d="M7 8h10" />
                            <path d="M7 12h10" />
                            <path d="M7 16h10" />
                        </svg>
                    </div>
                ) : (
                    <img
                        src={thumbnail}
                        alt=""
                        className="min-w-24 mr-4 h-20 w-24 rounded-md object-cover"
                    />
                )}
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
