import React from 'react'
import { NextSeo } from 'next-seo'
import {
    useColorMode,
    Heading,
    Text,
    Flex,
    Stack,
    List,
    ListItem,
    ListIcon,
    Link
} from '@chakra-ui/core'

import Container from '../components/Container'

const url = 'https://benjamincarlson.io/thanks'
const title = 'Thanks – Benjamin Carlson'
const description = 'These are the individuals who have helped me with ideas for this site.'


const Thanks = () => {
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
                            Thanks
                        </Heading>
                        <Text color={colorSecondary[colorMode]} mb={4}>
                            Most of this site was coded and designed by myself, but I definitely had some external help! As an advocate for 
                            open source software, I would like to credit any individual whose code or design I borrowered to make this site.
                            Below are the names and links to those individuals GitHubs or websites.
                        </Text>
                        <List spacing={3}>
                            <ListItem>
                                <ListIcon icon="star" color="yellow.300" />
                                <Link isExternal href="https://github.com/leerob" color="blue.500">Lee Robinson</Link>
                            </ListItem>
                            <ListItem>
                                <ListIcon icon="star" color="yellow.300" />
                                <Link isExternal href="https://github.com/DevonCrawford?tab=overview&from=2020-10-01&to=2020-10-29" color="blue.500">Devon Crawford</Link>
                            </ListItem>
                            <ListItem>
                                <ListIcon icon="star" color="yellow.300" />
                                <Link isExternal href="https://www.cbshin.com/" color="blue.500">Charles Shin</Link>
                            </ListItem>
                        </List>
                    </Flex>
                </Stack>
            </Container>
        </>
    )
}

export default Thanks