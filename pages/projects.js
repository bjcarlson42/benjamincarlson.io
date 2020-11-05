import React from 'react'
import { NextSeo } from 'next-seo'
import {
    Link,
    Text,
    Stack,
    Flex,
    Heading,
    useColorMode,
    Code
} from '@chakra-ui/core'

import Container from '../components/Container'
import ProjectListFull from '../components/ProjectListFull'
import FeaturedProjectCard from '../components/FeaturedProjectCard'
import GitHubSponsorCard from '../components/GitHubSponsorCard'

const url = 'https://benjamincarlson.io/projects'
const title = 'Projects – Benjamin Carlson'
const description = 'Here are some of the open source projects and GitHub repos I am working on.'

const Projects = () => {
    const { colorMode } = useColorMode()

    const colorSecondary = {
        light: 'gray.700',
        dark: 'gray.400'
    }

    const iconColor = {
        light: 'gray.600',
        dark: 'gray.300'
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
                            Projects
                        </Heading>
                        <Text color={colorSecondary[colorMode]}>Between school, work, youtube, and individual curiosity, I have worked on many projects over the years. Below you will find
                        all of them. Clicking on the project card will bring you to the GitHub repo. If you enjoy or use any of these projects, please <Link href="https://github.com/sponsors/bjcarlson42" isExternal color="blue.500">consider sponsoring me</Link> on GitHub!
                        </Text>
                        <Heading letterSpacing="tight" mt={4} size="xl" fontWeight={700}>
                            Featured Projects
                        </Heading>
                        <FeaturedProjectCard
                            title="Word Of The Day App"
                            href="https://github.com/bjcarlson42/wotd"
                            icon="wotd"
                            color={iconColor[colorMode]}
                            size="50px"
                        >
                            Word of the day app built with <Code>Dart</Code>, <Code>Flutter</Code>, and Wordnik API. Video tutorial posted on YouTube.
                        </ FeaturedProjectCard>
                        <FeaturedProjectCard
                            title="Personal Website"
                            href="https://github.com/bjcarlson42/benjamincarlson.io"
                            icon="code"
                            color={iconColor[colorMode]}
                            size="50px"
                        >
                            My personal portfolio website you are on now. Built with <Code>Next.js</Code>, <Code>chakra-ui</Code>, <Code>mdx</Code> pages, and serverless functions for realtime data.
                        </FeaturedProjectCard>
                        <GitHubSponsorCard />
                        <Heading letterSpacing="tight" mb={2} mt={4} size="xl" fontWeight={700}>
                            All Projects
                        </Heading>
                        <ProjectListFull />
                    </Flex>
                </Stack>
            </Container>
        </>
    )
}

export default Projects