import Head from 'next/head'
import Row from 'react-bootstrap/Row'
import LinkRow from '../components/LinkRow'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
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

function Links({ title, vid_url, thumbnail }) {
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
                    <LinkRow name={title} href={vid_url} img={thumbnail} />
                    <LinkRow name="Connect with me on Twitter" href="https://twitter.com/benscstutorials" img="/images/twitter.png" alt="Twitter logo" />
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

Links.getInitialProps = async () => {
    var key = process.env.YOUTUBE_KEY
    var channel_id = 'UCLMdmCCRFGWt7rktx6tMErw'
    const res = await fetch('https://www.googleapis.com/youtube/v3/search?key=' + key + '&channelId=' + channel_id + '&part=snippet,id&order=date&maxResults=1')
    const json = await res.json()
    const title = 'Latest YouTube video: ' + json.items[0].snippet.title
    const id = json.items[0].id.videoId
    const vid_url = 'http://www.youtube.com/watch?v=' + id
    const thumbnail = json.items[0].snippet.thumbnails.high.url
    return { title: title, vid_url: vid_url, thumbnail: thumbnail }
}

export default Links