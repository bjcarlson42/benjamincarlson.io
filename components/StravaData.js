import React from 'react'
import useSWR from 'swr'
import fetcher from '../scripts/fetcher'
import format from 'comma-number'
import StatBox from './StatBox'

export const GitHubData = () => {
    const { data } = useSWR('/api/strava', fetcher)
    const runCount = data?.count
    const distance = data?.distance
    const movingTime = data?.movingTime
    const run_increase = data?.run_increase
    const distance_increase = data?.distance_increase
    const moving_time_increase = data?.moving_time_increase

    // conversions
    const distanceConv = (distance * 0.000621371).toFixed(0) //given in meters so we need to convert to miles
    const timeConv = (movingTime * 0.0166667).toFixed(0) // given in seconds so we need to convert to minutes

    const distance_inc_conv = distanceConv - distance_increase
    const time_increase_conv = timeConv - moving_time_increase

    return (
        <>
            <StatBox
                title={`${runCount ? format(runCount) : '–––'}`}
                desc="Total Runs"
                url="https://www.strava.com/athletes/8696836"
                inc_dec={run_increase > 0 ? 'increase' : 'decrease'}
                percent={run_increase}
            />
            <StatBox
                title={`${distance ? format(distanceConv) : '–––'}`}
                desc="Total Distance (miles)"
                url="https://www.strava.com/athletes/8696836"
                inc_dec={distance_inc_conv > 0 ? 'increase' : 'decrease'}
                percent={`${distance_inc_conv ? format(distance_inc_conv) : ''}`}
            />
            <StatBox
                title={`${movingTime ? format(timeConv) : '–––'}`}
                desc="Total time (minutes)"
                url="https://www.strava.com/athletes/8696836"
                inc_dec={time_increase_conv > 0 ? 'increase' : 'decrease'}
                percent={`${time_increase_conv ? format(time_increase_conv) : ''}`}
            />
        </>
    )
}

export default GitHubData