import Head from 'next/head'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import useSWR from 'swr'
import Gear from '../components/Gear'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index() {
    const { data, error } = useSWR('/api/gear', fetcher)

    if (error) return <div className="container">Failed to load</div>
    if (!data) return <div className="container">Loading...</div>

    // filter for software vs hardware
    var software = data.filter(function (g) {
        return g.software == 1;
    });

    var hardware = data.filter(function (g) {
        return g.software == 0;
    });

    return (
        <div className="container">
            <Head>
                <title>Gear | Benjamin J. Carlson</title>
            </Head>
            <h1 style={{ padding: '10px 0' }}>Gear Repository</h1>
            <p style={{ fontSize: '20px' }}>Productivity is directly associated with selecting the right software and hardware. Here is a list of all the gear I use on a day to day basis.</p>
            <p style={{ color: 'darkgrey', fontSize: '15px' }}>Disclosure: I am a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for me to earn fees by linking to Amazon.com and affiliated sites.</p>
            <Row>
                <Col md>
                    <h3 style={{ fontWeight: '300', padding: '20px 0' }}>Hardware</h3>
                    {hardware.map((g, i) => (
                        <Gear key={i} gear={g} />
                    ))}
                </Col>
                <Col md>
                    <h3 style={{ fontWeight: '300', padding: '20px 0' }}>Software</h3>
                    {software.map((g, i) => (
                        <Gear key={i} gear={g} />
                    ))}
                </Col>
            </Row>
        </div>
    )
}