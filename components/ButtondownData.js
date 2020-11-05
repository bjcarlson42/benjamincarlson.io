import React from 'react'
import useSWR from 'swr'
import fetcher from '../lib/fetcher'
import format from 'comma-number'

import StatBox from './StatBox'

export const ButtondownData = () => {
    const { data } = useSWR('/api/buttondown', fetcher)
    const count = data?.count


    return (
        <>
            <StatBox
                title={`${count ? format(count) : '–––'}`}
                desc="Email Subscribers"
                url="https://buttondown.email/benjamincarlson"
            />
        </>
    )
}

export default ButtondownData