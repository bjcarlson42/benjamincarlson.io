export default (req, res) => {
    const headers = {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    }

    const body = JSON.stringify({
        client_id: process.env.STRAVA_CLIENT_ID,
        client_secret: process.env.STRAVA_SECRET,
    })

    fetch('https://www.strava.com/oauth/authorize?redirect_uri=http://localhost:3000/&response_type=code&scope=read,read_all,activity:read,activity:read_all,profile:read_all', {
        method: 'post',
        "headers": headers,
    })

    // console.log(query.split('code=')[1])

    return res.status(200).json({
        
    })
}