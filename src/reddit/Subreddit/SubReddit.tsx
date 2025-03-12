import { useFetch } from '../../hooks';
import { Post } from '../Post';
import { SubRedditHeader, SubRedditSkeleton } from '../Subreddit';
import { ErrorMessage } from '../../components';
import { useState } from 'react';

interface Props {
    subreddit: string;
}

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

export const SubReddit = ({ subreddit }: Props) => {
    const [refreshKey, setRefreshKey] = useState(0);

    const url = `https://www.reddit.com/r/${subreddit}.json`;

    const { data, loading, error } = useFetch<RedditResponse>(url, refreshKey);

    const handleRefresh = () => {
        setRefreshKey((prevKey) => prevKey + 1);
    };

    if (loading) {
        return <SubRedditSkeleton />;
    }

    if (error) {
        return <ErrorMessage errorMessage={error.message} />;
    }

    return (
        <section className="no-scrollbar border-r-1 h-screen flex-1 overflow-y-auto border-gray-200 dark:border-zinc-800 dark:bg-black">
            <SubRedditHeader
                subreddit={`r/${subreddit}`}
                onRefresh={handleRefresh}
            />
            {data?.data.children.map((post: RedditPost) => (
                <Post
                    key={post.data.id}
                    author={post.data.author}
                    title={post.data.title}
                    ups={post.data.ups}
                    link_flair_text={post.data.link_flair_text}
                    link_flair_background_color={
                        post.data.link_flair_background_color
                    }
                    thumbnail={post.data.thumbnail}
                    thumbnail_height={post.data.thumbnail_height}
                    thumbnail_width={post.data.thumbnail_width}
                    is_video={post.data.is_video}
                    permalink={`https://www.reddit.com/${post.data.permalink}`}
                />
            ))}
        </section>
    );
};
