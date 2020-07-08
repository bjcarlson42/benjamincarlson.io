import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import React, { useEffect } from 'react';
import { useRouter } from "next/router"

export default function NavBar() {
    const router = useRouter();
    const handleState = () => {
        var scrollTop = 0
        scrollTop = scrollY
        if (router.pathname == '/' && scrollTop  == 0) {
            document.getElementById('home').classList.add('unscrolledLink')
            document.getElementById('gear').classList.add('unscrolledLink')
            document.getElementById('blog').classList.add('unscrolledLink')
            document.getElementById('projects').classList.add('unscrolledLink')
            document.getElementById('contact').classList.add('unscrolledLink')
        }
        // remove navbar on the links page
        if (router.pathname == '/links') {
            document.getElementById('global-nav').classList.add('hide')
        }
    }
    const handleScroll = () => {
        var scrollTop = 0
        scrollTop = scrollY
        var x = 100 //  pixel value when navbar annimates on scroll
        if (screen.width > 768) {
            // nothing, keep x at 100
        } else if (screen.width <= 768) {
            x = 10
        }

        if (scrollTop > x) {
            document.getElementById('global-nav').classList.add('scrolled-nav')
            document.getElementById('global-nav').classList.add('nav-scrolled-box-shadow')
        } else if (scrollTop < x) {
            document.getElementById('global-nav').classList.remove('scrolled-nav')
            document.getElementById('global-nav').classList.remove('nav-scrolled-box-shadow')
        }
        if (router.pathname == '/') {
            if (scrollTop > x) {
                document.getElementById('home').classList.add('scrolledLink')
                document.getElementById('home').classList.remove('unscrolledLink')
                document.getElementById('gear').classList.add('scrolledLink')
                document.getElementById('gear').classList.remove('unscrolledLink')
                document.getElementById('blog').classList.add('scrolledLink')
                document.getElementById('blog').classList.remove('unscrolledLink')
                document.getElementById('projects').classList.add('scrolledLink')
                document.getElementById('projects').classList.remove('unscrolledLink')
                document.getElementById('contact').classList.add('scrolledLink')
                document.getElementById('contact').classList.remove('unscrolledLink')
            } else if (scrollTop < x) {
                document.getElementById('home').classList.remove('scrolledLink')
                document.getElementById('home').classList.add('unscrolledLink')
                document.getElementById('gear').classList.remove('scrolledLink')
                document.getElementById('gear').classList.add('unscrolledLink')
                document.getElementById('blog').classList.remove('scrolledLink')
                document.getElementById('blog').classList.add('unscrolledLink')
                document.getElementById('projects').classList.remove('scrolledLink')
                document.getElementById('projects').classList.add('unscrolledLink')
                document.getElementById('contact').classList.remove('scrolledLink')
                document.getElementById('contact').classList.add('unscrolledLink')
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
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Link id="contact" className={router.pathname == "/contact" ? "active nav-text" : "nav-text"} href="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    )
}
