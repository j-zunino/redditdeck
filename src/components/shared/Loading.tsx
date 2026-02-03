export const Loading = () => {
    return (
        <div className="relative z-10 flex items-center justify-center">
            <img
                src="/logo.svg"
                alt="Loading..."
                className="relative h-24 animate-pulse duration-[0.5ms]"
            />
        </div>
    );
};
