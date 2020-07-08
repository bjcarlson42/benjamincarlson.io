import Head from 'next/head'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function WordOfTheDay() {
    return (
        <div style={{ minHeight: '100vh' }}>
            <Head>
                <title>WOTD Detail Project | Benjamin J. Carlson</title>
                <meta name="description" content="Word of the day app for IOS and Android developed by Benjamin Carlson" />
            </Head>
            <div className="container">
                <div style={{ marginTop: '150px' }}>
                    <Row>
                        <Col xl xl={10}>
                            <div className="project-top-inner">
                                <h1>Word Of The Day App</h1>
                                <div className="text-left">
                                    <p>A word of the day app built with Flutter and Dart. It utilizes the Wordnik API for word data.</p>
                                </div>
                            </div>
                        </Col>
                        <Col xl className="rm-1199">
                            <div className="project-img-container">
                                <img className="img-project img-project-right" src="../images/projects/wotd/1.png"></img>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col md>
                            <div className="project-middle-inner">
                                <h3>Learn a new word every day</h3>
                                <hr className="projects-wotd-hr" />
                            </div>
                        </Col>
                        <Col md>
                            <div className="project-img-container">
                                <img className="img-project" src="../images/projects/wotd/3.png"></img>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col md>
                            <div className="project-middle-inner">
                                <h3>Save your favorites</h3>
                                <hr className="projects-wotd-hr" />
                            </div>
                        </Col>
                        <Col md>
                            <div className="project-img-container">
                                <img className="img-project" src="../images/projects/wotd/2.png"></img>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <div className="project-top-inner margin-bottom">
                                <div className="text-center">
                                    <h3>Available soon on IOS and Android</h3>
                                    <br />
                                    <p className="text-center">Powered by <span><img className="wordnik-logo" src="../images/projects/wotd/wordnik-logo-300px.png"></img></span></p>
                                    <p><a href="/#projects-section">Back to all projects</a></p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}
export default WordOfTheDay