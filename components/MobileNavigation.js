import React from 'react'
import {
    useColorMode,
    Button,
    Flex
} from '@chakra-ui/core'
import styled from '@emotion/styled'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  bottom: 0;
  left: 0;
  box-shadow: 12px 0 0 0 rgba(0, 0, 0, 0.15);
`

const MobileNavigation = () => {
    const { colorMode } = useColorMode()
    const router = useRouter()

    const navBgColor = {
        light: 'gray.50',
        dark: 'gray.900'
    }

    const navActiveBg = {
        light: 'blue.100',
        dark: 'blue.700',
    }

    return (
        <StickyNav
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            maxWidth="800px"
            minWidth="320px"
            width="100%"
            bg={navBgColor[colorMode]}
            as="nav"
            p={4}
            mt={0}
            mx="auto"
            display={['flex', 'none', 'none']}
        >
            <NextLink href="/statistics" passHref>
                <Button as="a" variant="ghost" p={[1, 2, 4]} backgroundColor={router.pathname === '/statistics' ? navActiveBg[colorMode] : null}>
                    Statistics
                    </Button>
            </NextLink>
            <NextLink href="/blog" passHref>
                <Button as="a" variant="ghost" p={[1, 2, 4]} backgroundColor={router.pathname.split(4) === '/blog' ? navActiveBg[colorMode] : null}>
                    Blog
                    </Button>
            </NextLink>
            <NextLink href="/projects" passHref>
                <Button as="a" variant="ghost" p={[1, 2, 4]} backgroundColor={router.pathname === '/projects' ? navActiveBg[colorMode] : null}>
                    Projects
                    </Button>
            </NextLink>
            <NextLink href="/gear" passHref>
                <Button as="a" variant="ghost" p={[1, 2, 4]} backgroundColor={router.pathname === '/gear' ? navActiveBg[colorMode] : null}>
                    Gear
                    </Button>
            </NextLink>
            <NextLink href="/about" passHref>
                <Button as="a" variant="ghost" p={[1, 2, 4]} backgroundColor={router.pathname === '/about' ? navActiveBg[colorMode] : null}>
                    About
                    </Button>
            </NextLink>
            <NextLink href="/" passHref>
                <Button as="a" variant="ghost" p={[1, 2, 4]} backgroundColor={router.pathname === '/' ? navActiveBg[colorMode] : null}>
                    Home
                    </Button>
            </NextLink>
        </StickyNav >
    )
}

export default MobileNavigation