export default async (req, res) => {
    const headers = {
        "Authorization": "Token " + process.env.GITHUB_KEY
    }
    // followers
    const url = "https://api.github.com/users/bjcarlson42/followers"
    const response = await fetch(url, { "headers": headers })
    const json = await response.json()
    const numFollwers = Object.keys(json).length
    // projects
    const url2 = "https://api.github.com/users/bjcarlson42/repos"
    const response2 = await fetch(url2, { "headers": headers })
    const json2 = await response2.json()
    const numProjects = Object.keys(json2).length
    // stars
    var starsCount = 0
    json2.forEach(f => {
        starsCount += f.stargazers_count
    })
    return res.status(200).json({
        numFollwers,
        numProjects,
        starsCount
    })
}