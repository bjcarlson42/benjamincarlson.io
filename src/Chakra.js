import {
    ChakraProvider,
    cookieStorageManager,
    localStorageManager,
} from "@chakra-ui/react"
import customTheme from '../styles/theme'

export function Chakra({ cookies, children }) {
    const colorModeManager =
        typeof cookies === "string"
            ? cookieStorageManager(cookies)
            : localStorageManager
    return (
        <ChakraProvider colorModeManager={colorModeManager} theme={customTheme}>
            {children}
        </ChakraProvider>
    )
}

export function getServerSideProps({ req }) {
    return {
        props: {
            cookies: req.headers.cookie ?? "",
        },
    }
}