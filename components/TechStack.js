import React from 'react'
import {
    Heading,
    Text,
    Table,
    Thead,
    Tr,
    Th,
    Td,
    Tbody,
    Link,
    useColorMode,
    Box,
    Code,
} from '@chakra-ui/react'

const TechStack = () => {
    const { colorMode } = useColorMode()

    const colorSecondary = {
        light: 'gray.600',
        dark: 'gray.400'
    }

    const linkColor = {
        light: 'blue.400',
        dark: 'blue.600'
    }

    return (
        <Box as="section" w="100%" mt={10} mb={20}>
            <Heading letterSpacing="tight" size="lg" fontWeight={700} as="h2" mb={4}>
                Tech Stack ⚙️
            </Heading>
            <Text color={colorSecondary[colorMode]} mb={4}>Each piece of technology used in this website is carefully thought out. I believe this is one of the best stacks there is to build websites of any size and domain.</Text>
            <Box flexDir="column" overflowX="auto">
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th>Type</Th>
                            <Th>Name</Th>
                            <Th>Route</Th>
                            <Th>Description</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>JS Framework</Td>
                            <Td><Link href="https://nextjs.org" color={linkColor[colorMode]} isExternal>Next JS</Link></Td>
                            <Td>n/a</Td>
                            <Td>Next.js was an easy choice given its large community and ability for rapid development.</Td>
                        </Tr>
                        <Tr>
                            <Td>CSS Framework</Td>
                            <Td><Link href="https://chakra-ui.com" color={linkColor[colorMode]} isExternal>Chakra UI</Link></Td>
                            <Td>n/a</Td>
                            <Td>I use Chakra UI because its components make a beautiful UI out of the box and are highly customizable.</Td>
                        </Tr>
                        <Tr>
                            <Td>Blog</Td>
                            <Td><Code>next-mdx-remote</Code></Td>
                            <Td>/blog/[slug].js</Td>
                            <Td>I use <Link href="https://github.com/hashicorp/next-mdx-remote" color={linkColor[colorMode]} isExternal>next-mdx-remote</Link> for my blog. Posts are stored in <Code>mdx</Code> files and pre-rendered.</Td>
                        </Tr>
                        <Tr>
                            <Td>Real-Time Statistics</Td>
                            <Td>Next.js api routes</Td>
                            <Td>/api/[].js</Td>
                            <Td>Multiple api routes that interact with the GitHub, YouTube, and Strava api to fetch my real-time social media data using Next.JS <Link href="https://nextjs.org/docs/api-routes/introduction" color={linkColor[colorMode]} isExternal>serverless functions</Link>.</Td>
                        </Tr>
                        <Tr>
                            <Td>Realtime Blog Post View/Like Count</Td>
                            <Td>Firebase Realtime Db</Td>
                            <Td>/api</Td>
                            <Td>I use <Link href="https://firebase.google.com" color={linkColor[colorMode]} isExternal>Google's Firebase</Link> to store view and like counts for my blog posts.</Td>
                        </Tr>
                        <Tr>
                            <Td>Deployment</Td>
                            <Td>Vercel</Td>
                            <Td>n/a</Td>
                            <Td>I use <Link href="https://vercel.com" color={linkColor[colorMode]} isExternal>Vercel</Link> to deploy my app. It's free, fast, integrates with GitHub, and overall a great experience.</Td>
                        </Tr>
                        <Tr>
                            <Td>Domain</Td>
                            <Td>Namecheap</Td>
                            <Td>n/a</Td>
                            <Td>My domain name is bought and stored through <Link color="blue.500" href="https://www.namecheap.com/" isExternal>Namecheap</Link>.</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </Box>
        </Box>
    )
}

export default TechStack