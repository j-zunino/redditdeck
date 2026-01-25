import { useRef, type Dispatch, type FormEvent } from 'react';
import { TbPlus } from 'react-icons/tb';
import { Button, Modal } from '../shared';

interface Props {
    state: Dispatch<React.SetStateAction<boolean>>;
    addSubreddit: (subreddit: string) => void;
}

export const AddSubredditModal = ({ state, addSubreddit }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();

        const value = inputRef.current?.value
            .trim()
            .toLowerCase()
            .replace(/^\/?r\//, '');

        if (!value) return;

        addSubreddit(value);
        state(false);
    };

    return (
        <Modal onClose={() => state(false)}>
            <div className="text-center">
                <h2 className="text-xl font-bold">Add Subreddit</h2>
                <p className="text-content-weak">Subreddit to add to deck.</p>
            </div>

            <form
                onSubmit={(e) => onSubmit(e)}
                className="flex max-w-100 gap-2"
            >
                <label className="flex w-full flex-col rounded-full border bg-surface-400 px-2">
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="neovim"
                        name="addSubredditInput"
                        autoComplete="off"
                        required
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
