import { type Dispatch } from 'react';
import { Button, Modal } from '../shared';

interface Props {
    state: Dispatch<React.SetStateAction<boolean>>;
}

export const WarningModal = ({ state }: Props) => {
    return (
        <Modal onClose={() => state(false)}>
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
                    If posts don't load or stop loading, this is a platform
                    limitation, not an issue with your browser.
                </p>
            </div>

            <div className="flex gap-2">
                <Button
                    label="Don't show again"
                    variant="modal"
                    className="w-full"
                    onClick={() => {
                        localStorage.setItem('hideWarningModal', 'true');
                        state(false);
                    }}
                />

                <Button
                    label="Accept"
                    variant="accent"
                    className="w-full"
                    onClick={() => {
                        state(false);
                    }}
                />
            </div>
        </Modal>
    );
};
