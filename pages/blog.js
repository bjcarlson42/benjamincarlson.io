import React, { useState } from 'react'
import { NextSeo } from 'next-seo'
import {
    Heading,
    Flex,
    Stack,
    Input,
    InputGroup,
    InputRightElement
} from '@chakra-ui/react'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { blogPostsFilePaths, BLOG_POSTS_PATH } from '../scripts/mdx'
import Container from '../components/Container'
import BlogPost from '../components/blog/BlogPost'
import { SearchIcon } from '@chakra-ui/icons'
import { motion } from "framer-motion"

const url = 'https://benjamincarlson.io/blog'
const title = 'Blog – Benjamin Carlson'
const description = 'Personal blog for Benjamin Carlson. I write about computer science, web development, python automation, and more.'

export default function Blog({ posts }) {
    const [searchValue, setSearchValue] = useState('')

    const filteredBlogPosts = posts
        .sort(
            (a, b) =>
                Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
        )
    // .filter((frontMatter) =>
    //     frontMatter?.title?.toLowerCase()?.includes(searchValue?.toLowerCase()) ||
    //     frontMatter?.summary?.toLowerCase()?.includes(searchValue?.toLowerCase())
    // )

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
                    maxWidth="1000px"
                >
                    <Flex
                        flexDirection="column"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        maxWidth="1000px"
                        px={4}
                        minH="100vh"
                    >
                        <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: .7, delay: .4 }}
                        >
                            <Heading letterSpacing="tight" as="h1" size="2xl" my={4}>
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
                            {filteredBlogPosts.map((frontMatter, index) => (
                                <BlogPost
                                    key={frontMatter.data.title}
                                    href={posts[index].filePath.replace(/\.mdx?$/, '')}
                                    {...frontMatter.data}
                                />
                            ))}
                        </motion.div>
                    </Flex>
                </Stack>
            </Container>
        </>
    )
}

export function getStaticProps() {
    const posts = blogPostsFilePaths.map((filePath) => {
        const source = fs.readFileSync(path.join(BLOG_POSTS_PATH, filePath))
        const { content, data } = matter(source)

        return {
            content,
            data,
            filePath,
        }
    })

    return { props: { posts } }
}