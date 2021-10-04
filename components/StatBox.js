import { useState } from 'react'
import {
    Flex,
    Box,
    Link,
    useColorMode,
    StatGroup,
    Stat,
    StatLabel,
    StatNumber,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

export default function StatBox({ title, desc, url }) {
    const { colorMode } = useColorMode()
    const borderColor = {
        light: '#CBD5E0',
        dark: '#4A5568',
    }
    const [opacity, setOpacity] = useState(0)
    
    return (
        <Link
            href={url}
            isExternal
            _hover={{
                textDecoration: 'none'
            }}
            onMouseOver={() => setOpacity(1)}
            onMouseLeave={() => setOpacity(0)}
        >
            <Box p={2} pb={[2, 1, 1]}>
                <StatGroup border={`1px solid ${borderColor[colorMode]}`} borderRadius={5} p={2} w="100%">
                    <Stat>
                        <Flex
                            align="center"
                            justifyContent="space-between"
                        >
                            <StatLabel>{desc}</StatLabel>
                            <ExternalLinkIcon opacity={opacity} />
                        </Flex>
                        <StatNumber>{title}</StatNumber>
                    </Stat>
                </StatGroup>
            </Box>
        </Link>
    )
}