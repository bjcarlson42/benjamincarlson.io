import React from 'react'
import useSWR from 'swr'
import fetcher from '../lib/fetcher'
import format from 'comma-number'

import StatBox from './StatBox'

export const GitHubData = () => {
    const { data } = useSWR('/api/github', fetcher)
    const followerCount = data?.numFollwers
    const projectCount = data?.numProjects
    const starCount = data?.starsCount
    return (
        <>
            <StatBox
                title={`${followerCount ? format(followerCount) : '–––'}`}
                desc="GitHub Followers"
                url="https://github.com/bjcarlson42"
            />
            <StatBox
                title={`${projectCount ? format(projectCount) : '–––'}`}
                desc="GitHub Repos"
                url="https://github.com/bjcarlson42"
            />
            <StatBox
                title={`${starCount ? format(starCount) : '–––'}`}
                desc="GitHub Stars"
                url="https://github.com/bjcarlson42"
            />
        </>
    )
}

export default GitHubData