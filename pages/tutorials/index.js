import Head from 'next/head'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Index() {
    return (
        <div className="main">
            <Head>
                <title>Tutorials | Benjamin J. Carlson</title>
                <meta name="description" content="Learn to code for free" />
            </Head>
            <div className="container" style={{ paddingTop: '100px' }}>
                <h1 className="text-center">Learn To Code For Free</h1>
                <p className="text-center">Written tutorials from my <a target="_blank" href="https://youtube.com/benjamincarlson">YouTube video tutorials</a></p>
                <br />
                <Row>
                    <Col lg>
                        <div className="individual-post">
                            <a href="/tutorials/post/06-09-2020-python-twitter-bot-tweepy">
                                <div className="text-center">
                                    <img className="individual-post-img" src="../images/tutorials/1.jpg"></img>
                                    <h2 className="individual-post-text">Python Automation With Tweepy</h2>
                                </div>
                            </a>
                        </div>
                    </Col>
                    <Col lg>
                        {/* <div className="individual-post">
                            <a href="/tutorials/post/06-09-2020-python-twitter-bot-tweepy">
                                <div className="text-center">
                                    <img className="individual-post-img" src="../images/tutorials/1.jpg"></img>
                                    <h2 className="individual-post-text">Python Automation With Tweepy</h2>
                                </div>
                            </a>
                        </div> */}
                    </Col>
                    <Col lg>
                        {/* <div className="individual-post">
                            <a href="/tutorials/post/06-09-2020-python-twitter-bot-tweepy">
                                <div className="text-center">
                                    <img className="individual-post-img" src="../images/tutorials/1.jpg"></img>
                                    <h2 className="individual-post-text">Python Automation With Tweepy</h2>
                                </div>
                            </a>
                        </div> */}
                    </Col>
                </Row>
            </div>
        </div>
    )
}

// Index.getInitialProps = async ({ req }) => {
//     const res = await getPosts()
//     const json = await res.json()
//     return { posts: json }
// }