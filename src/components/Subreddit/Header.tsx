interface Props {
    subreddit: string;
}

export const Header = ({ subreddit }: Props) => {
    return (
        <div className="border-b-1 sticky top-0 flex w-full items-center justify-center border-gray-200 bg-white text-2xl font-bold">
            <h2 className="p-2">{subreddit}</h2>
        </div>
    );
};
