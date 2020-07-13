import Head from 'next/head'
import Row from 'react-bootstrap/Row'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Links from '../components/Links'
import {
    faGithub,
    faTwitter,
    faInstagram,
    faPinterest,
    faYoutube,
    faMedium,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons'
library.add(
    faGithub,
    faTwitter,
    faInstagram,
    faPinterest,
    faYoutube,
    faMedium,
    faLinkedin
)

export default function Link() {
    return (
        <div className="bg">
            <div className='container links-container'>
                <Head>
                    <title>Links | Benjamin J. Carlson</title>
                    <meta name="description" content="Benjamin Carlson links to YouTube, Medium, personal website and more. Connect with Ben" />
                </Head>
                <Row>
                    <div style={{ display: 'block', margin: 'auto', padding: '50px 0 20px 0' }}>
                        <img src="/images/portrait.jpeg" className="profile-img"></img>
                    </div>
                </Row>
                <p className="text-center white">Benjamin Carlson</p>

                <div className="link-row-outer-container">
                    <Links />
                </div>

                <div className="container">
                    <div style={{
                        textAlign: 'center',
                        paddingBottom: '20px'
                    }}>
                        <a href="https://twitter.com/benscstutorials" target="_blank">
                            <FontAwesomeIcon id="twitter" icon={faTwitter} style={{ color: '#fff', fontSize: '30px', width: '30px', margin: '8px' }} className={"fa"} />
                        </a>
                        <a href="https://www.youtube.com/channel/UCLMdmCCRFGWt7rktx6tMErw" target="_blank">
                            <FontAwesomeIcon id="youtube" icon={faYoutube} style={{ color: '#fff', fontSize: '30px', width: '30px', margin: '8px' }} className={"fa"} />
                        </a>
                        <a href="https://github.com/bjcarlson42" target="_blank">
                            <FontAwesomeIcon id="github" icon={faGithub} style={{ color: '#fff', fontSize: '30px', width: '30px', margin: '8px' }} className={"fa"} />
                        </a>
                        <a href="https://www.instagram.com/benscstutorials/" target="_blank">
                            <FontAwesomeIcon id="instagram" icon={faInstagram} style={{ color: '#fff', fontSize: '30px', width: '30px', margin: '8px' }} className={"fa"} />
                        </a>
                        <a href="https://medium.com/@benjamincarlson" target="_blank">
                            <FontAwesomeIcon id="medium" icon={faMedium} style={{ color: '#fff', fontSize: '30px', width: '30px', margin: '8px' }} className={"fa"} />
                        </a>
                        <a href="https://www.pinterest.com/benscstutorials/" target="_blank">
                            <FontAwesomeIcon id="pinterest" icon={faPinterest} style={{ color: '#fff', fontSize: '30px', width: '30px', margin: '8px' }} className={"fa"} />
                        </a>
                        <a href="https://www.linkedin.com/in/bjcarlson42/" target="_blank">
                            <FontAwesomeIcon id="linkedin" icon={faLinkedin} style={{ color: '#fff', fontSize: '30px', width: '30px', margin: '8px' }} className={"fa"} />
                        </a>
                    </div>
                </div>

            </div>
            <style jsx>{`
                .bg {
                    height: 100vh;
                    background:linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('/images/linkbg.jpg');
                    background-size: cover;
                    background-position: center center;
                    background-repeat: no-repeat;
                }

                .link-row-outer-container {
                    width: 60%;
                    display: block;
                    margin: auto;
                }

                @media only screen and (max-width: 768px) {
                    .link-row-outer-container {
                        width: 80%;
                    }
                }

                @media only screen and (max-width: 425px) {
                    .link-row-outer-container {
                        width: 90%;
                    }
                }

                @media only screen and (max-width: 375px) {
                    .link-row-outer-container {
                        width: 100%;
                    }
                }

                .profile-img {
                    border-radius: 50%;
                    width: 100px;
                    height: 100px;
                }

                .links-container {
                    min-height: 100vh;
                }

                .white {
                    color: #fff;
                }
            `}
            </style>
        </div>
    )
}