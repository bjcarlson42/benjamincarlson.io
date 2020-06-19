import Head from 'next/head'
import Row from 'react-bootstrap/Row'

function Links() {
    return (
        <div className="bg">
            <div className='container'>
                <Head>
                    <title>Links | Benjamin J. Carlson</title>
                </Head>
                <Row>
                    <div style={{ display: 'block', margin: 'auto', padding: '50px' }}>
                        <img src="/portrait.jpeg" className="profile-img"></img>
                    </div>
                </Row>
                <a href="/">
                    <Row className="link-row" style={{
                        color: '#000',
                        backgroundColor: '#fff',
                        textAlign: 'center',
                        display: 'block',
                        margin: 'auto',
                        width: '80%',
                        borderRadius: '10px',
                    }}>
                        <p style={{
                            padding: '10px',
                            fontSize: '22px',
                        }}>Youtube</p>
                    </Row>
                </a>
                <a href="/">
                    <Row className="link-row" style={{
                        color: '#000',
                        backgroundColor: '#fff',
                        textAlign: 'center',
                        display: 'block',
                        margin: 'auto',
                        width: '80%',
                        borderRadius: '10px',
                    }}>
                        <p style={{
                            padding: '10px',
                            fontSize: '22px',
                        }}>Website</p>
                    </Row>
                </a>
                <a href="/">
                    <Row className="link-row" style={{
                        color: '#000',
                        backgroundColor: '#fff',
                        textAlign: 'center',
                        display: 'block',
                        margin: 'auto',
                        width: '80%',
                        borderRadius: '10px',
                    }}>
                        <p style={{
                            padding: '10px',
                            fontSize: '22px',
                        }}>Twitter</p>
                    </Row>
                </a>
            </div>
            <style jsx>{`
            .bg {
                    height: 95vh;
                    background:linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('/linkbg.jpg');
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