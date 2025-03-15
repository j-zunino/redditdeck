import { createContext, useState, useContext } from 'react';
import { useFetch } from '../../hooks';

interface RedditPost {
    data: {
        id: string;
        author: string;
        title: string;
        ups: number;
        link_flair_text: string;
        link_flair_background_color: string;
        thumbnail: string;
        thumbnail_height: number;
        thumbnail_width: number;
        is_video: boolean;
        permalink: string;
    };
}

interface RedditResponse {
    data: {
        children: RedditPost[];
    };
}

interface SubRedditContextProps {
    data: RedditResponse | null;
    loading: boolean;
    error: Error | null;
    handleRefresh: () => void;
}

const SubRedditContext = createContext<SubRedditContextProps | undefined>(
    undefined,
);

interface Props {
    subreddit: string;
    children: React.ReactNode;
}

const SubRedditContextProvider = ({ subreddit, children }: Props) => {
    const [refreshKey, setRefreshKey] = useState(0);

    const url = `https://www.reddit.com/r/${subreddit}.json`;

    const { data, loading, error } = useFetch<RedditResponse>(url, refreshKey);

    const handleRefresh = () => {
        setRefreshKey((prevKey) => prevKey + 1);
    };

    return (
        <SubRedditContext.Provider
            value={{ data, loading, error, handleRefresh }}
        >
            {children}
        </SubRedditContext.Provider>
    );
};

const useSubRedditContext = () => {
    const context = useContext(SubRedditContext);
    if (!context) {
        throw new Error(
            'useSubRedditContext must be used within a SubRedditContextProvider',
        );
    }
    return context;
};

export { SubRedditContext, SubRedditContextProvider, useSubRedditContext };
