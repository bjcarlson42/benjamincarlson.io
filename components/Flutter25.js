import React from 'react'
import {
    Box,
    useColorMode,
    Text,
    Heading,
    Image,
    Flex,
    Link
} from "@chakra-ui/react"

const Flutter25 = () => {
    const { colorMode } = useColorMode()

    const colorSecondary = {
        light: 'gray.700',
        dark: 'gray.400'
    }
    return (
        <Link
            href='https://flutter25.com'
            title='25 Days Of Flutter'
            isExternal
            _hover={{
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                textDecoration: 'none'
            }}
            my={4}
        >
            <Box
                w="100%"
                p={5}
                border='1px solid'
                borderColor="lightgray"
                borderRadius={5}
                h="100%"
            >
                <Flex>
                    <Image h="75px" w="75px" borderRadius={5} src="/images/flutter25.png"></Image>
                    <Flex flexDirection={['column', 'row']}>
                        <Flex
                            width="100%"
                            align="flex-start"
                            justifyContent="space-between"
                            flexDirection="column"
                            mx={2}
                        >
                            <Heading as="h3" size="md">
                                25 Days Of Flutter
                    </Heading>
                            <Text color={colorSecondary[colorMode]}>
                                25 Days Of Flutter is a 25 day tutorial series designed to take you from a Flutter beginner to coding a complete app using various modern technologies.
                    </Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Box>
        </Link>
    )
}

export default Flutter25