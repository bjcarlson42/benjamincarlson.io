import {
    Flex,
    Text,
    Box,
    Heading,
    Icon,
    Link,
    useColorMode
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons'

export default function StatBox({ title, desc, url, color, ...rest }) {
    const { colorMode } = useColorMode()
    const borderColor = {
        light: 'gray.400',
        dark: 'white'
    };
    return (
        <Link
            href={url}
            isExternal
            _hover="none"
        >
            <Box p={3} s
                hadow="xs"
                borderWidth="1px"
                flex="1"
                rounded="md"
                my={2}
                {...rest}
                width={[320, 270, 230]}
                borderColor={borderColor[colorMode]}>
                <Flex
                    justify="space-between"
                >
                    <Heading as="h3" fontSize="2xl">{title}</Heading>
                    <ExternalLinkIcon />
                </Flex>
                <Text mt={2}>{desc}</Text>
            </Box>
        </Link>
    );
}