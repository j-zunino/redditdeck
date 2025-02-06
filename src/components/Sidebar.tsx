export const Sidebar = () => {
    return (
        <aside className="border-r-1 sticky left-0 top-0 z-10 flex h-screen justify-center border-gray-200 bg-white p-2 text-2xl font-bold">
            <div className="max-h-fit p-2 text-black hover:rounded-full hover:bg-gray-50">
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
                    <path d="M12 5l0 14" />
                    <path d="M5 12l14 0" />
                </svg>
            </div>
        </aside>
    );
};
