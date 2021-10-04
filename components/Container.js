import {
  useColorModeValue,
  Flex,
  Box,
} from '@chakra-ui/react'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import Hero from './Hero'
import { useRouter } from 'next/router'

const Container = ({ children }) => {
  const router = useRouter()
  return (
    <>
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