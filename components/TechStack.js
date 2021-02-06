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
    useColorMode
} from '@chakra-ui/react'

const TechStack = () => {
    const { colorMode } = useColorMode()

    const colorSecondary = {
        light: 'gray.700',
        dark: 'gray.400'
    }
    return (
        <>
            <Heading letterSpacing="tight" mt={8} mb={2} size="lg" fontWeight={700} as="h2">
                Tech Stack
            </Heading>
            <Text color={colorSecondary[colorMode]} mb={4}>This websites tech stack.</Text>
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Route</Th>
                        <Th>Description</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td><Link href="https://nextjs.org" color="blue.500" isExternal>Next JS</Link></Td>
                        <Td>n/a</Td>
                        <Td>My JS framework for this website.</Td>
                    </Tr>
                    <Tr>
                        <Td><Link href="https://chakra-ui.com" color="blue.500" isExternal>Chakra UI</Link></Td>
                        <Td>n/a</Td>
                        <Td>My CSS framework for this website.</Td>
                    </Tr>
                    <Tr>
                        <Td>Blog</Td>
                        <Td>/blog/[slug].js</Td>
                        <Td>I use <Link href="https://github.com/hashicorp/next-mdx-remote" color="blue.500" isExternal>next-mdx-remote</Link> pages for my blog posts.</Td>
                    </Tr>
                    <Tr>
                        <Td>Real-Time Statistics</Td>
                        <Td>/api/[].js</Td>
                        <Td>Multiple api routes that fetch my real-time social media data using Next.JS <Link href="https://nextjs.org/docs/api-routes/introduction" color="blue.500" isExternal>serverless functions</Link>.</Td>
                    </Tr>
                    <Tr>
                        <Td>Firebase DB View/Like Count</Td>
                        <Td>/api</Td>
                        <Td>I use <Link href="https://firebase.google.com" color="blue.500" isExternal>Google's Firebase</Link> to store view and like counts for my blog posts.</Td>
                    </Tr>
                    <Tr>
                        <Td>Vercel</Td>
                        <Td>n/a</Td>
                        <Td>I use <Link href="https://vercel.com" color="blue.500" isExternal>Vercel</Link> to deploy my app.</Td>
                    </Tr>
                    {/* <Tr>
                        <Td>Tutorials</Td>
                        <Td>tutorials.benjamincarlson.io</Td>
                        <Td>My sub domain where I create programming tutorial articles. I have big plans for this site.</Td>
                    </Tr> */}
                </Tbody>
            </Table>
        </>
    )
}

export default TechStack