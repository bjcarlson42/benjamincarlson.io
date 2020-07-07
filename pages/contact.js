import Head from 'next/head'

function Contact() {
    return (
        <div className='main'>
            <div className="container">
                <Head>
                    <title>Contact | Benjamin J. Carlson</title>
                    <meta name="description" content="Want to work together, have a question, or just want to say hi? Send me a message here." />
                </Head>
                <h1 className='title-padding center'>Contact</h1>
                <p className="center">Business Email: <a href="mailto:benc@benjamincarlson.io" style={{
                    color: "#000"
                }}>benc@benjamincarlson.io</a></p>
                <p className="center">(Still working on contact page UI and Logic)</p>
            </div>
        </div>
    )
}

export default Contact