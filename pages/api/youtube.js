import { google } from 'googleapis'

export default async (req, res) => {
    var key = process.env.YOUTUBE_KEY
    const response = await fetch('https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCLMdmCCRFGWt7rktx6tMErw&key=' + key)
    const json = await response.json()
    const { subscriberCount, viewCount, videoCount } = json.items[0].statistics

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

    const response2 = await sheets.spreadsheets.values.get({
        spreadsheetId: '1mj1HxNlbFnaHi4GI1OHnTbn_n810E5nAFQTR20j3OYw',
        range: 'B1:B3',
    })

    const subs_increase = subscriberCount - response2.data.values[0]
    const views_increase = viewCount - response2.data.values[1]
    const vid_count_increase = videoCount - response2.data.values[2]

    return res.status(200).json({
        subscriberCount,
        viewCount,
        videoCount,
        subs_increase,
        views_increase,
        vid_count_increase
    })
}
