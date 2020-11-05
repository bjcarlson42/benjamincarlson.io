import db from '../../lib/db-admin'

const incrementLikes = async (req, res) => {
    if (!req.query.id) {
        return res.status(400).json({
            error: 'Missing "id" query parameter'
        })
    }

    const ref = db.ref('likes').child(req.query.id)
    const { snapshot } = await ref.transaction((currentLikes) => {

        if (currentLikes === null) {
            return 1
        }

        return currentLikes + 1
    })

    return res.status(200).json({
        total: snapshot.val()
    })
}

export default incrementLikes