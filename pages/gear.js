import React from 'react'
import { NextSeo } from 'next-seo'
import {
    useColorMode,
    Heading,
    Text,
    Flex,
    Stack,
    Link,
    Box,
    Image,
    Badge,
    Button,
    ButtonGroup
} from '@chakra-ui/react'
import { FiArrowRight } from "react-icons/fi"

import Container from '../components/Container'
import GearList from '../components/GearList'

const url = 'https://benjamincarlson.io/gear'
const title = 'Gear – Benjamin Carlson'
const description = 'The gear I use for programming and productivity every day.'

const Gear = () => {
    const { colorMode } = useColorMode()

    const colorSecondary = {
        light: 'gray.700',
        dark: 'gray.400'
    }

    const colorDisclosure = {
        light: 'gray.400',
        dark: 'gray.500'
    }

    return (
        <>
            <NextSeo
                title={title}
                description={description}
                canonical={url}
                openGraph={{
                    url,
                    title,
                    description
                }}
            />
            <Container>
                <Stack
                    as="main"
                    spacing={8}
                    justifyContent="center"
                    alignItems="flex-start"
                    m="0 auto 4rem auto"
                    maxWidth="700px"
                >
                    <Flex
                        flexDirection="column"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        maxWidth="700px"
                        px={4}
                    >
                        <Heading letterSpacing="tight" mb={4} as="h1" size="2xl">
                            Gear
                        </Heading>
                        <Text color={colorSecondary[colorMode]} mb={2}>
                            Productivity is directly associated with selecting the right software and hardware. Here is a list of all the gear I use on a day to day basis.
                            If you purchase any items through the links below I may earn a small commission.
                        </Text>

                        {/* <Flex
                            align="center"
                            w="100%"
                            mb={5}
                            wrap="wrap"
                        >
                            <Button variant="outline" m={1}>
                                Development
                            </Button>
                            <Button variant="outline" m={1}>
                                Hardware
                            </Button>
                            <Button variant="outline" m={1}>
                                Software
                            </Button>
                            <Button variant="outline" m={1}>
                                Filming
                            </Button>
                            <Button variant="outline" m={1}>
                                Productivity
                            </Button>
                            <Button variant="outline" m={1}>
                                Miscellaneous
                            </Button>
                        </Flex>

                        <Flex
                            wrap="wrap"
                            justify="center"
                        >
                            <Box maxW={["lg", "xs", "xs"]} borderWidth="1px" borderRadius="lg" overflow="hidden" m={1} w="100%">
                                <Image src="/images/gear/macbook.jpg" alt="Macbook" />
                                <Box p="4">
                                    <Badge borderRadius="full" px="2" colorScheme="teal">
                                        Laptop
                                    </Badge>
                                    <Box
                                        mt="1"
                                        fontWeight="semibold"
                                        as="h4"
                                        lineHeight="tight"
                                        isTruncated
                                    >
                                        Macbook Pro 2018 15in, and some other stats
                                </Box>
                                    <Text>$2,500</Text>
                                </Box>
                            </Box>
                            <Box maxW="xs" borderWidth="1px" borderRadius="lg" overflow="hidden" m={1}>
                                <Image src="/images/gear/macbook.jpg" alt="Macbook" />
                                <Box p="6">
                                    <Box
                                        mt="1"
                                        fontWeight="semibold"
                                        as="h4"
                                        lineHeight="tight"
                                        isTruncated
                                    >
                                        Macbook Pro
                                </Box>
                                    <Text>$2,500</Text>
                                </Box>
                            </Box>
                            <Box maxW="xs" borderWidth="1px" borderRadius="lg" overflow="hidden" m={1}>
                                <Image src="/images/gear/macbook.jpg" alt="Macbook" />
                                <Box p="6">
                                    <Box
                                        mt="1"
                                        fontWeight="semibold"
                                        as="h4"
                                        lineHeight="tight"
                                    >
                                        Macbook Pro
                                </Box>
                                    <Text>$2,500</Text>
                                </Box>
                            </Box>
                        </Flex> */}

                        {/* <Text color={colorDisclosure[colorMode]} mb={2}>
                            Disclosure: I am a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for me to earn fees by linking to Amazon.com and affiliated sites.
                        </Text> */}
                        <GearList />
                    </Flex>
                </Stack>
            </Container>
        </>
    )
}

export default Gear