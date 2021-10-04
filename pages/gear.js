import React from 'react'
import { NextSeo } from 'next-seo'
import {
    useColorMode,
    Heading,
    Text,
    Flex,
    Link,
    Box,
    Image,
    Badge,
    Button,
    ButtonGroup
} from '@chakra-ui/react'
import { FiArrowRight } from "react-icons/fi"
import { motion } from "framer-motion"

import Container from '../components/Container'
import GearList from '../components/GearList'

const url = 'https://benjamincarlson.io/gear'
const title = 'Gear – Benjamin Carlson'
const description = 'The gear I use for programming and productivity every day.'

const Gear = () => {
    const { colorMode } = useColorMode()

    const colorSecondary = {
        light: 'gray.600',
        dark: 'gray.400'
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
                <Flex
                    flexDirection="column"
                    maxWidth="1000px"
                    alignSelf={[null, "center"]}
                >
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: .7, delay: .4 }}
                    >
                        <Heading letterSpacing="tight" my={4} as="h1" size="2xl">
                            Gear
                        </Heading>
                        <Text color={colorSecondary[colorMode]} mb={2}>
                            Productivity is directly associated with selecting the right software and hardware. Here is a list of all the gear I use on a day to day basis.
                            If you purchase any items through the links below I may earn a small commission.
                        </Text>
                        <GearList />
                    </motion.div>
                </Flex>
            </Container>
        </>
    )
}

export default Gear