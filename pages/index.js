import Head from 'next/head'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useEffect } from 'react'
import YouTubeOdometer from '../components/IndexPage/YouTubeOdometer'
import YouTubeSection from '../components/IndexPage/YouTubeSection'
import TodoList from '../components/IndexPage/Todo'
import Subscribe from '../components/Subscribe'
import anime from 'animejs'
import Endpoints from '../components/IndexPage/Endpoints'

export default function Home() {
  const handleState = () => {
    // credit for this bg animation: https://codepen.io/alexzaworski/pen/mEkvAG
    var c = document.getElementById("bg");
    var ctx = c.getContext("2d");
    var cH;
    var cW;
    var bgColor = "#fff";
    var animations = [];
    var circles = [];

    var colorPicker = (function () {
      var colors = ["#FF6138", "#FFBE53", "#2980B9", "#bf62fc"];
      var index = 0;
      function next() {
        index = index++ < colors.length - 1 ? index : 0;
        return colors[index];
      }
      function current() {
        return colors[index]
      }
      return {
        next: next,
        current: current
      }
    })();

    function removeAnimation(animation) {
      var index = animations.indexOf(animation);
      if (index > -1) animations.splice(index, 1);
    }

    function calcPageFillRadius(x, y) {
      var l = Math.max(x - 0, cW - x);
      var h = Math.max(y - 0, cH - y);
      return Math.sqrt(Math.pow(l, 2) + Math.pow(h, 2));
    }

    function addClickListeners() {
      document.addEventListener("touchstart", handleEvent);
      document.addEventListener("mousedown", handleEvent);
    };

    function handleEvent(e) {
      if (e.touches) {
        e.preventDefault();
        e = e.touches[0];
      }
      var currentColor = colorPicker.current();
      var nextColor = colorPicker.next();
      var targetR = calcPageFillRadius(e.pageX, e.pageY);
      var rippleSize = Math.min(200, (cW * .4));
      var minCoverDuration = 750;

      var pageFill = new Circle({
        x: e.pageX,
        y: e.pageY,
        r: 0,
        fill: nextColor
      });
      var fillAnimation = anime({
        targets: pageFill,
        r: targetR,
        duration: Math.max(targetR / 2, minCoverDuration),
        easing: "easeOutQuart",
        complete: function () {
          bgColor = pageFill.fill;
          removeAnimation(fillAnimation);
        }
      });

      var ripple = new Circle({
        x: e.pageX,
        y: e.pageY,
        r: 0,
        fill: currentColor,
        stroke: {
          width: 3,
          color: currentColor
        },
        opacity: 1
      });
      var rippleAnimation = anime({
        targets: ripple,
        r: rippleSize,
        opacity: 0,
        easing: "easeOutExpo",
        duration: 900,
        complete: removeAnimation
      });

      var particles = [];
      for (var i = 0; i < 32; i++) {
        var particle = new Circle({
          x: e.pageX,
          y: e.pageY,
          fill: currentColor,
          r: anime.random(24, 48)
        })
        particles.push(particle);
      }
      var particlesAnimation = anime({
        targets: particles,
        x: function (particle) {
          return particle.x + anime.random(rippleSize, -rippleSize);
        },
        y: function (particle) {
          return particle.y + anime.random(rippleSize * 1.15, -rippleSize * 1.15);
        },
        r: 0,
        easing: "easeOutExpo",
        duration: anime.random(1000, 1300),
        complete: removeAnimation
      });
      animations.push(fillAnimation, rippleAnimation, particlesAnimation);
    }

    function extend(a, b) {
      for (var key in b) {
        if (b.hasOwnProperty(key)) {
          a[key] = b[key];
        }
      }
      return a;
    }

    var Circle = function (opts) {
      extend(this, opts);
    }

    Circle.prototype.draw = function () {
      ctx.globalAlpha = this.opacity || 1;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
      if (this.stroke) {
        ctx.strokeStyle = this.stroke.color;
        ctx.lineWidth = this.stroke.width;
        ctx.stroke();
      }
      if (this.fill) {
        ctx.fillStyle = this.fill;
        ctx.fill();
      }
      ctx.closePath();
      ctx.globalAlpha = 1;
    }

    var animate = anime({
      duration: Infinity,
      update: function () {
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, cW, cH);
        animations.forEach(function (anim) {
          anim.animatables.forEach(function (animatable) {
            animatable.target.draw();
          });
        });
      }
    });

    var resizeCanvas = function () {
      cW = window.innerWidth;
      cH = window.innerHeight;
      c.width = cW * devicePixelRatio;
      c.height = cH * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);
    };

    (function init() {
      resizeCanvas();
      if (window.CP) {
        // CodePen's loop detection was causin' problems
        // and I have no idea why, so...
        window.CP.PenTimer.MAX_TIME_IN_LOOP_WO_EXIT = 6000;
      }
      window.addEventListener("resize", resizeCanvas);
      addClickListeners();
      if (!!window.location.pathname.match(/fullcpgrid/)) {
        startFauxClicking();
      }
      handleInactiveUser();
    })();

    function handleInactiveUser() {
      var inactive = setTimeout(function () {
        fauxClick(cW / 2, cH / 2);
      }, 2000);

      function clearInactiveTimeout() {
        clearTimeout(inactive);
        document.removeEventListener("mousedown", clearInactiveTimeout);
        document.removeEventListener("touchstart", clearInactiveTimeout);
      }

      document.addEventListener("mousedown", clearInactiveTimeout);
      document.addEventListener("touchstart", clearInactiveTimeout);
    }

    function startFauxClicking() {
      setTimeout(function () {
        fauxClick(anime.random(cW * .2, cW * .8), anime.random(cH * .2, cH * .8));
        startFauxClicking();
      }, anime.random(200, 900));
    }

    function fauxClick(x, y) {
      var fauxClick = new Event("mousedown");
      fauxClick.pageX = x;
      fauxClick.pageY = y;
      document.dispatchEvent(fauxClick);
    }
  }
  useEffect(() => {
    window.addEventListener('load', handleState)
    return () => {
      window.removeEventListener('load', handleState)
    }
  })
  return (
    <div className='main'>
      <Head>
        <title>Benjamin J. Carlson</title>
        <meta name="description" content="Personal portfolio website for Benjamin Carlson. I am a computer science student who writes for medium and teaches programming on YouTube." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <canvas id="bg"></canvas>
      <div className="bg">
        <div className="centered">
          <h1>Benjamin J. Carlson</h1>
          <p>Rising junior studying computer science, documenting the journey and teaching others on YouTube</p>
          <YouTubeOdometer />
        </div>

        <div className="centered-arrow">
          <a href="#about" style={{ textDecoration: 'none' }}>
            <p className="center" style={{ fontSize: '20px', color: '#000', textTransform: 'uppercase' }}>Explore More</p>
            <FontAwesomeIcon style={{ width: '35px', height: '35px', color: '#000' }} icon={faArrowDown} />
          </a>
        </div>
      </div>

      <section id="about">
        <div className="container">
          <Row>
            <Col>
              <div className="padding-all">
                <h3 className="h3-padding">About</h3>
                <p style={{ fontSize: '18px' }}>Welcome to my personal website. I am a rising junior at Central Connecticut State University where I am studying computer science and mathmatics. I enjoy learning about programming and technology and have a passion for teaching others. I started a <a href="https://www.youtube.com/benjamincarlson" target="_blank" className="animate-underline">YouTube channel</a> to document my coding journey and make tutorial videos. On this site you will find my projects, job experience, tutorials and much more.</p>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <section id="projects-section">
        <div className="container">
          <h3 className="h3-padding center">Projects</h3>
          <Row className="center">
            <Col md style={{ margin: '50px 0' }}>
              <div className="project-card">
                <h3>WOTD</h3>
                <p>Flutter + Dart</p>
                <p className="projects-p-index">Word of the day app built with Flutter. Uses the Wordnik API for word data.</p>
                <div className="padding-bottom-xl">
                  <a href="/projects/word-of-the-day">
                    <input type="submit" value="VIEW MORE" className="btn btn-primary btn1"></input>
                  </a>
                </div>
              </div>
            </Col>
            <Col md style={{ margin: '50px 0' }}>
              <div className="project-card">
                <h3>Grid</h3>
                <p>.NET + C#</p>
                <p className="projects-p-index">A program written in C# and asp .net mvc which generated a grid of numbers based on user input.</p>
                <div className="padding-bottom-xl">
                  <a href="/projects/grid">
                    <input type="submit" value="VIEW MORE" className="btn btn-primary btn1"></input>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="center">
            <Col md style={{ margin: '50px 0' }}>
              <div className="project-card">
                <h3>Personal Website</h3>
                <p>NextJS + JS</p>
                <p className="projects-p-index">Personal website built with NextJS utilizing various API's to gather current data.</p>
                <div className="padding-bottom-xl">
                  <a href="/projects/personal-website">
                    <input type="submit" value="VIEW MORE" className="btn btn-primary btn1"></input>
                  </a>
                </div>
              </div>
            </Col>
            <Col md style={{ margin: '50px 0' }}>
              <div className="project-card">
                <h3>Word Counter</h3>
                <p>C#</p>
                <p className="projects-p-index">Application that performs analysis on an input file.</p>
                <div className="padding-bottom-xl">
                  <a href="/projects/word-counter">
                    <input type="submit" value="VIEW MORE" className="btn btn-primary btn1"></input>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
          <div className="center" style={{ marginTop: '20px' }}>
            <a href="/projects">
              <input type="submit" value="SEE ALL PROJECTS" className="btn btn-primary btn1"></input>
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
              <h6 style={{ fontSize: '22px' }}>Frontend</h6>
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
          <h3 className="h3-padding" style={{ marginTop: '10px' }}>Endpoints</h3>
          <Row>
            <Endpoints />
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

      <style jsx>{`
      #bg {
          background-color: #fff;
          position:absolute;
          left:0;
          top:0;
          height: 100vh;
          width: 100%;
          overflow: hidden;
        }

      .bg {
          height: 100vh;
        }

      #about {
          background-color: #fff;
        }

      #tech-stack {
          background-color: #fff;
          padding: 100px;
          color: #000;
      }

      @media only screen and (max-width: 425px) {
          #tech-stack {
              padding: 50px;
              text-align: center;
          }
      }

      #projects-section {
          background-color: rgb(33, 37, 41);
          color: #fff;
          padding: 100px;
      }

      #goals {
          background-color: #fff;
          padding: 20px 0;
      }     

      @media only screen and (max-width: 425px) {
          .btn-todo-submit {
                    width: 100%;
          }
          #projects-section {
              padding: 30px;
          }
      }

      .projects-p-index {
        width: 60%;
        display: block;
        margin: auto;
        margin-bottom: 15px; 
      }

      @media only screen and (max-width: 768px) {
        .projects-p-index {
          width: 80%;
        }
      }

      @media only screen and (max-width: 425px) {
        .projects-p-index {
          width: 90%;
        }
      }

#youtube-section {
    background-color: #FF0000;
    padding-bottom: 75px;
}

#youtube-section h2 {
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
}

.centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #000;
    text-align: left;
}

.centered h1 {
    font-size: 50px;
    font-weight: 300;
}

.centered p {
    font-size: 25px;
    font-weight: 300;
}

.centered-arrow {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    text-align: center;
}

@media only screen and (max-width: 767px) {
    .padding-top {
        padding-top: 30px;
    }
}

@media only screen and (max-width: 768px) {
    #about {
        padding: 0px !important;
    }
    .p-left {
        width: 100% !important;
    }
}

@media only screen and (max-width: 1024px) {
    .centered {
        width: 70%;
    }
}

@media only screen and (max-width: 768px) {
    .centered {
        width: 80%;
    }
}

/* adding links.js and about padding to this query */

@media only screen and (max-width: 425px) {
    .centered {
        width: 90%;
    }
    .centered h1 {
        font-size: 40px;
    }
    .link-row {
        width: 95% !important;
    }
    .padding-top {
        padding-top: 50px;
    }
    .input-todo {
        width: 100% !important;
    }
    .padding-bottom {
        padding-bottom: 25px;
    }
}

.odometer-num {
    font-size: 35px;
}

.about-img {
    max-width: 300px;
    max-height: 300px;
    display: block;
    margin: auto;
}

.img-container {
    padding: 5%;
}
    `}
      </style>
    </div >
  )
}