import { NextSeo } from 'next-seo'
import {
    Heading,
    Flex,
    SimpleGrid,
    Text,
    useColorMode,
} from '@chakra-ui/react'
import Container from '../components/Container'
import YouTubeData from '../components/YouTubeData'
import GitHubData from '../components/GitHubData'
import StravaData from '../components/StravaData'
import { motion } from "framer-motion"

const url = 'https://benjamincarlson.io/statistics'
const title = 'Statistics – Benjamin Carlson'
const description = 'My personal dashboard. I use it to keep track of various stats such as YouTube, GitHub, Strava and more.'

const Statistics = () => {
    const { colorMode } = useColorMode()

    const colorSecondary = {
        light: 'gray.600',
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
                <Flex
                    flexDirection="column"
                    maxWidth="1000px"
                    alignSelf={[null, "center"]}
                >
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: .7, delay: .4 }}
                    >
                        <Heading letterSpacing="tight" my={4} as="h1" size="2xl">
                            Statistics
                        </Heading>
                        <Text color={colorSecondary[colorMode]} mb={6}>A simple dashboard containing various statistics. The data is fetched in realtime via Next.js api routes from various api's. Build your own by following along with this video.</Text>
                        <SimpleGrid minChildWidth="300px" spacing="20px">
                            <YouTubeData />
                            <GitHubData />
                            <StravaData />
                        </SimpleGrid>
                    </motion.div>
                </Flex>
            </Container>
        </>
    )
}

export default Statistics