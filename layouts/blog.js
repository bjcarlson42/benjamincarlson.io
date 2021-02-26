import React from 'react'
import { parseISO, format } from 'date-fns'
import {
    useColorMode,
    Heading,
    Text,
    Flex,
    Stack,
    Avatar,
    Link,
    Box,
    Image,
    Icon
} from '@chakra-ui/react'
import { TwitterIcon, GitHubIcon } from '../components/CustomIcons'
import { useRouter } from 'next/router'

import Container from '../components/Container'
import ViewCounter from '../components/ViewCounter'
import LikeCounter from '../components/LikeCounter'
import BlogSeo from '../components/BlogSeo'
import Subscribe from '../components/Subscribe'
import GitHubSponsorCard from '../components/GitHubSponsorCard'
import Flutter25 from '../components/Flutter25'

const editUrl = (slug) =>
    `https://github.com/bjcarlson42/benjamincarlson.io/edit/master/pages/blog/${slug}.mdx`
const tweetUrl = (slug) =>
    `https://twitter.com/intent/tweet?text=https://benjamincarlson.io/blog/${slug} by @bjmncrlsn`

export default function BlogLayout({ children, frontMatter }) {
    const { colorMode } = useColorMode()
    const textColor = {
        light: 'gray.700',
        dark: 'gray.400'
    }
    const commentsTheme = {
        light: 'github-light',
        dark: 'github-dark'
    }
    const router = useRouter();
    const slug = router.asPath.replace('/blog', '')
    return (
        <Container>
            <BlogSeo url={`https://benjamincarlson.io/blog/${slug}`} {...frontMatter} />
            <Stack
                as="article"
                spacing={8}
                justifyContent="center"
                alignItems="flex-start"
                m="0 auto 4rem auto"
                maxWidth="700px"
                w="100%"
                px={2}
            >
                <Flex
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    maxWidth="700px"
                    w="100%"
                >
                    <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
                        {frontMatter.title}
                    </Heading>
                    <Flex
                        justify="space-between"
                        align={['initial', 'center']}
                        direction={['column', 'row']}
                        mt={2}
                        w="100%"
                        mb={4}
                    >
                        <Flex align="center">
                            <Avatar
                                size="xs"
                                name="Benjamin Carlson"
                                src="../images/portrait.jpeg"
                                mr={2}
                            />
                            <Text fontSize="sm" color={textColor[colorMode]}>
                                {frontMatter.by}
                                {'Benjamin Carlson / '}
                                {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
                            </Text>
                        </Flex>
                        <Text fontSize="sm" color="gray.500" minWidth="100px" mt={[2, 0]}>
                            {frontMatter.readingTime.text}
                            {` • `}
                            <ViewCounter id={slug} />
                            {` • `}
                            <LikeCounter id={slug} />
                        </Text>
                    </Flex>
                    {frontMatter.Image != '' ? <Image src={frontMatter.image} alt={frontMatter.alt} /> : null}
                </Flex>
                {children}
                <Box>
                    <Link href={tweetUrl(slug)} isExternal>
                        <Icon as={TwitterIcon} size="18px" mr={2} />
                        {'Share on Twitter'}
                    </Link>
                    {` • `}
                    <Link href={editUrl(slug)} isExternal>
                        <Icon as={GitHubIcon} size="18px" mr={2} />
                        {'Edit on GitHub'}
                    </Link>
                </Box>
                <Flutter25 />
                <Subscribe />
                <GitHubSponsorCard />
                <script
                    src="https://utteranc.es/client.js"
                    repo="bjcarlson42/comments-benjamincarlson.io"
                    issue-term="pathname"
                    theme={commentsTheme[colorMode]}
                    crossorigin="anonymous"
                    async>
                </script>
            </Stack>
        </Container>
    )
}