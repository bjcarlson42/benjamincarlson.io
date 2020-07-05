import Head from 'next/head'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import dynamic from 'next/dynamic'
import TodoList from '../components/Todo'
// import { FontAwesomeIcon, FaArrowDown } from '@fortawesome/react-fontawesome'

function Home({ youtubeData }) {
  const Odometer = dynamic(import('react-odometerjs'), {
    ssr: false,
    loading: () => 0
  });
  return (
    <div className='main'>
      <Head>
        <title>Benjamin J. Carlson</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg">
        <div className="centered">
          <h1>Benjamin J. Carlson</h1>
          <p>Rising junior studying computer science, documenting the journey and teaching others on YouTube</p>
          <span><Odometer format="(,ddd)" duration={1000} value={youtubeData.subscriberCount} /> subscribers</span>
          <span>&nbsp;|&nbsp;</span>
          <span><Odometer format="(,ddd)" duration={1000} value={youtubeData.viewCount} /> views</span>
          <span>&nbsp;|&nbsp;</span>
          <span><Odometer format="(,ddd)" duration={1000} value={youtubeData.videoCount} /> videos</span>
        </div>
        <div className="centered-arrow">
          <p className="center"><a href="#about">Explore More</a></p>
          {/* <FontAwesomeIcon icon={FaArrowDown} /> */}
        </div>
      </div>

      <section id="about">
        <div className="container">
          <Row>
            <Col md>
            </Col>
            <Col md>
              <h3 className="h3-padding">About</h3>
              <div className="p-left">
                <p>Welcome to my personal website. I am a rising junior at Central Connecticut State University where I am studying computer science and mathmatics. I enjoy learning about programming and technology and have a passion for teaching others. I started a <a href="#">YouTube channel</a> to document my coding journey and make tutorial videos. On this site you will find my projects, job experience, tutorials and much more.</p>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <section id="projects">
        <div className="container">
          <h3 className="h3-padding center">Projects</h3>
          <Row className="center">
            <Col md>
              <h3>Project 1</h3>
            </Col>
            <Col md>
              <h3>Project 2</h3>
            </Col>
          </Row>

          <Row className="center">
            <Col md>
              <h3>Project 3</h3>
            </Col>
            <Col md>
              <h3>Project 4</h3>
            </Col>
          </Row>
        </div>
      </section>

      <section id="tech-stack">
        <div className="container">
          <h3 className="h3-padding">Tech Stack</h3>
          <p>This websites' tech stack...</p>
          <Row>
            <Col md>
              <h6>Frontend</h6>
            </Col>
            <Col md>
              <h6>Backend</h6>
            </Col>
            <Col md>
              <h6>Contact form logic</h6>
            </Col>
            <Col md>
              <h6>Deployment</h6>
            </Col>
          </Row>
        </div>
      </section>

      <section id='youtube'>
        <div className='container'>
          <h2 className='h2-padding center'>YouTube</h2>
          <p className='center' style={{ color: '#fff' }}>I started a YouTube channel to teach others how to code and to document my programming journey. Here are some of my stats.</p>
          <Row style={{ textAlign: 'center', color: '#fff' }}>
            <Col lg>
              <p className="odometer-num"><Odometer format="(,ddd)" duration={1000} value={youtubeData.subscriberCount} /></p>
              <h6>Subscribers</h6>
            </Col>
            <Col lg>
              <p className="odometer-num"><Odometer format="(,ddd)" duration={1000} value={youtubeData.viewCount} /></p>
              <h6>Views</h6>
            </Col>
            <Col lg>
              <p className="odometer-num"><Odometer format="(,ddd)" duration={1000} value={youtubeData.videoCount} /></p>
              <h6>Videos</h6>
            </Col>
          </Row>
        </div>
      </section>

      <section id="goals">
        <div className="container">
          <h3 className="h3-padding">Future Endeavors</h3>
          <p>I am constantly learning new things. Here are some of the things I plan on learning in the next 6 months.</p>
          <TodoList />
          <small>Try the TODO list out! Add an item in the input box and mark an item as complete by clicking it!</small>
        </div>
      </section>

      <style jsx>{`
        .bg {
          height: 100vh;
          background:linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('/images/bg.jpg');
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          background-attachment: fixed;
        }

        #about {
          background-color: #fff;
          padding: 100px;
        }

        #tech-stack {
          background-color: #1c1c1c;
          padding: 100px;
          color: #fff;
        }

        #projects {
          background-color: #757575;
          padding: 100px;
        }

        #goals {
          background-color: #fff;
          padding: 20px 0;
        }

        #youtube {
          background-color: #FF0000;
          padding-bottom: 75px;
        }

        #youtube h2 {
          color: #fff;
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
          width: 150px;
          margin: 15px;
        }
      `}</style>
    </div>
  )
}

Home.getInitialProps = async () => {
  var key = process.env.YOUTUBE_KEY
  const res = await fetch('https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCLMdmCCRFGWt7rktx6tMErw&key=' + key)
  const json = await res.json()
  var data = json.items[0].statistics
  return { youtubeData: data }
}

export default Home