interface Props {
    author: string;
    title?: string;
    score: number;
    link_flair_text: string;
    link_flair_background_color: string;
}

export const Post = ({
    author,
    title,
    score,
    link_flair_text,
    link_flair_background_color
}: Props) => {
    return (
        <>
            <div className="border-gray-100 border-1"></div>

            <article className="flex items-center hover:bg-gray-100 p-4 m-2 rounded-xl cursor-pointer">
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
        </>
    );
};
