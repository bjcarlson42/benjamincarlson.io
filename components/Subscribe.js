import React, { useState, useRef } from 'react'
import { useRouter } from 'next/router'
import {
    useToast,
    Input,
    Stack,
    InputGroup,
    Button,
    Box,
    useColorMode,
    Text,
    Heading,
    InputRightElement,
    InputLeftElement,
    Icon
} from "@chakra-ui/core"

const Subscribe = () => {
    const router = useRouter()
    const inputEl = useRef(null)
    const [loading, setLoading] = useState(false)
    const toast = useToast()
    const { colorMode } = useColorMode()

    const colorSecondary = {
        light: 'gray.700',
        dark: 'gray.400'
    }

    const borderColor = {
        light: 'gray.200',
        dark: 'gray.600'
    }

    const subscribe = async (e) => {
        e.preventDefault()
        setLoading(true)

        const res = await fetch('/api/subscribe', {
            body: JSON.stringify({
                email: inputEl.current.value,
                path: router.pathname
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })

        setLoading(false)
        const { error } = await res.json()

        if (error) {
            toast({
                title: 'Whoops! There\'s an error!',
                description: error,
                status: "error",
                duration: 3000,
                isClosable: true,
            })
            return
        }

        inputEl.current.value = ''
        toast({
            title: "You are subscribed!",
            status: "success",
            duration: 3000,
            isClosable: true,
        })
    }

    return (
        <Box
            w="100%"
            p={5}
            border='1px solid'
            borderColor={borderColor[colorMode]}
            borderRadius={5}
        >
            <Heading as="h3" size="md" mb={4}>
                Sign Up For My Newsletter!
            </Heading>
            <Text mb={2} color={colorSecondary[colorMode]}>
                Like my work and want to stay up to date? Subscribe to my newsletter to get an
                email from me once a month covering my recent writing, YouTube tutorials, and projects
                I'm working on.
            </Text>
            <Stack spacing={4}>
                <InputGroup size="md" mt={4} borderColor={borderColor[colorMode]}>
                    <Input
                        aria-label="Email for newsletter"
                        placeholder="ben@benjamincarlson.io"
                        ref={inputEl}
                        type="email"
                    />
                    <InputRightElement width="6.75rem">
                        <Button
                            isLoading={loading}
                            fontWeight="bold"
                            h="1.75rem"
                            size="sm"
                            onClick={subscribe}
                            variantColor="blue"
                            variant="outline"
                        >
                            Subscribe
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </Stack>
        </Box>
    )
}

export default Subscribe