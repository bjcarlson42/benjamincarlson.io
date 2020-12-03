import React from 'react'
import { NextSeo } from 'next-seo'
import {
    useColorMode,
    Heading,
    Text,
    Flex,
    Stack,
    Link,
    SimpleGrid
} from '@chakra-ui/react'

import Container from '../components/Container'
import YouTubeData from '../components/YouTubeData'
import GitHubData from '../components/GitHubData'
import StravaData from '../components/StravaData'
import ButtondownData from '../components/ButtondownData'

const url = 'https://benjamincarlson.io/statistics'
const title = 'Statistics – Benjamin Carlson'
const description = 'My personal dashboard. I use it to keep track of various stats such as YouTube, GitHub, Strava and more.'

const Statistics = () => {
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
                    px={2}
                >
                    <Flex
                        flexDirection="column"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        maxWidth="700px"
                    >
                        <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
                            Statistics
                        </Heading>
                        <Text color={colorSecondary[colorMode]}>
                            My personal dashboard with various metrics from services I use.
                        I use this dashboard to track my progress and growth! Stats are fetched realtime via <Link
                                href="https://nextjs.org/docs/api-routes/introduction"
                                isExternal
                                color="blue.500"
                            >
                                serverless functions
                        </Link>.
                        Watch <Link
                                href="https://youtu.be/jVc8qVq0NR8"
                                isExternal
                                color="blue.500"
                            >this video</Link> to create
                        your own dashboard.
                    </Text>
                    </Flex>
                    <Flex
                        flexDirection="column"
                        justifyContent="space-start"
                        alignItems="flex-start"
                        maxWidth="700px"
                    >
                        <SimpleGrid columns={[1, 2, 3]} spacing="20px">
                            <YouTubeData />
                            <GitHubData />
                            <StravaData />
                            <ButtondownData />
                        </SimpleGrid>
                    </Flex>
                </Stack>
            </Container>
        </>
    )
}

export default Statistics