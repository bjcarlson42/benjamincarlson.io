import React from 'react'
import {
    useColorMode,
    Heading,
    Text,
    Flex,
    Box,
    Link
} from '@chakra-ui/core'

const ExperienceBox = ({ name, year1, year2, year3, pos, children }) => {

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
        <Link href="https://www.linkedin.com/in/bjcarlson42/#experience-section" isExternal _hover={{
            textDecoration: 'none'
        }}>
            <Box
                mb={4}
                w="100%"
                borderWidth="1px"
                rounded="md"
                overflow="hidden"
                p={[2, null, 4]}
                borderColor={borderColor[colorMode]}
            >
                <Flex
                    width="100%"
                    align="flex-start"
                    justifyContent="space-between"
                    flexDirection='row'
                >
                    <Flex flexDirection="column">
                        <Flex align="center">
                            <Heading
                                as="h4"
                                size="lg"
                                fontWeight="bold"
                            >
                                {name}
                            </Heading>
                        </Flex>
                        <Text
                            color={colorSecondary[colorMode]}
                        >
                            {pos}
                        </Text>
                    </Flex>
                    <Flex
                        flexDirection="column"
                    >
                        <Text
                            color="gray.500"
                            minWidth="105px"
                            textAlign='right'
                            fontStyle="italic"
                            fontSize="sm"
                        >
                            {year1}
                        </Text>
                        <Text
                            color="gray.500"
                            minWidth="105px"
                            textAlign='right'
                            fontStyle="italic"
                            fontSize="sm"
                        >
                            {year2}
                        </Text>
                        <Text
                            color="gray.500"
                            minWidth="105px"
                            textAlign='right'
                            fontStyle="italic"
                            fontSize="sm"
                        >
                            {year3}
                        </Text>
                    </Flex>
                </Flex>
                <Text color={colorSecondary[colorMode]} mt={4}>
                    {children}
                </Text>
            </Box >
        </Link>
    )
}

export default ExperienceBox