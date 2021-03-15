import React, { useState } from 'react'
import { NextSeo } from 'next-seo'
import {
    useColorMode,
    Heading,
    Text,
    Flex,
    Stack,
    Input,
    InputGroup,
    InputRightElement
} from '@chakra-ui/react'

import Container from '../components/Container'
import BlogPost from '../components/blog/BlogPost'
import { SearchIcon } from '@chakra-ui/icons'

import { getAllFilesFrontMatter } from '../lib/mdx'

const url = 'https://benjamincarlson.io/blog'
const title = 'Blog – Benjamin Carlson'
const description = 'Personal blog for Benjamin Carlson. I write about computer science, web development, python automation, and more.'

export default function Blog({ posts }) {
    const [searchValue, setSearchValue] = useState('')
    const { colorMode } = useColorMode()
    const secondaryTextColor = {
        light: 'gray.700',
        dark: 'gray.400'
    }

    const filteredBlogPosts = posts
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
                    m="0 auto 0 auto"
                    maxWidth="700px"
                >
                    <Flex
                        flexDirection="column"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        maxWidth="700px"
                        px={4}
                        minH="100vh"
                    >
                        <Heading letterSpacing="tight" as="h1" size="2xl" mb={6}>
                            Blog ({posts.length} posts)
                        </Heading>
                        <InputGroup mb={4} mr={4} w="100%">
                            <Input
                                aria-label="Search by post title or summary"
                                onChange={(e) => setSearchValue(e.target.value)}
                                placeholder="Search by post title or summary"
                            />
                            <InputRightElement>
                                <SearchIcon color="gray.300" />
                            </InputRightElement>
                        </InputGroup>
                        {!filteredBlogPosts.length && 'No posts found.'}
                        {filteredBlogPosts.map((frontMatter) => (
                            <BlogPost key={frontMatter.title} {...frontMatter} />
                        ))}
                    </Flex>
                </Stack>
            </Container>
        </>
    )
}

export async function getStaticProps() {
    const posts = await getAllFilesFrontMatter('blog')

    return { props: { posts } }
}