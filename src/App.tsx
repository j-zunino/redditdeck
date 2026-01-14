import { useRef, useState } from 'react';
import { TbBrandGithub, TbPlus } from 'react-icons/tb';
import { Modal } from './components/shared';
import { RedditColum } from './components/specific';
import { useSubreddits } from './hooks/useSubreddits';
import { handleClose, handleOpen } from './utils';

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
                        className="aspect-square rounded-full p-1 hover:bg-surface-300"
                    >
                        <TbPlus size={24} />
                    </button>

                    <a
                        href="https://github.com/j-zunino/redditdeck"
                        target="_blank"
                        className="aspect-square rounded-full p-1 hover:bg-surface-300"
                    >
                        <TbBrandGithub size={24} />
                    </a>
                </aside>

                <div className="fixed bottom-0 mb-2 flex w-full justify-center md:hidden">
                    <div className="flex justify-between gap-6 rounded-full border bg-surface-100 p-2">
                        <button
                            onClick={(e) => handleOpen(e, addSubredditRef)}
                            className="aspect-square rounded-full p-1 hover:bg-surface-300"
                        >
                            <TbPlus size={24} />
                        </button>

                        <a
                            href="https://github.com/j-zunino/redditdeck"
                            target="_blank"
                            className="aspect-square rounded-full p-1 hover:bg-surface-300"
                        >
                            <TbBrandGithub size={24} />
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
                    <label className="flex w-full flex-col rounded-full border bg-surface-400 px-2">
                        <input
                            type="text"
                            placeholder="neovim"
                            name="addSubredditInput"
                            autoComplete="off"
                            required={true}
                            value={subredditInput}
                            onChange={(e) => setSubredditInput(e.target.value)}
                            className="h-full px-2 outline-0"
                        />
                    </label>

                    <button
                        type="submit"
                        className="aspect-square rounded-full bg-brand-main p-1 hover:bg-brand-hover"
                    >
                        <TbPlus size={24} />
                    </button>
                </form>
            </Modal>
        </>
    );
}

export default App;
