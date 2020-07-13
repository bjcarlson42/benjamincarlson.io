export default async (req, res) => {
    var key = process.env.YOUTUBE_KEY
    var channel_id = 'UCLMdmCCRFGWt7rktx6tMErw'
    const response = await fetch('https://www.googleapis.com/youtube/v3/search?key=' + key + '&channelId=' + channel_id + '&part=snippet,id&order=date&maxResults=1')
    const json = await response.json()
    const title = 'Latest YouTube video: ' + json.items[0].snippet.title
    const id = json.items[0].id.videoId
    const vid_url = 'http://www.youtube.com/watch?v=' + id
    return res.status(200).json({
        title: title, vid_url: vid_url
    })
}
