import db from '../../lib/db-admin'

export default (req, res) => {
    if (!req.query.id) {
        return db.ref('likes').once('value', (snapshot) => {
            const likes = snapshot.val()
            const allLikes = Object.values(likes).reduce(
                (total, value) => total + value
            )

            // return res.status(200).json({
            //     total: allLikes
            // })
        })
    }

    const ref = db.ref('likes').child(req.query.id)

    return ref.once('value', (snapshot) => {
        res.status(200).json({
            total: snapshot.val()
        })
    })
}