import App from 'next/app'
// ***** Global CSS ***** //
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css'
import '../public/css/styles.css'
import '../public/css/spacing.css'
import '../public/css/projects.css'
import '../public/css/tutorial.css'
// ***** Components ***** //
import Footer from "../components/Footer"
import Nav from "../components/NavBar"
// ***** Google Analytics ***** //
import * as gtag from '../lib/gtag'
import { useEffect } from 'react'
import Router from 'next/router'

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        const handleRouteChange = (url) => {
            gtag.pageview(url)
        }
        Router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
            Router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [])
    return (
        <div>
            <div className="container">
                <div className='navbar-container'>
                    <Nav />
                </div>
            </div>
            <Component {...pageProps} />
            <Footer />

            <style jsx>{`
            * {
                margin: 0;
                padding: 0;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
                scroll-behavior: smooth;
            }

            pre {
                background-color: #f0f0f0;
                padding: 10px;
            }

            code {
                background-color: #f0f0f0;
                color: #000;
            }

            li {
                list-style-position: inside;
            }

            .hide {
                display: none;
            }

            .center {
                text-align: center;
            }

            .animate-underline {
                position: relative;
                color: rgb(0, 98, 128);
                text-decoration: none !important;
            }

            .animate-underline::before {
                content: "";
                position: absolute;
                width: 100%;
                height: 2px;
                bottom: 0;
                left: 0;
                background-color: #000;
                visibility: hidden;
                transform: scaleX(0);
                transition: all 0.3s ease-in-out 0s;
                text-decoration: none !important;
            }

            .animate-underline:hover::before {
                visibility: visible;
                transform: scaleX(1);
                color: rgb(0, 98, 128);
                text-decoration: none !important;
            }

            .btn1 {
                background-color: #fff !important;
                color: #000 !important;
                border: 1px solid #000;
            }

            .btn1:hover {
                background-color: #000 !important;
                color: #fff !important;
            }

            h1, h2, h3, h4, h5, h6 {
                font-weight: 300;
            }
            `}</style>
        </div>
    )
}

export default MyApp