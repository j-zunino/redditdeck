import { useRef } from 'react';
import { Modal } from './components/shared/Modal';
import { handleOpen } from './utils/modal.utils';

function App() {
    const addSubredditRef = useRef<HTMLDialogElement>(null);

    return (
        <>
            <div className="flex">
                <button
                    onClick={(e) => handleOpen(e, addSubredditRef)}
                    className="bg-global-orange text-white hover:bg-global-orange-hover active:bg-global-orange-active"
                >
                    Open
                </button>
            </div>

            <Modal modalRef={addSubredditRef}>
                <form className="flex max-w-100 flex-col gap-2 bg-global-bg-hover p-4">
                    <input
                        type="text"
                        className="border border-global-border"
                    />
                    <button className="bg-global-orange text-white hover:bg-global-orange-hover active:bg-global-orange-active">
                        Add
                    </button>
                </form>
            </Modal>
        </>
    );
}

export default App;
