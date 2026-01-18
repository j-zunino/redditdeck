export const Loading = () => {
    return (
        <div className="relative flex items-center justify-center">
            <img
                src="/favicon.svg"
                alt="Loading..."
                className="absolute max-h-11 animate-ping"
            />
            <img
                src="/favicon.svg"
                alt="Loading..."
                className="relative max-h-14"
            />
        </div>
    );
};
