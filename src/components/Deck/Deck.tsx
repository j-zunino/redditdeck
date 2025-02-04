import { useFetch } from '../../hooks';
import { Header } from './Header';
import { Post } from './Post';

const subreddit = 'neovim';

const url = `https://www.reddit.com/r/${subreddit}.json`;

interface RedditPost {
    data: {
        id: string;
        author: string;
        title: string;
        score: number;
        link_flair_text: string;
        link_flair_background_color: string;
    };
}

interface RedditResponse {
    data: {
        children: RedditPost[];
    };
}

export const Deck = () => {
    const { data, loading, error } = useFetch<RedditResponse>(url);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return (
            <div>
                <div>UPS! There has ben an error</div>
                <p>{error.message}</p> );
            </div>
        );
    }

    return (
        <section>
            <Header subreddit={`r/${subreddit}`} />
            {data?.data.children.map((post: RedditPost) => (
                <Post
                    key={post.data.id}
                    author={post.data.author}
                    title={post.data.title}
                    score={post.data.score}
                    link_flair_text={post.data.link_flair_text}
                    link_flair_background_color={
                        post.data.link_flair_background_color
                    }
                />
            ))}
        </section>
    );
};
