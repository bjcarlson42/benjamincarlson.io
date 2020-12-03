import React from 'react'
import NextLink from 'next/link'
import { Flex, Link, IconButton, useColorMode } from '@chakra-ui/react'
import { SiTwitter, SiGithub, SiLinkedin, SiYoutube, SiMedium } from "react-icons/si"
import { MdEmail } from "react-icons/md"

export const Footer = () => {

    const { colorMode } = useColorMode()
    const borderIcon = {
        light: 'blue.400',
        dark: 'blue.500'
    }
    const footerHoverBg = {
        light: 'gray.100',
        dark: 'gray.700',
    }
    return (
        <Flex align="center" mb={4} direction="column">
            <div>
                <Link href="https://twitter.com/bjmncrlsn" title="Twitter" isExternal>
                    <IconButton
                        aria-label="Twitter"
                        icon={<SiTwitter />}
                        size="lg"
                        color={borderIcon[colorMode]}
                        variant="ghost"
                        _hover={{ backgroundColor: footerHoverBg[colorMode] }}
                    />
                </Link>
                <Link href="https://github.com/bjcarlson42" title="GitHub" isExternal>
                    <IconButton
                        aria-label="GitHub"
                        icon={<SiGithub />}
                        size="lg"
                        color={borderIcon[colorMode]}
                        variant="ghost"
                        _hover={{ backgroundColor: footerHoverBg[colorMode] }}
                    />
                </Link>
                <Link
                    href="https://www.linkedin.com/in/bjcarlson42"
                    title="LinkedIn"
                    isExternal
                >
                    <IconButton
                        aria-label="LinkedIn"
                        icon={<SiLinkedin />}
                        size="lg"
                        color={borderIcon[colorMode]}
                        variant="ghost"
                        _hover={{ backgroundColor: footerHoverBg[colorMode] }}
                    />
                </Link>
                <Link
                    href="https://www.youtube.com/benjamincarlson"
                    title="YouTube"
                    isExternal
                >
                    <IconButton
                        aria-label="YouTube"
                        icon={<SiYoutube />}
                        size="lg"
                        color={borderIcon[colorMode]}
                        variant="ghost"
                        _hover={{ backgroundColor: footerHoverBg[colorMode] }}
                    />
                </Link>
                <Link href="mailto:bjcarlson42@gmail.com" title="Email" isExternal>
                    <IconButton
                        aria-label="Email"
                        icon={<MdEmail />}
                        size="lg"
                        color={borderIcon[colorMode]}
                        variant="ghost"
                        _hover={{ backgroundColor: footerHoverBg[colorMode] }}
                    />
                </Link>
                <Link href="https://medium.com/@benjamincarlson" title="Medium" isExternal>
                    <IconButton
                        aria-label="Medium"
                        icon={<SiMedium />}
                        size="lg"
                        color={borderIcon[colorMode]}
                        variant="ghost"
                        _hover={{ backgroundColor: footerHoverBg[colorMode] }}
                    />
                </Link>
            </div>
            <div>
                <NextLink href="/gear" passHref>
                    <Link
                        fontSize="md"
                        color="gray.500"
                        minWidth="100px"
                        mr={2}
                        title="Gear"
                    >
                        /gear
                    </Link>
                </NextLink>
                <NextLink href="/hello" passHref>
                    <Link
                        fontSize="md"
                        color="gray.500"
                        minWidth="100px"
                        mr={2}
                        title="Hello"
                    >
                        /hello
                    </Link>
                </NextLink>
                <NextLink href="/about" passHref>
                    <Link
                        fontSize="md"
                        color="gray.500"
                        minWidth="100px"
                        mr={2}
                        title="About"
                    >
                        /about
                    </Link>
                </NextLink>
                <NextLink href="/thanks" passHref>
                    <Link
                        fontSize="md"
                        color="gray.500"
                        minWidth="100px"
                        mr={2}
                        title="Thanks"
                    >
                        /thanks
                    </Link>
                </NextLink>
            </div>
        </Flex>
    )
}
