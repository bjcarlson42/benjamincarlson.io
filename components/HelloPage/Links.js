import React from 'react'
import useSWR from 'swr'
import fetcher from '../../lib/fetcher'
import '../../pages/api/links'
import LinkRow from '../HelloPage/LinkRow'

const Links = () => {
    const { data, error } = useSWR('/api/links', fetcher)
    if (error) {
        console.log(error)
        return (
            <div>
                <LinkRow name="Subscribe to my YouTube! 🎥" href="https://youtube.com/benjamincarlson" />
                <LinkRow name="View my personal website 💻" href="/" />
                <LinkRow name="Sign up for my newsletter ✍️" href="https://buttondown.email/benjamincarlson" />
                <LinkRow name="Watch me code this page! 👨‍💻" href="https://youtu.be/h5BoLFESTcQ" />
            </div>
        )
    }
    if (!data) {
        return (
            <div>
                <LinkRow name="View my personal website 💻" href="/" />
                <LinkRow name="Sign up for my newsletter ✍️" href="https://buttondown.email/benjamincarlson" />
                <LinkRow name="Watch me code this page! 👨‍💻" href="https://youtu.be/h5BoLFESTcQ" />
            </div>
        )
    }
    const title = data?.title + ' 🎥'
    const vid_url = data?.vid_url
    return (
        <div>
            <LinkRow name={title} href={vid_url} />
            <LinkRow name="View my personal website 💻" href="/" />
            <LinkRow name="Sign up for my newsletter ✍️" href="https://buttondown.email/benjamincarlson" />
            <LinkRow name="Watch me code this page! 👨‍💻" href="https://youtu.be/h5BoLFESTcQ" />
        </div>
    )
}

export default Links