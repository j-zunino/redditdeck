import { IconExclamationCircleFilled } from '@tabler/icons-react';

interface Props {
    errorMessage: string;
    urgency: 'critical' | 'warning' | 'info';
}

export const ErrorMessage = ({ errorMessage, urgency }: Props) => {
    let textColor: string;

    switch (urgency) {
        case 'critical':
            textColor = 'text-red-500';
            break;
        case 'warning':
            textColor = 'text-amber-400';
            break;

        case 'info':
            textColor = 'text-blue-400';
            break;
        default:
            textColor = 'text-white';
            break;
    }
    return (
        <div
            className={`border-r-1 flex h-screen flex-1 flex-col items-center justify-center border-gray-200 text-center ${textColor} dark:border-zinc-800`}
        >
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
