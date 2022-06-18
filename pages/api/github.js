export default async (req, res) => {
    const headers = {
        "Authorization": "Token " + process.env.GITHUB_KEY
    }
    // followers
    let url = "https://api.github.com/users/bjcarlson42/followers?per_page=100&page=1" // each page has 100 followers

    // fetch followers from url and repeat until a page with no followers is found
    let numFollwers = 0
    let page = 1

    while (true) {
        const response = await fetch(url, {
            headers
        })
        const json = await response.json()
        numFollwers += json.length

        if (json.length === 0) {
            break
        }

        page++
        url = `https://api.github.com/users/bjcarlson42/followers?per_page=100&page=${page}`
    }

    // projects
    const url2 = "https://api.github.com/users/bjcarlson42/repos?per_page=1000"
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