interface Props {
    subreddit: string;
}

export const Header = ({ subreddit }: Props) => {
    return (
        <div className="bg-white border-gray-200 border-b-1 flex justify-center items-center fixed w-full h-10 text-2xl font-bold">
            <h2 className="">{subreddit}</h2>
        </div>
    );
};
