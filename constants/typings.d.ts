export interface IGame {
    id: number
    slug: string,
    name: string,
    name_original: string,
    description: string,
    metacritic: number,
    metacritic_platforms: [
        {
            metascore: number,
            url: string
        }
    ],
    released: string,
    tba: true,
    updated: string,
    background_image: url,
    background_image_additional: string,
    website: url,
    rating: number,
    rating_top: number,
    ratings: {},
    reactions: {},
    added: number,
    added_by_status: {},
    playtime: number,
    screenshots_count: number,
    movies_count: number,
    creators_count: number,
    achievements_count: number,
    parent_achievements_count: string,
    reddit_url: string,
    reddit_name: string,
    reddit_description: string,
    reddit_logo: url,
    reddit_count: number,
    twitch_count: string,
    youtube_count: string,
    reviews_text_count: string,
    ratings_count: number,
    suggestions_count: number,
    alternative_names: [
        string
    ],
    metacritic_url: string,
    parents_count: number,
    additions_count: number,
    game_series_count: number,
    esrb_rating: {
        id: number,
        slug: string,
        name: string
    },
    platforms: [
        {
            platform: {},
            released_at: string,
            requirements: {}
        }
    ]
}
