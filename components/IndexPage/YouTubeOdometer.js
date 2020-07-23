import React from 'react'
import useSWR from 'swr'
import fetcher from '../../lib/fetcher'
import '../../pages/api/youtube'
import CountUp from 'react-countup'

const YouTubeOdometer = () => {
    const { data, error } = useSWR('/api/youtube', fetcher)

    if (error || !data) return (<div></div>)

    const subscriberCount = data?.subscriberCount
    const viewCount = data?.viewCount
    const videoCount = data?.videoCount
    return (
        <div>
            <span><CountUp end={subscriberCount} duration={1.5} /> subscribers</span>
            <span>&nbsp;|&nbsp;</span>
            <span><CountUp end={viewCount} duration={1.5} /> views</span>
            <span>&nbsp;|&nbsp;</span>
            <span><CountUp end={videoCount} duration={1.5} /> videos</span>
        </div>
    )
}

export default YouTubeOdometer