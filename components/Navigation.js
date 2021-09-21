import {
    useColorMode,
    Button,
    Flex,
    Box
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

import DarkModeSwitch from '../components/DarkModeSwitch'

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

    return (
        <Flex
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
            pos="sticky"
            zIndex={10}
            top={0}
        >
            <DarkModeSwitch />
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
                        Statistics
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
                        Blog
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
                        Projects
                    </Button>
                </NextLink>
                <NextLink href="/gear" passHref>
                    <Button
                        as="a"
                        variant="ghost"
                        p={[1, 2, 4]} _hover={{ backgroundColor: navHoverBg[colorMode] }} backgroundColor={router.pathname === '/gear' ? navHoverBg[colorMode] : null}
                        aria-label="Gear"
                    >
                        Gear
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
                        Home
                    </Button>
                </NextLink>
            </Box>
        </Flex >
    )
}

export default Navigation