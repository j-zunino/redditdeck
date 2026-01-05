import { useRef, useState, type FormEvent } from 'react';
import { Modal } from './components/shared/Modal';
import { handleOpen } from './utils/modal.utils';

function App() {
    const [subreddit, setSubreddit] = useState('');
    const addSubredditRef = useRef<HTMLDialogElement>(null);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(subreddit);
    };

    return (
        <>
            <div className="flex text-white">
                <button
                    onClick={(e) => handleOpen(e, addSubredditRef)}
                    className="bg-global-orange hover:bg-global-orange-hover active:bg-global-orange-active"
                >
                    Open
                </button>
            </div>

            <Modal modalRef={addSubredditRef}>
                <form
                    onSubmit={handleSubmit}
                    className="flex max-w-100 flex-col gap-2 bg-global-bg-hover p-4"
                >
                    <label className="flex flex-col">
                        Subreddit name:
                        <input
                            type="text"
                            placeholder="reactjs"
                            name="addSubredditInput"
                            required={true}
                            value={subreddit}
                            onChange={(e) => setSubreddit(e.target.value)}
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
