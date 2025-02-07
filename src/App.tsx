import { useState } from 'react';
import { Deck, Sidebar } from './components';
import { Modal } from './components/Modal';

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

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
                parentMethod={(event) => {
                    event.preventDefault();
                }}
            />

            <div className="flex h-screen">
                <Sidebar
                    parentMethod={() => {
                        setIsModalOpen(true);
                    }}
                />
                <div className="flex flex-1">
                    <Deck />
                </div>
            </div>
        </>
    );
}

export default App;
