import Head from 'next/head'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Home({ followers }) {
  return (
    <div>
      <div>
        <Head>
          <title>Benjamin J. Carlson</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="bg">
          <div className="centered">
            <h1>Benjamin J. Carlson</h1>
            <p>Computer Science student building cool things with code. Documenting the journey on Medium and YouTube.</p>
            <div>
              <span>
                YouTube: 0 Medium: 0
              </span>
            </div>
          </div>
        </div>
        <div id='about'>
          <div className="container padding-bottom">
            <h2 style={{
              padding: '30px 0',
              textTransform: 'uppercase',
              fontSize: '25px',
            }}>About Me</h2>
            <p style={{ paddingBottom: '25px' }}>I am a computer science student, building cool things with technology.
            Currently interested in Mobile app development with Flutter and building API's with Python and Django REST. Uploading to YouTube and posting to Medium reguarly,
            documenting the process as well as posting tutorials! Below are some of the places I've been fortunate to work at
            and impove on my skills.</p>
            <Row>
              <Col>
                <h6>Middletown City Hall - Summer 2018</h6>
                <ul>
                  <li>Interned with the I.T. Department</li>
                  <li>Answered various I.T. related questions from city hall workers’</li>
                  <li>Disposed of hard drives and other electronics securely</li>
                  <li>Security camera, printer, and other electronic inventory</li>
                </ul>
              </Col>
              <Col>
                <h6>Law Forum LLC - Summer 2019, 2020</h6>
                <ul>
                  <li>Worked in C# and .NET to generate internal reports</li>
                  <li>Worked closely with client database writing SQL and C# LINQ queries</li>
                  <li>Updated and added pages to internal website</li>
                </ul>
              </Col>
            </Row>
          </div>
        </div>
        <div id='tech-stack'>
          <div className="container">
            <h2 style={{
              padding: '30px 0 0 0'
            }}>Tech Stack</h2>
            <p style={{
              paddingBottom: '40px',
            }}>THIS WEBSITES ARCHITECTURE</p>
            <Row>
              <Col md>
                <div className="center">
                  <h6>Frontend</h6>
                  <ul>
                    <li>Next JS + React</li>
                  </ul>
                </div>
              </Col>
              <Col md>
                <div className="center">
                  <h6>Contact Form Logic</h6>
                  <ul>
                    <li>Nodemailer + Node.js</li>
                  </ul>
                </div>
              </Col>
              <Col md>
                <div className="center">
                  <h6>Deployment</h6>
                  <ul>
                    <li>Vercel</li>
                  </ul>
                </div>
              </Col>
            </Row>
            <Row style={{paddingTop: '100px'}}>
              <Col sm>
                <div className="center">
                  <a href="/projects">
                    <input type="submit" className="btn btn-primary" value="PROJECTS"></input>
                  </a>
                </div>
              </Col>
              <Col sm>
                <div className="center">
                  <a href="/gear">
                    <input type="submit" className="btn btn-primary" value="GEAR" href="/gear"></input>
                  </a>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <style jsx>{`
        .bg {
          height: 95vh;
          background:linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('/bg.jpg');
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
        }

        #about {
          background-color: #212529;
          color: #fff;
        }
        
        #tech-stack {
          background-color: #fff;
          padding: 20px 0;
        }

        .padding-bottom {
          padding-bottom: 20px;
        }

        .center {
          text-align: center;
        }

        .btn {
          background-color: #212529;
          border: none;
        }
      `}</style>
    </div>
  )
}

// Home.getInitialProps = async () => {

//   return { followers: followers }
// }

export default Home