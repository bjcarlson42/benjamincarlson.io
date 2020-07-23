import React from 'react'
import useSWR from 'swr'
import fetcher from '../lib/fetcher'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Gear from '../components/Gear'

const GearAll = () => {
    const { data, error } = useSWR('/api/gear', fetcher)

    if (error) return <div className="container main center" style={{ marginTop: '200px' }}>Failed to load gear</div>
    if (!data) return <div className="container main center" style={{ marginTop: '200px' }}>Loading...</div>

    var software = data.filter(function (g) {
        return g.software == 1;
    });

    var hardware = data.filter(function (g) {
        return g.software == 0;
    });

    return (
        <section>
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
        </section>
    )
}

export default GearAll;