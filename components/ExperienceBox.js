import React from 'react'
import {
    useColorMode,
    Heading,
    Text,
    Flex,
    Link,
    Stack,
    Badge
} from '@chakra-ui/react'

const ExperienceBox = ({ name, years, pos, badge_1, badge_2, badge_1_margin, badge_2_margin, children }) => {

    const { colorMode } = useColorMode()
    const colorSecondary = {
        light: 'gray.700',
        dark: 'gray.400'
    }
    const borderColor = {
        light: 'gray.200',
        dark: 'gray.600'
    }
    const boxShadowColor = {
        light: '0px 8px 26px rgba(0, 0, 0, 0.1)',
        dark: '0px 8px 26px rgba(0, 0, 0, 0.9)'
    }

    return (

        <Link
            href="https://www.linkedin.com/in/bjcarlson42/#experience-section"
            isExternal
            _hover={{
                boxShadow: boxShadowColor[colorMode],
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
                        <Flex
                            flexDirection="column"
                        >
                            <Text fontStyle="italic" color="gray.600" fontSize="14px">
                                {years}
                            </Text>
                            <Flex justifyContent={["flex-start", "flex-end", "flex-end"]}>
                                <Badge m={1}>{badge_1}</Badge>
                                <Badge m={1} display={badge_2 == null ? 'none' : 'flex'}>{badge_2}</Badge>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Text color={colorSecondary[colorMode]}>{children}</Text>
                </Stack>
            </Flex>
        </Link>
    )
}

export default ExperienceBox