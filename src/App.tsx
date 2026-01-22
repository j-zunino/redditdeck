import { useState } from 'react';
import { TbBrandGithub, TbPlus } from 'react-icons/tb';
import { Button, Modal } from './components/shared';
import { RedditColum, RedditHeader, Sidebar } from './components/specific';
import { useSubreddits } from './hooks/useSubreddits';

// TODO:
// - Improve modal input performance/redraws?
// - Create more types?
// - Add back/foward navigation
// - Loading state
// - Add errors messages
function App() {
    const { subreddits, addSubreddit, removeSubreddit } = useSubreddits();
    const [subredditInput, setSubredditInput] = useState('');

    const [addSubredditModal, setAddSubredditModal] = useState(false);
    const [warningModal, setWarningModal] = useState(
        () => !localStorage.getItem('hideWarningModal'),
    );

    return (
        <>
            <div className="flex">
                <Sidebar>
                    <Button
                        onClick={() => setAddSubredditModal(true)}
                        icon={<TbPlus size={24} />}
                    />

                    <a
                        href="https://github.com/j-zunino/redditdeck"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="aspect-square rounded-full p-1 hover:bg-surface-300"
                    >
                        <TbBrandGithub size={24} />
                    </a>
                </Sidebar>

                <main className="flex h-screen max-h-screen w-full overflow-x-auto overflow-y-hidden">
                    {subreddits.map((sub) => (
                        <section
                            key={sub}
                            className="flex w-full min-w-[95dvw] flex-col border-r sm:min-w-140"
                        >
                            <RedditHeader
                                subreddit={sub}
                                onRemove={removeSubreddit}
                            />
                            <RedditColum subreddit={sub} />
                        </section>
                    ))}
                </main>
            </div>

            {addSubredditModal && (
                <Modal onClose={() => setAddSubredditModal(false)}>
                    <div className="text-center">
                        <h2 className="text-xl font-bold">Add Subreddit</h2>
                        <p className="text-content-weak">
                            Subreddit to add to deck.
                        </p>
                    </div>

                    <form
                        onSubmit={(e) => {
                            addSubreddit(e, subredditInput);
                            setAddSubredditModal(false);
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
                                onChange={(e) =>
                                    setSubredditInput(e.target.value)
                                }
                                className="h-full px-2 outline-0"
                            />
                        </label>

                        <Button
                            type="submit"
                            variant="accent"
                            icon={<TbPlus size={24} />}
                        />
                    </form>
                </Modal>
            )}

            {warningModal && (
                <Modal onClose={() => setWarningModal(false)}>
                    <h2 className="text-center text-xl font-bold">
                        Client-side limitations
                    </h2>
                    <div className="max-w-120 space-y-1.5 text-pretty">
                        <p className="text-content-weak">
                            This page fetches data directly from Reddit.
                            <br />
                            Reddit may <b>rate-limit</b> or{' '}
                            <b>temporarily block requests</b>.
                        </p>
                        <p className="text-content-weak">
                            If posts don't load or stop loading, this is a
                            platform limitation, not an issue with your browser.
                        </p>
                    </div>

                    <div className="flex gap-2">
                        <Button
                            label="Don't show again"
                            variant="modal"
                            className="w-full"
                            onClick={() => {
                                localStorage.setItem(
                                    'hideWarningModal',
                                    'true',
                                );
                                setWarningModal(false);
                            }}
                        />

                        <Button
                            label="Accept"
                            variant="accent"
                            className="w-full"
                            onClick={() => {
                                setWarningModal(false);
                            }}
                        />
                    </div>
                </Modal>
            )}
        </>
    );
}

export default App;
