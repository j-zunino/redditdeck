import { useState, type Dispatch } from 'react';
import { TbPlus } from 'react-icons/tb';
import { useSubreddits } from '../../hooks/useSubreddits';
import { Button, Modal } from '../shared';

interface Props {
    state: Dispatch<React.SetStateAction<boolean>>;
}

export const AddSubredditModal = ({ state }: Props) => {
    const { addSubreddit } = useSubreddits();
    const [subredditInput, setSubredditInput] = useState('');

    return (
        <Modal onClose={() => state(false)}>
            <div className="text-center">
                <h2 className="text-xl font-bold">Add Subreddit</h2>
                <p className="text-content-weak">Subreddit to add to deck.</p>
            </div>

            <form
                onSubmit={(e) => {
                    addSubreddit(e, subredditInput);
                    state(false);
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

                <Button
                    type="submit"
                    variant="accent"
                    icon={<TbPlus size={24} />}
                />
            </form>
        </Modal>
    );
};
