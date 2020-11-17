import React, { Children } from 'react'
import {
    Flex,
    Link,
    Heading,
    Text,
    Stack,
    Icon,
    useColorMode,
    Image
} from '@chakra-ui/core'

const FeaturedProjectCard = ({ title, href, icon, children, size, color, src }) => {
    const { colorMode } = useColorMode()
    const borderColor = {
        light: 'gray.200',
        dark: 'gray.600'
    }
    const iconColor = {
        light: 'gray.1000',
        dark: 'white'
    }

    return (
        <Link
            href={href}
            title={title}
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
                        mb={4}
                    >
                        {title}
                    </Heading>
                    <Text lineHeight="1.3">{children}</Text>
                </Stack>
            </Flex>
        </Link>
    )
}

export default FeaturedProjectCard