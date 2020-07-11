import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRouter } from "next/router"
import React, { useEffect } from 'react';
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

export default function Footer() {
    const router = useRouter();
    const handleState = () => {
        // remove footer on the links page
        if (router.pathname == '/links') {
            document.getElementById('footer').classList.add('hide')
        }
    }
    useEffect(() => {
        window.addEventListener('load', handleState)
        return () => {
            window.removeEventListener('load', handleState)
        }
    })
    return (
        <footer id="footer">
            <div style={{
                backgroundColor: '#191919',
            }}>
                <div className="container">
                    <p style={{ color: '#fff', textAlign: 'center', fontSize: '25px', padding: '20px 0 0 0', fontWeight: '300', textTransform: 'uppercase' }}>Connect With Me</p>
                    <div style={{
                        textAlign: 'center',
                        paddingBottom: '20px'
                    }}>
                        <a href="https://twitter.com/benscstutorials" target="_blank">
                            <FontAwesomeIcon id="twitter" icon={faTwitter} style={{ color: '#fff', fontSize: '30px', width: '30px', margin: '8px' }} className={"fa"} />
                        </a>
                        <a href="https://www.youtube.com/benjamincarlson" target="_blank">
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
            <div style={{ backgroundColor: '#141414' }}>
                <p style={{
                    textAlign: 'center',
                    color: '#fff',
                    padding: '10px',
                    margin: '0',
                }}>2019 - 2020 | Benjamin J. Carlson</p>
            </div>
        </footer>
    )
}

{/* <div className='navbar-container'>
    <p style={{
        fontSize: '22px',
        textAlign: 'center',
        padding: '60px',
        margin: '0',
        color: '#fff',
    }}
    ><span><a href="/" style={{ color: '#fff', padding: '0 100px' }}>Home</a></span> <span style={{ color: '#9c9c9c' }}>|</span>
        <span><a href="/gear" style={{ color: '#fff', padding: '0 100px' }}>Gear</a></span><span style={{ color: '#9c9c9c' }}>|</span>
        <span><a href="/blog" style={{ color: '#fff', padding: '0 100px' }}>Blog</a></span> <span style={{ color: '#9c9c9c' }}>|</span>
        <span><a href="/projects" style={{ color: '#fff', padding: '0 100px' }}>Projects</a></span> <span style={{ color: '#9c9c9c' }}>|</span>
        <span><a href="/contact" style={{ color: '#fff', padding: '0 100px' }}>Contact</a></span></p>
</div> */}