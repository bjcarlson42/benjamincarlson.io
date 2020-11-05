import React from 'react'
import {
    Heading,
    Flex,
    Button,
    Link
} from '@chakra-ui/core'

import BlogPost from '../components/BlogPost'
import NextLink from 'next/link'

import { frontMatter as TikTok } from '../pages/blog/tik-tok-coding-idea.mdx'
import { frontMatter as FlutterToFirebase } from '../pages/blog/connect-flutter-to-firebase.mdx'
import { frontMatter as JavaScriptCube } from '../pages/blog/using-javascript-to-scramble-a-rubiks-cube-1.mdx'

const TopBlogPosts = () => {
    return (
        <>
            <Heading mt={8} mb={4} as="h2" size="xl">
                Top Blog Posts
                </Heading>
            <BlogPost {...TikTok} />
            <BlogPost {...FlutterToFirebase} />
            <BlogPost {...JavaScriptCube} />
            <Flex justify="center" width="100%">
                <NextLink href="/blog" passHref>
                    <Link _hover="none">
                        <Button rightIcon="arrow-forward" variantColor="blue" variant="outline">
                            View All Posts
                        </Button>
                    </Link>
                </NextLink>
            </Flex>
        </>
    )
}

export default TopBlogPosts