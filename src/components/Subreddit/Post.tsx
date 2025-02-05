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
            <article className="flex items-center bg-gray-50 hover:bg-gray-100 p-4 m-2 rounded-xl cursor-pointer">
                <div className="flex-row justify-center text-center m-4 ml-0">
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
                {is_video === true || thumbnail === 'self' ? (
                    <div className="flex bg-gray-200 text-gray-500 rounded-md justify-center items-center w-24 h-20 min-w-20 mr-4">
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
                        className="w-24 h-20 min-w-20 mr-4 rounded-md object-cover"
                    />
                )}
                <div>
                    <p>u/{author}</p>
                    <h2 className="font-black mb-3">{title}</h2>
                    <span
                        className="text-dark text-xs p-2 py-0.5 rounded-full"
                        style={{ backgroundColor: link_flair_background_color }}
                    >
                        {link_flair_text}
                    </span>
                </div>
            </article>

            <div className="border-gray-200 border-1 mx-2"></div>
        </>
    );
};
