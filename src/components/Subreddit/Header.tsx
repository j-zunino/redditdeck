interface Props {
    subreddit: string;
}

export const Header = ({ subreddit }: Props) => {
    return (
        <div className="bg-white border-gray-200 border-b-1 flex justify-center items-center sticky top-0 w-full text-2xl font-bold">
            <h2 className="p-2">{subreddit}</h2>
        </div>
    );
};
