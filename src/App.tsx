import { IconCancel, IconPlus } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { Button, Deck, Modal, Sidebar } from './components';

function App() {
    const [subRedditList, setSubRedditList] = useState(['all']);
    const [inputValue, setInputValue] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (!isOpen) {
            setInputValue('');
        }
    }, [isOpen]);

    const handleAddSubreddit = (subreddit: string) => {
        if (subreddit.trim() && !subRedditList.includes(subreddit.trim())) {
            setSubRedditList([...subRedditList, subreddit.trim()]);
        }
        setIsOpen(false);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (inputValue.trim()) {
            handleAddSubreddit(inputValue);
        }
    };

    return (
        <>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <div className="mb-4 text-center">
                    <h2 className="text-xl font-bold">Enter name</h2>
                    <p className="text-gray-600 dark:text-zinc-400">
                        Enter the name of the subreddit to add.
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <input
                        required
                        name="subRedditInput"
                        autoFocus={true}
                        value={inputValue}
                        type="text"
                        onChange={(event) => setInputValue(event.target.value)}
                        placeholder="Neovim"
                        className="mx-10 mb-4 rounded-full bg-gray-100 p-2 px-4 dark:bg-zinc-700"
                    />
                    <div className="flex justify-center">
                        <Button
                            icon={<IconCancel size={20} />}
                            labelEnd="Cancel"
                            ariaLabel="Cancel"
                            onClick={() => setIsOpen(false)}
                            className="mr-2 bg-gray-100 pr-4 text-gray-500 hover:bg-gray-200 dark:bg-zinc-700 dark:hover:bg-zinc-800"
                        />
                        <Button
                            icon={<IconPlus size={20} />}
                            type="submit"
                            labelEnd="Add"
                            ariaLabel="Add SubReddit"
                            className="bg-orange-600 pr-4 hover:bg-orange-700"
                        />
                    </div>
                </form>
            </Modal>

            <div className="flex h-screen dark:bg-black dark:text-white">
                <Sidebar parentMethod={() => setIsOpen(true)} />
                <Deck subRedditList={subRedditList} />
            </div>
        </>
    );
}

export default App;
