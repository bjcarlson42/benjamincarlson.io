import Head from 'next/head'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Gear() {
    return (
        <div className="container">
            <Head>
                <title>Gear | Benjamin J. Carlson</title>
            </Head>
            <h1>Gear</h1>
            <p style={{fontSize: '20px'}}>Productivity is directly associated with selecting the right software and hardware. Here is a list of all the gear I use on a day to day basis.</p>
            <p style={{color: 'darkgrey'}}>Disclosure: I am a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for me to earn fees by linking to Amazon.com and affiliated sites.</p>
            <Row>
                <Col md>
                    <h3 style={{fontWeight: '300'}}>Hardware</h3>
                    <p><b>Laptop: </b> <a href="https://amzn.to/3fIS3vo" target="_blank" style={{ color: '#000' }}>Apple MacBook Pro (15-Inch, 16GB RAM, 512GB Storage, 2.6GHz Intel Core i7)</a></p>
                    <p><b>Adaptor: </b><a href="https://amzn.to/2Wnx35J" target="_blank" style={{ color: '#000' }}>HyperDrive USB C Hub</a></p>
                    <p><b>Monitor: </b> <a href="https://amzn.to/35QxuIB" target="_blank" style={{ color: '#000' }}>Samsung CF390 Series 27 inch FHD 1920x1080 Curved Desktop Monitor</a></p>
                    <p><b>Smartphone: </b><a href="https://amzn.to/2SWozA7" target="_blank" style={{ color: '#000' }}>Google Pixel 2 XL</a></p>
                    <p><b>Keyboard: </b> <a href="https://amzn.to/3cohJez" target="_blank" style={{ color: '#000' }}>Wireless Keyboard</a></p>
                    <p><b>Earbuds: </b><a href="https://store.google.com/us/product/pixel_buds" target="_blank" style={{ color: '#000' }}>Google Pixel Buds</a></p>
                </Col>
                <Col md>
                    <h3 style={{ fontWeight: '300' }}>Software</h3>
                    <p><b>IDE: </b> <a href="" target="_blank" style={{ color: '#000' }}>Visual Studio Code</a></p>
                    <p><b>API Tester: </b><a href="" target="_blank" style={{ color: '#000' }}>Postman</a></p>
                    <p><b>Browser: </b> <a href="" target="_blank" style={{ color: '#000' }}>Google Chrome</a></p>
                    <p><b>IPhone Simulator: </b> <a href="" target="_blank" style={{ color: '#000' }}>XCode</a></p>
                    <p><b>Android Simulator: </b><a href="" target="_blank" style={{ color: '#000' }}>Android Studio</a></p>
                    <p><b>Clean Up: </b> <a href="" target="_blank" style={{ color: '#000' }}>Clean My Mac X</a></p>
                    <p><b>Editor: </b><a href="" target="_blank" style={{ color: '#000' }}>IMovie</a></p>
                    <p><b>Recorder: </b> <a href="" target="_blank" style={{ color: '#000' }}>OBS Studio</a></p>
                    <p><b>Terminal: </b> <a href="" target="_blank" style={{ color: '#000' }}>Mac Terminal</a></p>
                    <p><b>Design: </b> <a href="" target="_blank" style={{ color: '#000' }}>Adobe XD</a></p>
                    <p><b>Local DB: </b> <a href="" target="_blank" style={{ color: '#000' }}>TablePlus</a></p>
                </Col>
            </Row>

        </div>
    )
}

export default Gear