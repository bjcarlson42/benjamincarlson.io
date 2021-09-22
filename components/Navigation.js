import React from 'react'
import {
    useColorMode,
    Button,
    Flex,
    Box
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

import DarkModeSwitch from '../components/DarkModeSwitch'
import LanguageSwitch from '../components/LanguageSwitch'
import useTranslation from 'next-translate/useTranslation'

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: height .5s, line-height .5s;
`

const Navigation = () => {
    const { colorMode } = useColorMode()
    const router = useRouter()

    const bgColor = {
        light: '#fff',
        dark: '#15161a'
    }

    const navHoverBg = {
        light: 'gray.100',
        dark: 'gray.700',
    }

    const { t } = useTranslation()
    const { locale } = useRouter()

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
            <DarkModeSwitch />
            <LanguageSwitch />
            <Box>
                <NextLink href="/statistics" passHref>
                    <Button
                        as="a"
                        variant="ghost"
                        p={[1, 2, 4]}
                        _hover={{ backgroundColor: navHoverBg[colorMode] }}
                        backgroundColor={router.pathname === '/statistics' ? navHoverBg[colorMode] : null}
                        aria-label="Statistics"
                    >
                        {t('common:statistics')}
                    </Button>
                </NextLink>
                <NextLink href="/blog" passHref>
                    <Button
                        as="a"
                        variant="ghost"
                        p={[1, 2, 4]}
                        _hover={{ backgroundColor: navHoverBg[colorMode] }} backgroundColor={router.pathname.includes('/blog') ? navHoverBg[colorMode] : null}
                        aria-label="Blog"
                    >
                        {t('common:blog')}
                    </Button>
                </NextLink>
                <NextLink href="/projects" passHref>
                    <Button
                        as="a"
                        variant="ghost"
                        p={[1, 2, 4]}
                        _hover={{ backgroundColor: navHoverBg[colorMode] }} backgroundColor={router.pathname === '/projects' ? navHoverBg[colorMode] : null}
                        aria-label="Projects"
                    >
                        {t('common:projects')}
                    </Button>
                </NextLink>
                <NextLink href="/gear" passHref>
                    <Button
                        as="a"
                        variant="ghost"
                        p={[1, 2, 4]} _hover={{ backgroundColor: navHoverBg[colorMode] }} backgroundColor={router.pathname === '/gear' ? navHoverBg[colorMode] : null}
                        aria-label="Gear"
                    >
                        {t('common:gear')}
                    </Button>
                </NextLink>
                <NextLink href="/" passHref>
                    <Button
                        as="a"
                        variant="ghost"
                        p={[1, 2, 4]}
                        _hover={{ backgroundColor: navHoverBg[colorMode] }} backgroundColor={router.pathname === '/' ? navHoverBg[colorMode] : null}
                        aria-label="Home"
                    >
                        {t('common:home')}
                    </Button>
                </NextLink>
                {/* <NextLink href="https://tutorials.benjamincarlson.io" passHref>
                    <Button as="a" variant="ghost" p={[1, 2, 4]} _hover={{ backgroundColor: navHoverBg[colorMode] }} target="_blank">
                        Tutorials
                    </Button>
                </NextLink> */}
            </Box>
        </StickyNav >
    )
}

export default Navigation