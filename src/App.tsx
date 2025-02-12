import { useState } from 'react';
import { Deck, Modal, Sidebar } from './components';

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [subRedditList, setSubRedditList] = useState(['all']);

    const handleAddSubreddit = (subreddit: string) => {
        if (subreddit.trim() && !subRedditList.includes(subreddit.trim())) {
            setSubRedditList([...subRedditList, subreddit.trim()]);
        }
        setIsModalOpen(false);
    };

    return (
        <>
            <Modal
                title="Enter Name"
                body="Enter the name of the subreddit to add."
                placeHolder="Neovim"
                button="Cancel"
                buttonAccept="Add"
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleAddSubreddit}
            />

            <div className="flex h-screen dark:bg-black dark:text-white">
                <Sidebar
                    parentMethod={() => {
                        setIsModalOpen(true);
                    }}
                />
                <div className="flex flex-1">
                    <Deck subRedditList={subRedditList} />
                </div>
            </div>
        </>
    );
}

export default App;
