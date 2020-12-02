import React from 'react'
import { NextSeo } from 'next-seo'
import {
    useColorMode,
    Heading,
    Text,
    Flex,
    Stack,
    Link
} from '@chakra-ui/react'

import Container from '../components/Container'
import TimeLineFull from '../components/TimeLineFull'

const url = 'https://benjamincarlson.io/about'
const title = 'About – Benjamin Carlson'
const description = 'See where I\'ve been and where I\'m heading'


const About = () => {
    const { colorMode } = useColorMode()

    const colorSecondary = {
        light: 'gray.700',
        dark: 'gray.400'
    }

    return (
        <>
            <NextSeo
                title={title}
                description={description}
                canonical={url}
                openGraph={{
                    url,
                    title,
                    description
                }}
            />
            <Container>
                <Stack
                    as="main"
                    spacing={8}
                    justifyContent="center"
                    alignItems="flex-start"
                    m="0 auto 4rem auto"
                    maxWidth="700px"
                >
                    <Flex
                        flexDirection="column"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        maxWidth="700px"
                        px={2}
                    >
                        <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
                            About
                        </Heading>
                        <Text color={colorSecondary[colorMode]}>
                            I’m a developer, writer, and creator. I go to <Link href="https://www2.ccsu.edu/" color="blue.500" isExternal>CCSU</Link> where I study
                            computer science, cybersecurity, and mathematics. Here's a timeline of my life!
                        </Text>
                        <Heading letterSpacing="tight" mt={8} mb={2} size="xl" fontWeight={700}>
                            Timeline
                        </Heading>
                        <TimeLineFull />
                    </Flex>
                </Stack>
            </Container>
        </>
    )
}

export default About