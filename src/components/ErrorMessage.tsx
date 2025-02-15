import { IconExclamationCircle } from '@tabler/icons-react';

interface Props {
    errorMessage: string;
}

export const ErrorMessage = ({ errorMessage }: Props) => {
    return (
        <div className="flex h-screen flex-1 flex-col items-center justify-center text-center text-red-500 dark:bg-black">
            <div className="animate-pulse">
                <IconExclamationCircle />
            </div>
            <h2 className="text-xl font-bold">UPS! There has ben an error:</h2>
            <p>{errorMessage}</p> );
        </div>
    );
};
