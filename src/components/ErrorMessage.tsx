import { IconExclamationCircleFilled } from '@tabler/icons-react';

interface Props {
    errorMessage: string;
}

export const ErrorMessage = ({ errorMessage }: Props) => {
    return (
        <div className="flex h-screen flex-1 flex-col items-center justify-center text-center text-red-500">
            <div className="mb-2 inline-flex">
                <IconExclamationCircleFilled
                    size={34}
                    className="absolute animate-ping"
                />
                <IconExclamationCircleFilled
                    size={34}
                    className="animate-pulse"
                />
            </div>
            <h2 className="text-xl font-bold">UPS! There has ben an error:</h2>
            <p>{errorMessage}</p> );
        </div>
    );
};
