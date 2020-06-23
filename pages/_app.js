// import App from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import '../public/styles.css'
import { useRouter } from "next/router"
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faGithub,
    faTwitter,
    faInstagram,
    faPinterest,
    faYoutube,
    faMedium
} from '@fortawesome/free-brands-svg-icons';
library.add(
    faGithub,
    faTwitter,
    faInstagram,
    faPinterest,
    faYoutube,
    faMedium
);

function MyApp({ Component, pageProps }) {
    const router = useRouter();
    return (
        <div>
            <div className="container">
                <div className='navbar-container'>
                    <Navbar expand="md" style={{ paddingLeft: '0', marginLeft: '0' }}>
                        <Navbar.Brand className={router.pathname == "/" ? "active nav-text" : "nav-text"} href="/" style={{ paddingLeft: '0', marginLeft: '0' }}>Benjamin J. Carlson</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link className={router.pathname == "/gear" ? "active nav-padding nav-text" : "nav-text"} href="/gear">Gear</Nav.Link>
                                <Nav.Link className={router.pathname == "/blog" ? "active nav-text" : "nav-text"} href="/blog">Blog</Nav.Link>
                                <Nav.Link className={router.pathname == "/projects" ? "active nav-text" : "nav-text"} href="/projects">Projects</Nav.Link>
                            </Nav>
                            <Nav className="ml-auto">
                                <Nav.Link className={router.pathname == "/contact" ? "active nav-text" : "nav-text"} href="/contact">Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
            <Component {...pageProps} />
            <footer>
                <div style={{
                    backgroundColor: '#282828',
                    margin: '0',
                }}>
                    <p style={{ color: '#fff', textAlign: 'center', fontSize: '25px', padding: '20px 0 0 0', fontWeight: '300', textTransform: 'uppercase' }}>Connect With Me</p>
                    <div style={{
                        textAlign: 'center',
                        padding: '0 0 20px 0',
                    }}>
                        <a href="https://twitter.com/benscstutorials" target="_blank">
                            <FontAwesomeIcon icon={faTwitter} style={{ color: '#fff', fontSize: '30px', width: '30px', margin: '8px' }} className={"fa"} />
                        </a>
                        <a href="https://www.youtube.com/channel/UCLMdmCCRFGWt7rktx6tMErw" target="_blank">
                            <FontAwesomeIcon icon={faYoutube} style={{ color: '#fff', fontSize: '30px', width: '30px', margin: '8px' }} className={"fa"} />
                        </a>
                        <a href="https://github.com/bjcarlson42" target="_blank">
                            <FontAwesomeIcon icon={faGithub} style={{ color: '#fff', fontSize: '30px', width: '30px', margin: '8px' }} className={"fa"} />
                        </a>
                        <a href="https://www.instagram.com/benscstutorials/" target="_blank">
                            <FontAwesomeIcon icon={faInstagram} style={{ color: '#fff', fontSize: '30px', width: '30px', margin: '8px' }} className={"fa"} />
                        </a>
                        <a href="https://medium.com/@benjamincarlson" target="_blank">
                            <FontAwesomeIcon icon={faMedium} style={{ color: '#fff', fontSize: '30px', width: '30px', margin: '8px' }} className={"fa"} />
                        </a>
                        <a href="https://www.pinterest.com/benscstutorials/" target="_blank">
                            <FontAwesomeIcon icon={faPinterest} style={{ color: '#fff', fontSize: '30px', width: '30px', margin: '8px' }} className={"fa"} />
                        </a>
                    </div>
                </div>
                <div style={{
                    backgroundColor: '#191919',
                }}>
                    <div className="container">
                        <div className='navbar-container'>
                            <p style={{
                                fontSize: '22px',
                                textAlign: 'center',
                                padding: '60px',
                                margin: '0',
                                color: '#fff',
                            }}
                            ><span><a href="/" style={{ color: '#fff', padding: '0 10px' }}>Home</a></span> |
                            <span><a href="/gear" style={{ color: '#fff', padding: '0 10px' }}>Gear</a></span> |
                            <span><a href="/blog" style={{ color: '#fff', padding: '0 10px' }}>Blog</a></span> |
                            <span><a href="/projects" style={{ color: '#fff', padding: '0 10px' }}>Projects</a></span> |
                            <span><a href="/contact" style={{ color: '#fff', padding: '0 10px' }}>Contact</a></span></p>
                            <p style={{
                                textAlign: 'center',
                                color: '#fff',
                                paddingBottom: '10px',
                                margin: '0',
                            }}>2019 - 2020 | Benjamin J. Carlson</p>
                        </div>
                    </div>
                </div>
            </footer>
            <style jsx>{`
        .social-footer-logo {
            width: 50px;
        }

        .nav-text {
            font-size: 20px;
        }
      `}</style>
        </div>
    )
}

export default MyApp