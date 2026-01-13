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
            <div className="text-white">
                <button
                    onClick={(e) => handleOpen(e, addSubredditRef)}
                    className="bg-global-orange hover:bg-global-orange-hover active:bg-global-orange-active"
                >
                    Open
                </button>

                <div className="flex justify-between">
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
                <h2 className="text-center text-xl font-bold">Add subreddit</h2>

                <form
                    onSubmit={(e) => {
                        addSubreddit(e, subredditInput);
                        handleClose(e, addSubredditRef);
                        setSubredditInput('');
                    }}
                    className="flex max-w-100 flex-col gap-2"
                >
                    <label className="flex flex-col border bg-surface-400 p-2">
                        <input
                            type="text"
                            placeholder="Enter subreddit name..."
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
                        className="bg-brand-main p-2 hover:bg-brand-hover active:bg-accent-orange"
                    >
                        Add
                    </button>
                </form>
            </Modal>
        </>
    );
}

export default App;
