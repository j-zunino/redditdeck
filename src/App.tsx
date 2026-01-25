import { useState } from 'react';
import { TbBrandGithub, TbPlus } from 'react-icons/tb';
import { Button } from './components/shared';
import {
    AddSubredditModal,
    RedditColum,
    RedditHeader,
    Sidebar,
    WarningModal,
} from './components/specific';
import { useSubreddits } from './hooks/useSubreddits';

// TODO:
// - Improve modal input performance/redraws?
// - Improve types
// - Add back/foward navigation
// - Improve mobile RedditPost
function App() {
    const { subreddits, removeSubreddit } = useSubreddits();

    const [isAddSubredditOpen, setIsAddSubredditOpen] = useState(false);
    const [isWarningOpen, setIsWarningOpen] = useState(
        () => !localStorage.getItem('hideWarningModal'),
    );

    return (
        <>
            <div className="flex">
                <Sidebar>
                    <Button
                        onClick={() => setIsAddSubredditOpen(true)}
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

            {isAddSubredditOpen && (
                <AddSubredditModal state={setIsAddSubredditOpen} />
            )}

            {isWarningOpen && <WarningModal state={setIsWarningOpen} />}
        </>
    );
}

export default App;
