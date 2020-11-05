export default async (_, res) => {
    const key = process.env.BUTTONDOWN__KEY
    const response = await fetch('https://api.buttondown.email/v1/subscribers', {
        headers: {
            Authorization: `Token ${key}`,
            'Content-Type': 'application/json'
        },
        method: 'GET'
    })

    const { count } = await response.json()

    return res.status(200).json({ count })
}