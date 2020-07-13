export default async (req, res) => {
    const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@benjamincarlson')
    const json = await response.json()
    const posts = json.items
    return res.status(200).json({
        posts: posts
    })
}