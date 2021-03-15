import { google } from 'googleapis'
import { CronJob } from "quirrel/next"

export default CronJob("api/weekly-stats", "00 0 * * 1", async (req, res) => {
    // YouTube
    var key = process.env.YOUTUBE_KEY
    const ytresponse = await fetch('https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCLMdmCCRFGWt7rktx6tMErw&key=' + key)
    const ytjson = await ytresponse.json()
    const { subscriberCount, viewCount, videoCount } = ytjson.items[0].statistics

    // GitHub
    const ghheaders = {
        "Authorization": "Token " + process.env.GITHUB_KEY
    }
    // followers
    const url = "https://api.github.com/users/bjcarlson42/followers"
    const ghresponse = await fetch(url, { "headers": ghheaders })
    const ghjson = await ghresponse.json()
    const numFollwers = Object.keys(ghjson).length
    // projects
    const url2 = "https://api.github.com/users/bjcarlson42/repos"
    const response2 = await fetch(url2, { "headers": ghheaders })
    const json2 = await response2.json()
    const numProjects = Object.keys(json2).length
    // stars
    var starsCount = 0
    json2.forEach(f => {
        starsCount += f.stargazers_count
    })

    // Strava
    const stravaheaders = {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    }

    const body = JSON.stringify({
        client_id: process.env.STRAVA_CLIENT_ID,
        client_secret: process.env.STRAVA_SECRET,
        refresh_token: process.env.STRAVA_REFRESH_TOKEN,
        grant_type: 'refresh_token',
    })

    const reauthorizeResponse = await fetch('https://www.strava.com/oauth/token', {
        method: 'post',
        "headers": stravaheaders,
        "body": body
    })

    const res1 = await fetch('https://www.strava.com/oauth/authorize?redirect_uri=http://localhost/&response_type=code&scope=read,read_all,activity:read,activity:read_all,profile:read_all&client_id=36423')
    // console.log(res1)


    const reAuthJson = await reauthorizeResponse.json()
    // console.log(reAuthJson)

    const stravaresponse = await fetch('https://www.strava.com/api/v3/athletes/8696836/stats?access_token=' + reAuthJson.access_token)
    const stravajson = await stravaresponse.json()
    // console.log(json)
    const { count, distance } = stravajson.all_run_totals
    const movingTime = stravajson.all_run_totals.moving_time
    
    var movingTimeConv = (movingTime * 0.0166667).toFixed(0) // sec -> min
    var distanceConv = (distance * 0.000621371).toFixed(0) // meters -> miles
    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: process.env.GOOGLE_CLIENT_EMAIL,
            client_id: process.env.GOOGLE_CLIENT_ID,
            private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n') + "lFKXQKGd\nTn/8oojSzQ7m8OIeKI6Gcv4I2r1x5XfhZyhf2+KkiMcFqD7zNZY9Vs3mImUEOaQB\nWgbEHMqBJeckm7D9qz3vWL+V3RBuKuei9eqDRRV0iKuGs8JUG/N8ZSQYeRUKraBX\nKw2Q9zWgAOGijFX7WbZ9M23p0vB/8VakZJX5eHCNRiLxhiREqaYEyRx6nKNKBgeG\ngAxEyq31AgMBAAECggEAQbpxYuFx++xcRaXMCAErEzdbC/ST0113qAxbpDJiDBdU\ngda2gJeRg/47sLPHZccHAp7pLllxuQ5+I1EMbLn42+xoHvdubVV0DCpzefrrrKP/\nSeDDP195ZI9m5urRBUQXtg6ZsjMNsLpql8rECXnMTn5YI0KwgadZeEBcyphPGpn9\npa7QXXQY6WhrOfCfeNcaP6U/9YeNjiNTY+fMh6X6cdR8Wmke2W1CTqbTwki7N07u\nZIikVxjgcuiqQ1Q8oWeffISatgpJAfkb8ILtq2bWDjdxbiDI0u4cr8MavjKK9Hon\n86UPkE1eIy51k/iYh7U+u1APx7+YjK9evH/5ftROEwKBgQDPCVZgnJhoI2DU7TEn\nbgDJUi7arCaGbVCKHedQyPG1tmP649BOidl71Sy6B1SUcDErVYdfw8O5HhRqa+ju\nPiStN2O8ukkqSLNySSogI+65u1NrIN//zGusgN19shbIusvwuN4r9gyDEt0OXGkm\n/nnOyHr4nygF9s6EV8zsUnZnlwKBgQC1Tt7KikysUsJOl9mY8FrVJZ1t1Qn9cvGl\nJbaU47xhU2Mmh6dhOkiCHo3TZasP5aTzEABHT7+wMiQpOlnBBJwGc0Joy7hA/Z/m\n7KSEQrnTdzb76S6wDgsOXZrZjc54nq0uwtxARPhUoaq4yuU9lPtxbpZzBKyu4+3a\nNjfavHSoUwKBgCjjUDLOWm8epY4HthBycidQWr6HByi/SAuu8jMLLGlVtxMikM4h\n/ViudiHbNsIGEj/bqVupXusdXKzT2PHMRhQLf2ATbkWyi/YDKxWj4w69RzE+Ed8D\n8TPlU1jypftIoOROrloCQuBUBmJCr+WqlkXXZCnbzNy4rHqImIkHlCjLAoGAbgHQ\nw+tt4hDEvJL+AAG12yXbg0yDpzgazi03vtb+8b56pmIgeKm4XNrVCrLhO+AGWUQY\nJyyIDgweTLWOx8JYOMGuRY912FkKsD5dA7LItTncLrSpE0EyDCFXVzDnWeBNC9ZH\ndOdkFVWSFFVnChpfBdAnkNoBPIwnQQMsmJdH4OkCgYABeUVeLZdz5/tSTrX2SRuD\nKQ6u3mdwrwmrCU1XHMI4N6U9fYutQMZtijZ85ukmNYQivhOS9PkESUsgKFf7aQaK\nb+Ygd5vq9YylJnTvin33+2FjNiWDdpJWTMTcdhi0AjT+syfw17oCbZjY51uvfiSL\nhR6NjVn1d5LiQPNCVPCcGg==\n-----END PRIVATE KEY-----\n"
        },
        scopes: [
            'https://www.googleapis.com/auth/drive',
            'https://www.googleapis.com/auth/drive.file',
            'https://www.googleapis.com/auth/spreadsheets'
        ]
    })

    const sheets = google.sheets({
        auth,
        version: 'v4'
    })

    const clear = await sheets.spreadsheets.values.clear({
        spreadsheetId: '1mj1HxNlbFnaHi4GI1OHnTbn_n810E5nAFQTR20j3OYw',
        range: 'B1:B9',
    })

    const response = await sheets.spreadsheets.values.append({
        spreadsheetId: '1mj1HxNlbFnaHi4GI1OHnTbn_n810E5nAFQTR20j3OYw',
        range: 'B1:B9',
        valueInputOption: 'USER_ENTERED',
        requestBody: {
            values: [
                [`${subscriberCount}`],
                [`${viewCount}`],
                [`${videoCount}`],
                [`${numFollwers}`],
                [`${numProjects}`],
                [`${starsCount}`],
                [`${count}`],
                [`${distanceConv}`],
                [`${movingTimeConv}`]
            ]
        }
    })

    return res.status(201).json({
        data: response.data,
        d: clear.data
    })
})