import {
    Flex,
    Link,
    IconButton,
    useColorMode,
    useColorModeValue,
    Box,
} from '@chakra-ui/react'
import { FiGithub, FiTwitter, FiLinkedin, FiYoutube, FiMail } from "react-icons/fi"

const Footer = () => {

    const { colorMode } = useColorMode()
    const borderIcon = {
        light: 'gray.400',
        dark: 'gray.500'
    }
    const footerHoverBg = {
        light: 'gray.100',
        dark: 'gray.700',
    }
    return (
        <Box bgColor={useColorModeValue("rgb(248, 250, 252)", "gray.900")} mt={4}>
            <Flex
                align="center"
                my={4}
                direction="column"
            >
                <div>
                    <Link href="https://twitter.com/bjmncrlsn" title="Twitter" isExternal>
                        <IconButton
                            aria-label="Twitter"
                            icon={<FiTwitter />}
                            size="lg"
                            color={borderIcon[colorMode]}
                            variant="ghost"
                            _hover={{ backgroundColor: footerHoverBg[colorMode] }}
                        />
                    </Link>
                    <Link href="https://github.com/bjcarlson42" title="GitHub" isExternal>
                        <IconButton
                            aria-label="GitHub"
                            icon={<FiGithub />}
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
                            icon={<FiLinkedin />}
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
                            icon={<FiYoutube />}
                            size="lg"
                            color={borderIcon[colorMode]}
                            variant="ghost"
                            _hover={{ backgroundColor: footerHoverBg[colorMode] }}
                        />
                    </Link>
                    <Link href="mailto:ben@carlsontechnologies.dev" title="Email" isExternal>
                        <IconButton
                            aria-label="Email"
                            icon={<FiMail />}
                            size="lg"
                            color={borderIcon[colorMode]}
                            variant="ghost"
                            _hover={{ backgroundColor: footerHoverBg[colorMode] }}
                        />
                    </Link>
                </div>
            </Flex>
        </Box>
    )
}

export default Footer