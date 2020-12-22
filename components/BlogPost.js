import React from 'react'
import NextLink from 'next/link'
import { useColorMode, Heading, Text, Flex, Box, Link } from '@chakra-ui/react'
import fetcher from '../lib/fetcher'
import useSWR from 'swr'
import * as formatNum from 'comma-number'
import { parseISO, format } from 'date-fns'

const BlogPost = ({ title, summary, slug }) => {
    const { colorMode } = useColorMode()
    const secondaryTextColor = {
        light: 'gray.700',
        dark: 'gray.400'
    }

    const { data } = useSWR(`/api/page-views?id=${slug}`, fetcher)
    const views = data?.total

    return (
        <NextLink href={`blog/${slug}`} passHref>
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
                                {title}
                            </Heading>
                            {/* <Text mb={2} fontStyle="italic">Published on {format(parseISO(publishedAt), 'MMMM dd, yyyy')}</Text> */}
                        </Flex>

                        <Text
                            color="gray.500"
                            minWidth="105px"
                            textAlign={['left', 'right']}
                            mb={[4, 0]}
                        >
                            {`${views ? formatNum(views) : '–––'} views`}
                        </Text>

                    </Flex>
                    <Text color={secondaryTextColor[colorMode]}>{summary}</Text>
                </Box>
            </Link>
        </NextLink>
    )
}

export default BlogPost