import React from 'react'
import useSWR from 'swr'
import fetcher from '../lib/fetcher'
import dynamic from 'next/dynamic'
import '../pages/api/links'
import LinkRow from '../components/LinkRow'

const Links = () => {
    const { data, error } = useSWR('/api/links', fetcher)
    const title = data?.title
    const vid_url = data?.vid_url
    const thumbnail = data?.thumbnail
    return (
        <div>
            <LinkRow name={title} href={vid_url} img={thumbnail} />
            <LinkRow name="Connect with me on Twitter" href="https://twitter.com/benscstutorials" img="/images/twitter.png" alt="Twitter logo" />
            <LinkRow name="View my personal website" href="/" img="/images/logo.jpg" />
        </div>
    )
}

export default Links