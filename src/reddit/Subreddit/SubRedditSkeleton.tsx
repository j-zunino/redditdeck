export const SubRedditSkeleton = () => {
    return (
        <section className="flex-1 animate-pulse">
            {/* Header */}
            <div className="sticky top-0 flex h-12 w-full items-center justify-center bg-gray-50 text-2xl font-bold">
                <div className="w-50 h-7 rounded-md bg-gray-200"></div>
            </div>

            {Array.from({ length: 16 }, (_, index) => (
                // bg
                <section
                    key={index}
                    className="h-25 m-4 mx-2 flex items-center rounded-xl bg-gray-100 p-2"
                >
                    {/* Thumbnail */}
                    <div className="min-w-24 mr-4 hidden h-20 w-24 rounded-md bg-gray-200 lg:flex"></div>

                    <div>
                        {/* author */}
                        <div className="mb-2 h-4 w-20 rounded-md bg-gray-200"></div>

                        {/* title */}
                        <div className="w-70 mb-4 h-4 rounded-md bg-gray-200"></div>

                        <div className="flex items-center text-center">
                            {/* score */}
                            <div className="mr-4 flex">
                                <div className="mr-1 h-4 w-4 rounded-full bg-gray-200"></div>
                                <div className="h-4 w-10 rounded-md bg-gray-200"></div>
                            </div>

                            {/* flair */}
                            <div className="h-4 w-20 rounded-full bg-gray-200"></div>
                        </div>
                    </div>
                </section>
            ))}
        </section>
    );
};
