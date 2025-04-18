import { IconBrandGithub, IconPlus } from '@tabler/icons-react';
import { Button } from './Button';
import ThemeToggle from './ThemeToggle';

interface Props {
    parentMethod?: () => void;
}

export const Sidebar = ({ parentMethod }: Props) => {
    return (
        <nav className="border-r-1 sticky left-0 top-0 z-10 flex h-screen flex-col items-start justify-between border-gray-200 bg-white p-2 text-2xl font-bold text-black dark:border-zinc-800 dark:bg-black dark:text-white">
            <Button
                icon={<IconPlus />}
                onClick={parentMethod}
                ariaLabel="Add Subreddit"
            />

            <div className="flex flex-col">
                <ThemeToggle />

                <a
                    href="https://github.com/j-zunino/redditdeck"
                    target="_blank"
                    aria-label="See source code in GitHub"
                    rel="noreferrer"
                    className="max-h-fit p-2 hover:rounded-full hover:bg-gray-100 dark:hover:bg-zinc-900"
                >
                    <IconBrandGithub />
                </a>
            </div>
        </nav>
    );
};
