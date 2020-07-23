import React from 'react'
import useSWR from 'swr'
import fetcher from '../../lib/fetcher'
import '../../pages/api/youtube'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CountUp from 'react-countup'

const YouTubeSection = () => {
    const { data, error } = useSWR('/api/youtube', fetcher)
    const subscriberCount = data?.subscriberCount
    const viewCount = data?.viewCount
    const videoCount = data?.videoCount

    if (error || !data) return (<div></div>)

    return (
        <section id='youtube-section'>
            <div className='container'>
                <h2 className='h2-padding center'>YouTube</h2>
                <p className='center' style={{ color: '#fff' }}>I started a <a href="https://youtube.com/benjamincarlson" target="_blank" className="animate-underline">YouTube channel</a> to teach others how to code and to document my programming journey. Here are some of my stats.</p>
                <Row style={{ textAlign: 'center', color: '#fff' }}>
                    <Col lg>
                        <span className="odometer-num"><CountUp start={0} end={subscriberCount} duration={1.5} /></span>
                        <h6>Subscribers</h6>
                    </Col>
                    <Col lg>
                        <span className="odometer-num"><CountUp start={0} end={viewCount} duration={1.5} /></span>
                        <h6>Views</h6>
                    </Col>
                    <Col lg>
                        <span className="odometer-num"><CountUp start={0} end={videoCount} duration={1.5} /></span>
                        <h6>Videos</h6>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default YouTubeSection