import React from 'react'
import {
    Link as ChakraLink,
    useColorMode,
    Box,
    Link,
    Icon,
    Flex,
    Text
} from '@chakra-ui/core'

const SocialLink = ({ name, href, icon }) => {
    const { colorMode, toggleColorMode } = useColorMode();

    const bgColor = {
        light: 'gray.100',
        dark: 'gray.600'
    };
    return (
        <Box w="100%" bg={bgColor[colorMode]} p={2} borderRadius={5} textAlign="center" my={2}>
            <Link href={href} isExternal>
                <Box>
                    <Flex align="center" justify="space-between">
                        <Icon name={icon} size="24px" />
                        <Text mx={3}>{name}</Text>
                        {/* <Icon name="external-link" size="24px" /> */}<Text></Text>
                    </Flex>
                </Box>
            </Link>
        </Box>
    )
}

export default SocialLink