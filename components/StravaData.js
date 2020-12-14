import React from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import useSWR from 'swr'
import fetcher from '../lib/fetcher'
import format from 'comma-number'

import StatBox from './StatBox'

export const GitHubData = () => {
    const { data } = useSWR('/api/strava', fetcher)
    const runCount = data?.count
    const distance = data?.distance
    const movingTime = data?.movingTime

    // conversions
    const timeConv = (movingTime * 0.0166667).toFixed(0) // given in seconds so we need to convert to minutes
    const distanceConv = (distance * 0.000621371).toFixed(0) //given in meters so we need to convert to miles
    return (
        <>
            <StatBox
                title={`${runCount ? format(runCount) : '–––'}`}
                desc="Total Runs"
                url="https://www.strava.com/athletes/8696836"
            />
            <StatBox
                title={`${distance ? format(distanceConv) : '–––'}`}
                desc="Total Distance (miles)"
                url="https://www.strava.com/athletes/8696836"
            />
            <StatBox
                title={`${movingTime ? format(timeConv) : '–––'}`}
                desc="Total time (minutes)"
                url="https://www.strava.com/athletes/8696836"
            />
        </>
    )
}

export default GitHubData