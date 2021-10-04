import fs from 'fs'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import path from 'path'
import BlogLayout from '../../layouts/blog'
import { blogPostsFilePaths, BLOG_POSTS_PATH } from '../../scripts/mdx'
import MDXComponents from '../../components/MDXComponents'
import mdxPrism from 'mdx-prism'
import readingTime from 'reading-time'
import {
    Text,
    Link,
    Flex,
    useColorMode,
    Avatar,
    Button,
    Badge,
    Divider,
    useToast,
    Heading,
} from '@chakra-ui/react'
import { motion } from "framer-motion"

export default function BlogPost({ source, frontMatter }) {
    // const { title, date, description, tags, image } = frontMatter

    return (
        <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: .7, delay: .4 }}
        >
            <BlogLayout frontMatter={frontMatter}>
                <MDXRemote {...source} components={MDXComponents} />
            </BlogLayout>
        </motion.div>
    )
}

export const getStaticProps = async ({ params }) => {
    const blogPath = path.join(BLOG_POSTS_PATH, `${params.slug}.mdx`)
    const source = fs.readFileSync(blogPath)
    const { content, data } = matter(source)

    const mdxSource = await serialize(content, {
        MDXComponents,
        mdxOptions: {
            remarkPlugins: [
                require('remark-code-titles'),
                require('remark-autolink-headings')
            ],
            rehypePlugins: [mdxPrism],
        },
        scope: data,
    })

    return {
        props: {
            source: mdxSource,
            frontMatter: {
                readingTime: readingTime(content),
                ...data
            },
        },
    }
}

export const getStaticPaths = async () => {
    const paths = blogPostsFilePaths
        // Remove file extensions for page paths
        .map((path) => path.replace(/\.mdx?$/, ''))
        // Map the path into the static paths object required by Next.js
        .map((slug) => ({ params: { slug } }))

    return {
        paths,
        fallback: false,
    }
}