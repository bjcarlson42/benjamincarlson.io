import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import React, { useEffect } from 'react'
import { useRouter } from "next/router"

export default function NavBar() {
    const router = useRouter()
    const handleState = () => {
        var scrollTop = 0 // initially set scrollTop to 0
        scrollTop = scrollY // takes care of error when user refreshes mid page

        // check if user is on '/hello'
        if (router.pathname == '/hello') {
            document.getElementById('global-nav').classList.add('hide') // hide navbar
        }
    }
    const handleScroll = () => {
        var scrollTop = 0
        scrollTop = scrollY
        var x = 100 //  pixel value when navbar animates on scroll
        if (screen.width > 768) {
            // nothing, keep x at 100
        } else if (screen.width <= 768) {
            x = 10
        }

        if (screen.width > 767) {
            if (scrollTop > x) {
                document.getElementById('global-nav').classList.add('scrolled-nav')
                document.getElementById('global-nav').classList.add('nav-scrolled-box-shadow')
                document.getElementById("global-nav").style.backgroundcolor = "white"
            } else if (scrollTop < x) {
                document.getElementById('global-nav').classList.remove('scrolled-nav')
                document.getElementById('global-nav').classList.remove('nav-scrolled-box-shadow')
                document.getElementById("global-nav").style.backgroundcolor = "transparent"
            }
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('load', handleState)
        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('load', handleState)
        }
    })
    return (
        <Navbar id="global-nav" expand="md" fixed="top">
            <div className="container">
                <Navbar.Brand id="home" className={router.pathname == "/" ? "active nav-text" : "nav-text"} href="/" style={{ paddingLeft: '0', marginLeft: '0' }}>Benjamin J. Carlson</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link id="gear" className={router.pathname == "/gear" ? "active nav-padding nav-text" : "nav-text"} href="/gear">Gear</Nav.Link>
                        <Nav.Link id="blog" className={router.pathname == "/blog" ? "active nav-text" : "nav-text"} href="/blog">Blog</Nav.Link>
                        <Nav.Link id="projects" className={router.pathname == "/projects" ? "active nav-text" : "nav-text"} href="/projects">Projects</Nav.Link>
                        <Nav.Link id="contact" className={router.pathname == "/contact" ? "active nav-text" : "nav-text"} href="/contact">Contact</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Link id="tutorials" className={router.pathname == "/tutorials" ? "active nav-text tutorial-nav" : "nav-text tutorial-nav"} href="/tutorials">Tutorials</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    )
}
