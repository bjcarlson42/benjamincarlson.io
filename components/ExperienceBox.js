import React from 'react'
import {
    useColorMode,
    Heading,
    Text,
    Flex,
    Box,
    Link,
    Stack
} from '@chakra-ui/core'

const ExperienceBox = ({ name, years, pos, children }) => {

    const { colorMode } = useColorMode()

    const colorSecondary = {
        light: 'gray.700',
        dark: 'gray.400'
    }
    const borderColor = {
        light: 'gray.200',
        dark: 'gray.600'
    }
    return (

        <Link
            href="https://www.linkedin.com/in/bjcarlson42/#experience-section"
            isExternal
            _hover={{
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                textDecoration: 'none'
            }}
            mt={4}
        >
            <Flex
                align="center"
                border="1px solid"
                borderColor={borderColor[colorMode]}
                borderRadius={4}
                p={4}
            >
                <Stack>
                    <Flex
                        justifyContent="space-between"
                        flexDirection={["column", "row", "row"]}
                    >
                        <Flex
                            flexDirection="column"
                        >
                            <Heading
                                as="h4"
                                size="md"
                                fontWeight="bold"
                            >
                                {name}
                            </Heading>
                            <Text>{pos}</Text>
                        </Flex>
                        <Text fontStyle="italic" color="gray.600" fontSize="14px">
                            {years}
                        </Text>
                    </Flex>
                    <Text lineHeight="1.3">{children}</Text>
                </Stack>
            </Flex>
        </Link>
    )
}

export default ExperienceBox