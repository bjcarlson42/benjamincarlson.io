import React from 'react'
import { parseISO, format } from 'date-fns'
import {
    useColorMode,
    Heading,
    Text,
    Flex,
    Stack,
    Avatar,
    Image
} from '@chakra-ui/react'
import { useRouter } from 'next/router'

import Container from '../components/Container'
import BlogSeo from '../components/blog/BlogSeo'

export default function VideoLayout({ children, frontMatter }) {
    const { colorMode } = useColorMode()
    const textColor = {
        light: 'gray.700',
        dark: 'gray.400'
    }
    const router = useRouter();
    const slug = router.asPath.replace('/videos', '');
    return (
        <Container>
            <BlogSeo url={`https://benjamincarlson.io/videos/${slug}`} {...frontMatter} />
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
                    </Flex>
                    {frontMatter.Image != '' ? <Image src={frontMatter.image} alt={frontMatter.alt} /> : null}
                </Flex>
                {children}
            </Stack>
        </Container>
    )
}