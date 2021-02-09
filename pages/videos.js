import React, { useState } from 'react'
import { NextSeo } from 'next-seo'
import NextLink from 'next/link'
import {
    Text,
    Stack,
    Flex,
    Heading,
    Link,
    Box,
    Input,
    InputGroup,
    InputRightElement,
    useColorMode
} from '@chakra-ui/react'

import { SearchIcon } from '@chakra-ui/icons'
import { getAllFilesFrontMatter } from '../lib/mdx'
import Container from '../components/Container'

const url = 'https://benjamincarlson.io/videos'
const title = 'Videos – Benjamin Carlson'
const description = 'A list of all my YouTube videos.'

export default function Videos({ vids }) {
    const [searchValue, setSearchValue] = useState('')
    const { colorMode } = useColorMode()

    const colorSecondary = {
        light: 'gray.700',
        dark: 'gray.400'
    }

    const filteredVideos = vids
        .sort(
            (a, b) =>
                Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
        )
        .filter((frontMatter) =>
            frontMatter.title.toLowerCase().includes(searchValue.toLowerCase()) || 
            frontMatter.summary.toLowerCase().includes(searchValue.toLowerCase())
        )

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
                        px={4}
                    >
                        <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
                            Videos
                        </Heading>
                        <Text color={colorSecondary[colorMode]} mb={6}>
                            Here are all of {vids.length} of my YouTube videos. Use the search bar below to filter by title or summary.
                        </Text>
                        <InputGroup mb={4} mr={4} w="100%">
                            <Input
                                aria-label="Search by title"
                                onChange={(e) => setSearchValue(e.target.value)}
                                placeholder="Search by title"
                            />
                            <InputRightElement>
                                <SearchIcon color="gray.300" />
                            </InputRightElement>
                        </InputGroup>
                        {!filteredVideos.length && 'No videos found for that search!'}
                        {filteredVideos.map((frontMatter) => (
                            <NextLink key={frontMatter.title} href={`videos/${frontMatter.slug}`} passHref>
                                <Link w="100%" _hover={{ textDecoration: 'none' }}>
                                    <Box mb={10} display="block" width="100%">
                                        <Flex
                                            width="100%"
                                            align="flex-start"
                                            justifyContent="space-between"
                                            flexDirection={['column', 'row']}
                                        >
                                            <Flex flexDirection="column" align="flex-start" justifyContent="start" width="100%">
                                                <Heading size="md" as="h3" mb={1} fontWeight="medium">
                                                    {frontMatter.title}
                                                </Heading>
                                            </Flex>
                                        </Flex>
                                        <Text color={colorSecondary[colorMode]}>{frontMatter.summary}</Text>
                                    </Box>
                                </Link>
                            </NextLink>
                        ))}
                    </Flex>
                </Stack>
            </Container>
        </>
    )
}

export async function getStaticProps() {
    const vids = await getAllFilesFrontMatter('videos')

    return { props: { vids } }
}