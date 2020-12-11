import React, { Children } from 'react'
import {
    Flex,
    Link,
    Heading,
    Text,
    Stack,
    useColorMode,
    Image
} from '@chakra-ui/react'

const FeaturedProjectCard = ({ title, href, children, src }) => {
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
                    width={["40px", "50px", "60px"]}
                    ml={2}
                    mr={4}
                ></Image>
                <Stack>
                    <Heading
                        as="h4"
                        size="md"
                        fontWeight="bold"
                        mb={2}
                    >
                        {title}
                    </Heading>
                    <Text color={colorSecondary[colorMode]}>{children}</Text>
                </Stack>
            </Flex>
        </Link>
    )
}

export default FeaturedProjectCard