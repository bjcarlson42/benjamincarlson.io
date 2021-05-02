import React, { useState } from 'react'
import {
    Flex,
    Link,
    Heading,
    Text,
    Stack,
    useColorMode,
    Image
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const FeaturedProjectCard = ({ title, href, children, src, alt }) => {
    const { colorMode } = useColorMode()
    const borderColor = {
        light: 'gray.200',
        dark: 'gray.600'
    }
    const colorSecondary = {
        light: 'gray.700',
        dark: 'gray.400'
    }
    const boxShadowColor = {
        light: '0px 8px 26px rgba(0, 0, 0, 0.1)',
        dark: '0px 8px 26px rgba(0, 0, 0, 0.9)'
    }
    const [opacity, setOpacity] = useState(0)
    return (
        <Link
            href={href}
            title={title}
            isExternal
            _hover={{
                boxShadow: boxShadowColor[colorMode],
                textDecoration: 'none'
            }}
            mt={4}
            onMouseOver={() => setOpacity(1)}
            onMouseLeave={() => setOpacity(0)}
        >
            <Flex
                align="center"
                border="1px solid"
                borderColor={borderColor[colorMode]}
                borderRadius={4}
                p={4}
            >
                <Image
                    src={src}
                    alt={alt}
                    width={["40px", "50px", "60px"]}
                    ml={2}
                    mr={4}
                ></Image>
                <Stack>
                    <Flex justify="space-between">
                        <Heading
                            as="h4"
                            size="md"
                            fontWeight="bold"
                            mb={2}
                        >
                            {title}
                        </Heading>
                        <ExternalLinkIcon opacity={opacity} fontSize="2xl" />
                    </Flex>
                    <Text color={colorSecondary[colorMode]}>{children}</Text>
                </Stack>
            </Flex>
        </Link>
    )
}

export default FeaturedProjectCard