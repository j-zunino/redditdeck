export const Sidebar = () => {
    return (
        <aside className="bg-white border-gray-200 border-r-1 flex justify-center z-10 sticky left-0 top-0 p-2 h-screen text-2xl font-bold">
            <div className="text-black p-2 max-h-fit hover:bg-gray-50 hover:rounded-full">
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
