import { useRef, useState } from 'react';
import { Modal } from './components/shared/Modal';
import { RedditColum } from './components/specific';
import { useSubreddits } from './hooks/useSubreddits';
import { handleOpen, handleClose } from './utils';

// TODO:
// - Improve modal input performance
// - Create more types?
// - Add back/foward navigation on useSubreddits hook?
function App() {
    const { subreddits, addSubreddit, removeSubreddit } = useSubreddits();
    const [subredditInput, setSubredditInput] = useState('');
    const addSubredditRef = useRef<HTMLDialogElement>(null);

    return (
        <>
            <div className="flex">
                <aside className="hidden h-screen flex-col justify-between border-r p-2 md:flex">
                    <button
                        onClick={(e) => handleOpen(e, addSubredditRef)}
                        className="aspect-square px-2 hover:bg-surface-300"
                    >
                        +
                    </button>

                    <a
                        href="https://github.com/j-zunino/redditdeck"
                        target="_blank"
                        className="px-2 hover:bg-surface-300"
                    >
                        G
                    </a>
                </aside>

                <div className="fixed bottom-0 mb-2 flex w-full justify-center md:hidden">
                    <div className="flex justify-between border bg-surface-100 p-2">
                        <button
                            onClick={(e) => handleOpen(e, addSubredditRef)}
                            className="px-4 py-2 hover:bg-surface-300"
                        >
                            +
                        </button>

                        <a
                            href="https://github.com/j-zunino/redditdeck"
                            target="_blank"
                            className="px-4 py-2 hover:bg-surface-300"
                        >
                            GitHub
                        </a>
                    </div>
                </div>

                <div className="flex h-full max-h-screen w-full overflow-x-auto overflow-y-hidden">
                    {subreddits.map((sub) => (
                        <RedditColum
                            key={sub}
                            subreddit={sub}
                            onRemove={removeSubreddit}
                        />
                    ))}
                </div>
            </div>

            <Modal modalRef={addSubredditRef}>
                <div className="text-center">
                    <h2 className="text-xl font-bold">Add Subreddit</h2>
                    <p className="text-content-weak">
                        Subreddit to add to deck.
                    </p>
                </div>

                <form
                    onSubmit={(e) => {
                        addSubreddit(e, subredditInput);
                        handleClose(e, addSubredditRef);
                        setSubredditInput('');
                    }}
                    className="flex max-w-100 gap-2"
                >
                    <label className="flex w-full flex-col border bg-surface-400 p-2">
                        <input
                            type="text"
                            placeholder="neovim"
                            name="addSubredditInput"
                            autoComplete="off"
                            required={true}
                            value={subredditInput}
                            onChange={(e) => setSubredditInput(e.target.value)}
                            className="outline-0"
                        />
                    </label>

                    <button
                        type="submit"
                        className="bg-brand-main px-4 hover:bg-brand-hover active:bg-accent-orange"
                    >
                        +
                    </button>
                </form>
            </Modal>
        </>
    );
}

export default App;
