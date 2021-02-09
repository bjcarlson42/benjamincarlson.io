import hydrate from 'next-mdx-remote/hydrate'
import { getFiles, getFileBySlug } from '../../lib/mdx'
import VideoLayout from '../../layouts/video'
import MDXComponents from '../../components/MDXComponents'

export default function Videos({ mdxSource, frontMatter }) {
    const content = hydrate(mdxSource, {
        components: MDXComponents
    })

    return <VideoLayout frontMatter={frontMatter}>{content}</VideoLayout>
}

export async function getStaticPaths() {
    const posts = await getFiles('videos')

    return {
        paths: posts.map((p) => ({
            params: {
                slug: p.replace(/\.mdx/, '')
            }
        })),
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const post = await getFileBySlug('videos', params.slug);

    return { props: post }
}