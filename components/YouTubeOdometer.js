import React from 'react'
import useSWR from 'swr'
import fetcher from '../lib/fetcher'
import dynamic from 'next/dynamic'
import '../pages/api/youtube'

const YouTubeOdometer = () => {
    const { data, error } = useSWR('/api/youtube', fetcher)
    const subscriberCount = data?.subscriberCount
    const viewCount = data?.viewCount
    const videoCount = data?.videoCount
    const Odometer = dynamic(import('react-odometerjs'), {
        ssr: false,
        loading: () => 0
    })
    return (
        <div>
            <span><Odometer format="(,ddd)" duration={1000} value={subscriberCount} /> subscribers</span>
            <span>&nbsp;|&nbsp;</span>
            <span><Odometer format="(,ddd)" duration={1000} value={viewCount} /> views</span>
            <span>&nbsp;|&nbsp;</span>
            <span><Odometer format="(,ddd)" duration={1000} value={videoCount} /> videos</span>
        </div>
    )
}

export default YouTubeOdometer