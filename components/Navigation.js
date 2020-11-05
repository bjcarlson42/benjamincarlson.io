import React from 'react'
import {
    useColorMode,
    Button,
    Flex,
    Box,
    Image
} from '@chakra-ui/core'
import styled from '@emotion/styled'
import NextLink from 'next/link'

import DarkModeSwitch from '../components/DarkModeSwitch'

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: height .5s, line-height .5s;
`

const Navigation = () => {
    const { colorMode } = useColorMode()

    const bgColor = {
        light: '#fff',
        dark: '#171717' // #1A202C
    }

    const navHoverBg = {
        light: 'blue.100',
        dark: 'blue.700',
    }

    return (
        <StickyNav
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            maxWidth="800px"
            minWidth="356px"
            width="100%"
            bg={bgColor[colorMode]}
            as="nav"
            px={6}
            py={2}
            mt={8}
            mb={[null, 0, 8]}
            mx="auto"
            display={['none', 'flex', 'flex']}
        >
            <NextLink href="/" passHref>
                <Image src="/images/logo.png" size={[null, 50, 70]}></Image>
            </NextLink>
            <Box>
                <NextLink href="/statistics" passHref>
                    <Button as="a" variant="ghost" p={[1, 2, 4]} _hover={{ backgroundColor: navHoverBg[colorMode] }}>
                        Statistics
                    </Button>
                </NextLink>
                <NextLink href="/blog" passHref>
                    <Button as="a" variant="ghost" p={[1, 2, 4]} _hover={{ backgroundColor: navHoverBg[colorMode] }}>
                        Blog
                    </Button>
                </NextLink>
                <NextLink href="/projects" passHref>
                    <Button as="a" variant="ghost" p={[1, 2, 4]} _hover={{ backgroundColor: navHoverBg[colorMode] }}>
                        Projects
                    </Button>
                </NextLink>
                <NextLink href="/gear" passHref>
                    <Button as="a" variant="ghost" p={[1, 2, 4]} _hover={{ backgroundColor: navHoverBg[colorMode] }}>
                        Gear
                    </Button>
                </NextLink>
                <NextLink href="/about" passHref>
                    <Button as="a" variant="ghost" p={[1, 2, 4]} _hover={{ backgroundColor: navHoverBg[colorMode] }}>
                        About
                    </Button>
                </NextLink>
                <NextLink href="/" passHref>
                    <Button as="a" variant="ghost" p={[1, 2, 4]} _hover={{ backgroundColor: navHoverBg[colorMode] }}>
                        Home
                    </Button>
                </NextLink>
            </Box>
            <DarkModeSwitch />
        </StickyNav >
    )
}

export default Navigation