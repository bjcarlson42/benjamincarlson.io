import Head from 'next/head'

function Contact() {
    return (
        <div className="container">
            <Head>
                <title>Contact | Benjamin J. Carlson</title>
            </Head>
            <h1>Contact</h1>
            <p>Business Email: <a href="mailto:bjcarlson42@gmail.com" style={{
                color: "#000"
            }}>bjcarlson42@gmail.com</a></p>
        </div>
    )
}

export default Contact