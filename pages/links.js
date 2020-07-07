import Head from 'next/head'
import Row from 'react-bootstrap/Row'

function Links() {
    return (
        <div className="bg">
            <div className='container links-container'>
                <Head>
                    <title>Links | Benjamin J. Carlson</title>
                    <meta name="description" content="TODO" />
                </Head>
                <Row>
                    <div style={{ display: 'block', margin: 'auto', padding: '50px' }}>
                        <img src="/images/portrait.jpeg" className="profile-img"></img>
                    </div>
                </Row>
                <a href="https://www.youtube.com/channel/UCLMdmCCRFGWt7rktx6tMErw" target="_blank">
                    <Row className="link-row" style={{
                        color: '#000',
                        backgroundColor: '#fff',
                        display: 'block',
                        margin: '10px auto 10px auto',
                        width: '80%',
                        borderRadius: '10px',
                        textAlign: 'center',
                    }}>
                        <img src="/images/youtube.png" style={{
                            width: '50px',
                            height: '50px',
                            padding: '5px',
                            borderRadius: '50%',
                            margin: '0',
                        }}></img>
                        <p style={{
                            padding: '10px',
                            fontSize: '22px',
                        }}>Youtube</p>
                    </Row>
                </a>
                <a href="/" target="_blank">
                    <Row className="link-row" style={{
                        color: '#000',
                        backgroundColor: '#fff',
                        display: 'block',
                        margin: '10px auto 10px auto',
                        width: '80%',
                        borderRadius: '10px',
                        textAlign: 'center',
                    }}>
                        <img src="/images/logo.jpg" style={{
                            width: '50px',
                            height: '50px',
                            padding: '5px',
                            borderRadius: '50%',
                            margin: '0',
                        }}></img>
                        <p style={{
                            padding: '10px',
                            fontSize: '22px',
                        }}>Website</p>
                    </Row>
                </a>
                <a href="https://twitter.com/benscstutorials" target="_blank">
                    <Row className="link-row" style={{
                        color: '#000',
                        backgroundColor: '#fff',
                        display: 'block',
                        margin: '10px auto 10px auto',
                        width: '80%',
                        borderRadius: '10px',
                        textAlign: 'center',
                    }}>
                        <img src="/images/twitter.png" style={{
                            width: '50px',
                            height: '50px',
                            padding: '5px',
                            borderRadius: '50%',
                            margin: '0',
                        }}></img>
                        <p style={{
                            padding: '10px',
                            fontSize: '22px',
                        }}>Twitter</p>
                    </Row>
                </a>
            </div>
            <style jsx>{`
            .bg {
                    height: 100vh;
                    background:linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('/images/linkbg.jpg');
                    background-size: cover;
                    background-position: center center;
                    background-repeat: no-repeat;
                }

                .profile-img {
                    border-radius: 50%;
                    width: 100px;
                    height: 100px;
                }
            `}
            </style>
        </div>
    )
}

export default Links