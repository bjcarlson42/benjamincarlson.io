import React from 'react'
import useSWR from 'swr'
import fetcher from '../lib/fetcher'
import '../pages/api/links'
import LinkRow from '../components/LinkRow'

const Links = () => {
    const { data, error } = useSWR('/api/links', fetcher)
    const title = data?.title + ' 🎥'
    const vid_url = data?.vid_url
    return (
        <div>
            <LinkRow name={title} href={vid_url} />
            <LinkRow name="Connect with me on Twitter 🐦" href="https://twitter.com/benscstutorials" />
            <LinkRow name="View my personal website 💻" href="/" />
            <LinkRow name="Sign up for my newsletter ✍️" href="https://buttondown.email/benjamincarlson"/>
        </div>
    )
}

export default Links