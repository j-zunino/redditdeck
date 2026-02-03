import { useState } from 'react';
import { TbBrandGithub, TbPlus } from 'react-icons/tb';
import { Button } from './components/shared';
import {
    AddSubredditModal,
    RedditColum,
    RedditHeader,
    ResizableContent,
    Sidebar,
    WarningModal,
} from './components/specific';
import { useSubreddits } from './hooks/useSubreddits';

// TODO:
// - Prevent redraws?
// - Improve types
// - Add back/foward navigation
// - Improve mobile RedditPost
function App() {
    const { subreddits, addSubreddit, removeSubreddit } = useSubreddits();

    const [isAddSubredditOpen, setIsAddSubredditOpen] = useState(false);
    const [isWarningOpen, setIsWarningOpen] = useState(
        () => !localStorage.getItem('hideWarningModal'),
    );

    return (
        <>
            <div className="flex">
                <Sidebar>
                    <Button
                        aria-label="Add subreddit"
                        onClick={() => setIsAddSubredditOpen(true)}
                        icon={<TbPlus size={24} />}
                    />

                    <a
                        href="https://github.com/j-zunino/redditdeck"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open the Github repository"
                        className="aspect-square rounded-full p-1 hover:bg-surface-300"
                    >
                        <TbBrandGithub size={24} />
                    </a>
                </Sidebar>

                <main className="flex h-screen w-full overflow-x-auto overflow-y-hidden">
                    {subreddits.map((sub) => (
                        <ResizableContent key={sub}>
                            <RedditHeader
                                subreddit={sub}
                                onRemove={removeSubreddit}
                            />
                            <RedditColum subreddit={sub} />
                        </ResizableContent>
                    ))}
                </main>
            </div>

            {isAddSubredditOpen && (
                <AddSubredditModal
                    state={setIsAddSubredditOpen}
                    addSubreddit={addSubreddit}
                />
            )}

            {isWarningOpen && <WarningModal state={setIsWarningOpen} />}
        </>
    );
}

export default App;
