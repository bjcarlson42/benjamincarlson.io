import React from 'react'
import useSWR from 'swr'
import fetcher from '../lib/fetcher'
import format from 'comma-number'

import StatBox from './StatBox'

export const YouTubeData = () => {
    const { data } = useSWR('/api/youtube', fetcher)
    const subscriberCount = data?.subscriberCount
    const viewCount = data?.viewCount
    const videoCount = data?.videoCount
    return (
        <>
            <StatBox
                title={`${subscriberCount ? format(subscriberCount) : '–––'}`}
                desc="YouTube Subscribers"
                url="https://youtube.com/benjamincarlson"
            />
            <StatBox
                title={`${viewCount ? format(viewCount) : '–––'}`}
                desc="YouTube Views"
                url="https://youtube.com/benjamincarlson"
            />
            <StatBox
                title={`${videoCount ? format(videoCount) : '–––'}`}
                desc="YouTube Videos"
                url="https://youtube.com/benjamincarlson"
            />
        </>
    )
}

export default YouTubeData