import React from 'react'
import useSWR from 'swr'
import fetcher from '../lib/fetcher'

import {
    CircularProgress,
    useColorMode,
    Heading,
    Text,
    Link
} from "@chakra-ui/react"

const Gear = ({ gear }) => {
    const { colorMode } = useColorMode()

    const color = {
        light: 'black',
        dark: 'white'
    }

    const colorSecondary = {
        light: 'gray.700',
        dark: 'gray.400'
    }
    return (
        <div>
            <Text mb={1}><b>{gear.item}:</b> <Link color={colorSecondary[colorMode]} href={gear.url} isExternal>{gear.title}</Link></Text>
        </div>
    )
}

const GearList = () => {
    const { data, error } = useSWR('/api/gear', fetcher)
    const { colorMode } = useColorMode()

    const color = {
        light: 'black',
        dark: 'white'
    }

    const colorSecondary = {
        light: 'gray.700',
        dark: 'gray.400'
    }

    if (error) return <div>Error loading gear!</div>
    if (!data) return <CircularProgress isIndeterminate color={color[colorMode]}></CircularProgress>

    var software = data.filter(function (g) {
        return g.software == 1
    })

    var hardware = data.filter(function (g) {
        return g.software == 0
    })

    var cameraGear = data.filter(function (g) {
        return g.software == 2
    })

    return (
        <>
            <Heading letterSpacing="tight" mb={2} mt={2} as="h2" size="xl">
                Hardware
            </Heading>
            {hardware.map((g, i) => (
                <Gear key={i} gear={g} />
            ))}
            <Heading letterSpacing="tight" mb={2} mt={4} as="h2" size="xl">
                Software
            </Heading>
            {software.map((g, i) => (
                <Gear key={i} gear={g} />
            ))}
            <Heading letterSpacing="tight" mb={2} mt={4} as="h2" size="xl">
                Camera Gear
            </Heading>
            {cameraGear.map((g, i) => (
                <Gear key={i} gear={g} />
            ))}
        </>
    )
}

export default GearList