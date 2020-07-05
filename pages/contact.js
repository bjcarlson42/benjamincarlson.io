import Head from 'next/head'

function Contact() {
    return (
        <div className='main'>
            <div className="container">
                <Head>
                    <title>Contact | Benjamin J. Carlson</title>
                </Head>
                <h1 className='title-padding center'>Contact</h1>
                <p className="center">Business Email: <a href="mailto:bjcarlson42@gmail.com" style={{
                    color: "#000"
                }}>bjcarlson42@gmail.com</a></p>
                <p className="center">(Still working on contact page UI)</p>
            </div>
        </div>
    )
}

export default Contact