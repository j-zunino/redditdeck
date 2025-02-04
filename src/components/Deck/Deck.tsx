import { useFetch } from '../../hooks';
import { Post } from './Post';

const url = 'https://www.reddit.com/r/neovim.json';

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
            {data?.data.children.map((post: RedditPost) => (
                <div className="border-gray-100 border-1" key={post.data.id}>
                    <Post
                        author={post.data.author}
                        title={post.data.title}
                        score={post.data.score}
                        link_flair_text={post.data.link_flair_text}
                        link_flair_background_color={
                            post.data.link_flair_background_color
                        }
                    />
                </div>
            ))}
        </section>
    );
};
