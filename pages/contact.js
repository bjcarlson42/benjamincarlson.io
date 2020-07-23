import Head from 'next/head'

export default function Contact() {
    return (
        <div className='main'>
            <div className="container">
                <Head>
                    <title>Contact | Benjamin J. Carlson</title>
                    <meta name="description" content="Want to work together, have a question, or just want to say hi? Send me a message here." />
                </Head>
                <h1 className='title-padding center'>Contact</h1>
                <p className="center">Send me an email at <a href="mailto:benc@benjamincarlson.io" style={{
                    color: "#32a852"
                }} className="animate-underline">benc@benjamincarlson.io</a> with any questions, suggestions, or inquiries.</p>
            </div>
        </div>
    )
}
