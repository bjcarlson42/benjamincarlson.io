import React, { useEffect } from 'react'

const UseEffect = () => {
    const handleScroll = () => {
        console.log(scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })
    return (
        <>

        </>
    )
}

export default UseEffect