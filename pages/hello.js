import React from 'react'
import { NextSeo } from 'next-seo'
import {
    Stack,
    Flex,
    Heading,
    Avatar,
    Text
} from '@chakra-ui/react'
import useSWR from 'swr'
import fetcher from '../lib/fetcher'

import SocialLink from '../components/SocialLink'
import Container from '../components/Container'
import { TwitterIcon, YoutubeIcon, GitHubIcon, MailIcon, CodeIcon } from '../components/CustomIcons'

const url = 'https://benjamincarlson.io/hello'
const titleSEO = 'Hello – Benjamin Carlson'
const description = 'I am a developer and creator. Here are some of my links.'

const Hello = () => {

    const { data } = useSWR('/api/links', fetcher)
    const title = data?.title
    const vid_url = data?.vid_url

    return (
        <>
            <NextSeo
                title={titleSEO}
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
                        width={['100%', '500px', '700px']}
                    >
                        <Avatar
                            size='2xl'
                            name="Benjamin Carlson"
                            src="../images/portrait.jpeg"
                            mr={2}
                            alignSelf="center"
                            my={5}
                        />
                        <Heading letterSpacing="tight" mb={4} as="h1" size="xl" alignSelf="center">
                            Hello 👋, I'm Ben
                        </Heading>
                        <Text alignSelf="center" textAlign="center" mb={4}>I’m a developer, writer, creator, and student. Use the links below to learn more.</Text>
                        <SocialLink name={title} href={vid_url} icon={YoutubeIcon} />
                        <SocialLink name="Check Out My Website!" href="/" icon={CodeIcon} />
                        <SocialLink name="View My Opensource Code!" href="https://github.com/bjcarlson42?tab=repositories" icon={GitHubIcon} />
                        <SocialLink name="Subscribe to my newsletter" href="https://buttondown.email/benjamincarlson" icon={MailIcon} />
                        <SocialLink name="Sponsor me on GitHub!" href="https://github.com/sponsors/bjcarlson42" icon={GitHubIcon} />
                        <SocialLink name="Subscribe To My YouTube Channel!" href="https://www.youtube.com/channel/UCLMdmCCRFGWt7rktx6tMErw?sub_confirmation=1" icon={YoutubeIcon} />
                        <SocialLink name="Follow Me On Twitter!" href="https://twitter.com/bjmncrlsn" icon={TwitterIcon} />
                    </Flex>
                </Stack>
            </Container>
        </>
    )
}

export default Hello
