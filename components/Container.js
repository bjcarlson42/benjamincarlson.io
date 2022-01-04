import {
  useColorModeValue,
  Flex,
  Box,
  Text,
  Link,
} from '@chakra-ui/react'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import Hero from './Hero'
import { useRouter } from 'next/router'
import { GitHubIcon } from './CustomIcons'

const Container = ({ children }) => {
  const router = useRouter()
  return (
    <>
      <Link isExternal href="https://github.com/sponsors/bjcarlson42">
        <Box bgGradient='linear(to-l, #7928CA, #FF0080)'>
          <Flex justify="center" align="center" py={1} color="white">
            <GitHubIcon />
            <Text ml={2}>Sponsor Me On GitHub!</Text>
          </Flex>
        </Box>
      </Link>
      <Box h={8} bgColor={useColorModeValue("rgb(248, 250, 252)", "gray.900")} />
      <Navigation />
      <Box h={8} bgColor={useColorModeValue("rgb(248, 250, 252)", "gray.900")} />
      <Flex
        as="main"
        justifyContent="center"
        flexDirection="column"
        bg={useColorModeValue("#ffffff", "#15161a")}
        color={useColorModeValue("#000000", "#ffffff")}
      >
        {/* hero outside main Flex to avoid px */}
        {router.pathname == '/' && <Hero />}
        <Flex px={4} flexDir="column" minH="90vh">
          {children}
        </Flex>
        <Footer />
      </Flex>
    </>
  )
}

export default Container