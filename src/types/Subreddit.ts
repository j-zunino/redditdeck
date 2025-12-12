// Top-level response
export interface ApiResponse {
    isPending: boolean;
    isSuccess: boolean;
    isError: boolean;
    data: ListingResponse;
    dataUpdatedAt: number;
    error: null | unknown;
    errorUpdatedAt: number;
    isFetching: boolean;
}

export interface ListingResponse {
    kind: string;
    data: ListingData;
}

export interface ListingData {
    after: string | null;
    dist: number | null;
    modhash: string;
    geo_filter: string | null;
    children: Child[];
    before: string | null;
}

export interface Child {
    kind: string;
    data: Post;
}

export interface Post {
    subreddit?: string;
    selftext?: string;
    author_fullname?: string;
    title?: string;
    link_flair_richtext?: any[];
    subreddit_name_prefixed?: string;
    hidden?: boolean;
    pwls?: number | null;
    link_flair_css_class?: string | null;
    downs?: number;
    thumbnail_height?: number | null;
    top_awarded_type?: string | null;
    hide_score?: boolean;
    name?: string;
    quarantine?: boolean;
    link_flair_text_color?: string | null;
    upvote_ratio?: number | null;
    author_flair_background_color?: string | null;
    subreddit_type?: string;
    ups?: number;
    total_awards_received?: number;
    media_embed?: Record<string, unknown>;
    thumbnail_width?: number | null;
    author_flair_template_id?: string | null;
    is_original_content?: boolean;
    secure_media?: null | Record<string, unknown>;
    is_reddit_media_domain?: boolean;
    is_meta?: boolean;
    category?: string | null;
    secure_media_embed?: Record<string, unknown>;
    link_flair_text?: string | null;
    score?: number;
    is_created_from_ads_ui?: boolean;
    thumbnail?: string;
    edited?: boolean | number;
    author_flair_css_class?: string | null;
    author_flair_richtext?: any[];
    mod_note?: string | null;
    created?: number;
    link_flair_type?: string | null;
    author_flair_type?: string | null;
    domain?: string;
    selftext_html?: string | null;
    likes?: boolean | null;
    url_overridden_by_dest?: string | null;
    view_count?: number | null;
    archived?: boolean;
    over_18?: boolean;
    preview?: Preview;
    media_only?: boolean;
    spoiler?: boolean;
    locked?: boolean;
    author_flair_text?: string | null;
    treatment_tags?: any[];
    visited?: boolean;
    removed_by?: string | null;
    subreddit_id?: string;
    link_flair_background_color?: string;
    id?: string;
    author?: string;
    discussion_type?: string | null;
    num_comments?: number;
    author_flair_text_color?: string | null;
    permalink?: string;
    url?: string;
    created_utc?: number;
    num_crossposts?: number;
    media?: null | Record<string, unknown>;
    is_video?: boolean;
    [key: string]: unknown;
}

export interface Preview {
    images: PreviewImage[];
    enabled: boolean;
}

export interface PreviewImage {
    source: ImageSource;
    resolutions: ImageSource[];
    variants: Record<string, unknown>;
    id: string;
}

export interface ImageSource {
    url: string;
    width: number;
    height: number;
}
