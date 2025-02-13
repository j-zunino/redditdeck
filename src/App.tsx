import { useState } from 'react';
import { Deck, Modal, Sidebar } from './components';

function App() {
    const [subRedditList, setSubRedditList] = useState(['all']);
    const [isOpen, setIsOpen] = useState(false);

    const handleAddSubreddit = (subreddit: string) => {
        if (subreddit.trim() && !subRedditList.includes(subreddit.trim())) {
            setSubRedditList([...subRedditList, subreddit.trim()]);
        }
        setIsOpen(false);
    };

    return (
        <>
            <Modal
                title="Enter Name"
                body="Enter the name of the subreddit to add."
                placeHolder="Neovim"
                button="Cancel"
                buttonAccept="Add"
                isOpen={isOpen}
                onSubmit={handleAddSubreddit}
                onClose={() => setIsOpen(false)}
            />

            <div className="flex h-screen dark:bg-black dark:text-white">
                <Sidebar parentMethod={() => setIsOpen(true)} />
                <div className="flex flex-1">
                    <Deck subRedditList={subRedditList} />
                </div>
            </div>
        </>
    );
}

export default App;
