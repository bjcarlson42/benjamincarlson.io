import React, { useEffect } from "react"
import { useColorMode } from '@chakra-ui/react'

export default function Comments() {
    const { colorMode } = useColorMode()
    const commentsTheme = {
        light: 'github-light',
        dark: 'github-dark'
    }
    return (
        <>
            <script
                src="https://utteranc.es/client.js"
                repo="bjcarlson42/comments-benjamincarlson.io"
                issue-term="url"
                theme={commentsTheme[colorMode]}
                crossorigin="anonymous"
                async
            >
            </script>
        </>
    )
}