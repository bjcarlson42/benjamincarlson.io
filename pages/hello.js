import Head from 'next/head'
import Row from 'react-bootstrap/Row'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Links from '../components/HelloPage/Links'
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
                    <title>Hello | Benjamin J. Carlson</title>
                    <meta name="description" content="Benjamin Carlson links to YouTube, Medium, personal website and more. Connect with Ben" />
                </Head>
                <Row>
                    <div style={{ display: 'block', margin: 'auto', padding: '50px 0 20px 0' }}>
                        <img src="/images/portrait.jpeg" className="profile-img"></img>
                    </div>
                </Row>
                <p className="text-center white" style={{fontSize: '30px'}}>Benjamin Carlson</p>
                <p className="text-center white">19 year old computer science student documenting the process on YouTube</p>
                <div className="container">
                    <div style={{
                        textAlign: 'center',
                        paddingBottom: '20px'
                    }}>
                        <a href="https://twitter.com/benscstutorials" target="_blank" className="fa-link">
                            <FontAwesomeIcon id="twitter" icon={faTwitter} className="fa-link" className={"fa"} />
                        </a>
                        <a href="https://www.youtube.com/channel/UCLMdmCCRFGWt7rktx6tMErw" target="_blank" className="fa-link">
                            <FontAwesomeIcon id="youtube" icon={faYoutube} className="fa-link" className={"fa"} />
                        </a>
                        <a href="https://github.com/bjcarlson42" target="_blank" className="fa-link">
                            <FontAwesomeIcon id="github" icon={faGithub} className="fa-link" className={"fa"} />
                        </a>
                        <a href="https://www.instagram.com/benscstutorials/" target="_blank" className="fa-link">
                            <FontAwesomeIcon id="instagram" icon={faInstagram} className="fa-link" className={"fa"} />
                        </a>
                        <a href="https://medium.com/@benjamincarlson" target="_blank" className="fa-link">
                            <FontAwesomeIcon id="medium" icon={faMedium} className="fa-link" className={"fa"} />
                        </a>
                        {/* <a href="https://www.pinterest.com/benscstutorials/" target="_blank" className="fa-link">
                            <FontAwesomeIcon id="pinterest" icon={faPinterest} className="fa-link" className={"fa"} />
                        </a> */}
                        <a href="https://www.linkedin.com/in/bjcarlson42/" target="_blank" className="fa-link">
                            <FontAwesomeIcon id="linkedin" icon={faLinkedin} className="fa-link" className={"fa"} />
                        </a>
                    </div>
                </div>
                <div className="link-row-outer-container">
                    <Links />
                </div>

            </div>
            <style jsx>{`
                .bg {
                    height: 100vh;
                    background-color: #fff;
                    background-image: -webkit-linear-gradient(30deg, #ABFDE9 50%, #55819A 50%);
                }

                .fa-link {
                    color: #fff;
                    font-size: 30px;
                    width: 30px;
                    margin: 8px;
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

                    .fa-link {
                        font-size: 25px;
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