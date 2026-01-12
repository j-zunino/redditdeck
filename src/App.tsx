import { useRef, useState } from 'react';
import { Modal } from './components/shared/Modal';
import { RedditColum } from './components/specific';
import { useSubreddits } from './hooks/useSubreddits';
import { handleClose, handleOpen } from './utils/modal.utils';

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
                <form
                    onSubmit={(e) => {
                        addSubreddit(e, subredditInput);
                        handleClose(e, addSubredditRef);
                        setSubredditInput('');
                    }}
                    className="flex max-w-100 flex-col gap-2 bg-global-bg-hover p-4"
                >
                    <label className="flex flex-col">
                        Subreddit name:
                        <input
                            type="text"
                            placeholder="reactjs"
                            name="addSubredditInput"
                            required={true}
                            value={subredditInput}
                            onChange={(e) => setSubredditInput(e.target.value)}
                            className="border border-global-border outline-0 focus:border-global-orange"
                        />
                    </label>

                    <button
                        type="submit"
                        className="bg-global-orange hover:bg-global-orange-hover active:bg-global-orange-active"
                    >
                        Add
                    </button>
                </form>
            </Modal>
        </>
    );
}

export default App;
