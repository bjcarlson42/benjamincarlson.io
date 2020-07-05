import App from 'next/app'
// ***** Global CSS ***** //
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css'
import '../public/css/styles.css'
import '../public/css/spacing.css'
import "odometer/themes/odometer-theme-default.css"
// ***** Components ***** //
import Footer from "../components/Footer"
import Nav from "../components/NavBar"

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <div className="container">
                <div className='navbar-container'>
                    <Nav />
                </div>
            </div>
            <Component {...pageProps} />
            <Footer />
        </div>
    )
}

export default MyApp