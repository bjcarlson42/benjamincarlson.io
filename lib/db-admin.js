const admin = require('firebase-admin')
const firebasePrivateKey = process.env.FIREBASE_PRIVATE_KEY

try {
    admin.initializeApp({
        credential: admin.credential.cert({
            client_email: process.env.FIREBASE_CLIENT_EMAIL,
            privateKey: firebasePrivateKey.replace(/\\n/g, '\n'),
            project_id: process.env.FIREBASE_PROJECT_ID
        }),
        databaseURL: 'https://personal-website-8b7b8.firebaseio.com'
    })
} catch (error) {
    /*
     * We skip the "already exists" message which is
     * not an actual error when we're hot-reloading
     */
    if (!/already exists/u.test(error.message)) {
        // eslint-disable-next-line no-console
        console.error('Firebase admin initialization error', error.stack)
    }
}

module.exports = admin.database()
