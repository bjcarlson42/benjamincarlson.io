import Head from 'next/head'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import TodoList from '../components/Todo'
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import YouTubeOdometer from '../components/YouTubeOdometer'
import YouTubeSection from '../components/YouTubeSection'
import Subscribe from '../components/Subscribe'

export default function Home() {
  return (
    <div className='main'>
      <Head>
        <title>Benjamin J. Carlson</title>
        <meta name="description" content="Personal portfolio website for Benjamin Carlson. I am a computer science student who writes for medium and teaches programming on YouTube." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg">
        <div className="centered">
          <h1>Benjamin J. Carlson</h1>
          <p>Rising junior studying computer science, documenting the journey and teaching others on YouTube</p>
          <YouTubeOdometer />
        </div>

        <div className="centered-arrow">
          <a href="#about">
            <p className="center" style={{ fontSize: '20px', color: '#fff' }}>EXPLORE MORE</p>
            <FontAwesomeIcon style={{ width: '35px', height: '35px', color: '#fff' }} icon={faArrowDown} />
          </a>
        </div>
      </div>

      <section id="about">
        <div className="container">
          <Row>
            <Col>
              <div className="padding-all">
                <h3 className="h3-padding">About</h3>
                <p>Welcome to my personal website. I am a rising junior at Central Connecticut State University where I am studying computer science and mathmatics. I enjoy learning about programming and technology and have a passion for teaching others. I started a <a href="https://www.youtube.com/benjamincarlson" target="_blank" className="animate-underline">YouTube channel</a> to document my coding journey and make tutorial videos. On this site you will find my projects, job experience, tutorials and much more.</p>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <section id="projects-section">
        <div className="container">
          <h3 className="h3-padding center" style={{ paddingBottom: '50px', fontSize: '35px' }}>Projects</h3>
          <Row className="center">
            <Col md>
              <h3>WOTD</h3>
              <p>Flutter + Dart</p>
              <p>Word of the day app built with Flutter. Uses the Wordnik API for word data.</p>
              <div className="padding-bottom-xl">
                <a href="/projects/word-of-the-day">
                  <input type="submit" value="VIEW MORE" className="btn btn-primary btn1"></input>
                </a>
              </div>
            </Col>
            <Col md>
              <h3>Grid</h3>
              <p>.NET + C#</p>
              <p>A program written in C# and asp .net mvc which generated a grid of numbers based on user input.</p>
              <div className="padding-bottom-xl">
                <a href="/projects/grid">
                  <input type="submit" value="VIEW MORE" className="btn btn-primary btn1"></input>
                </a>
              </div>
            </Col>
          </Row>

          <Row className="center">
            <Col md>
              <h3>Personal Website</h3>
              <p>NextJS + JS</p>
              <p>Personal website built with NextJS utilizing various API's to gather current data.</p>
              <div className="padding-bottom-xl">
                <a href="/projects/personal-website">
                  <input type="submit" value="VIEW MORE" className="btn btn-primary btn1"></input>
                </a>
              </div>
            </Col>
            <Col md>
              <h3>Word Counter</h3>
              <p>C#</p>
              <p>Application that performs analysis on an input file.</p>
              <div className="padding-bottom-xl">
                <a href="/projects/word-counter">
                  <input type="submit" value="VIEW MORE" className="btn btn-primary btn1"></input>
                </a>
              </div>
            </Col>
          </Row>
          <div className="center">
            <a href="/projects">
              <input type="submit" value="SEE MORE" className="btn btn-primary btn1"></input>
            </a>
          </div>
        </div>
      </section>

      <section id="tech-stack">
        <div className="container">
          <h3 className="h3-padding">Tech Stack</h3>
          <p className="h3-padding">This websites' tech stack...</p>
          <Row>
            <Col md className="padding-bottom">
              <h6 style={{fontSize: '22px'}}>Frontend</h6>
              <ul>
                <li>REACT + NEXT JS</li>
              </ul>
            </Col>
            <Col md className="padding-bottom">
              <h6 style={{ fontSize: '22px' }}>Contact Form Logic</h6>
              <ul>
                <li>NODE MAILER</li>
              </ul>
            </Col>
            <Col md className="padding-bottom">
              <h6 style={{ fontSize: '22px' }}>Deployment</h6>
              <ul>
                <li>VERCEL</li>
              </ul>
            </Col>
          </Row>
        </div>
      </section>

      <YouTubeSection />

      <section id="goals">
        <div className="container">
          <h3 className="h3-padding">Future Endeavors</h3>
          <p>I am constantly learning new things. Here are some of the things I plan on learning in the next 6 months.</p>
          <p style={{ color: 'lightgrey', fontSize: '14px' }}>Try the TODO list out! Add an item in the input box and mark an item as complete by clicking it!</p>
          <TodoList />
        </div>
      </section>

      <div>
        <div className="container">
          <Subscribe />
        </div>
      </div>

    </div >
  )
}