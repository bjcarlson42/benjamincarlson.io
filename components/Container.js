import React from 'react'
import { useColorMode, Flex, Text, Link, IconButton, SimpleGrid, Box } from '@chakra-ui/react'
import { FiGithub, FiTwitter, FiLinkedin, FiYoutube, FiMail } from "react-icons/fi"

import { Footer } from '../components/Footer'
import Navigation from '../components/Navigation'
import MobileNavigation from '../components/MobileNavigation'
import MobileNavigationTop from '../components/MobileNavigationTop'


const Container = ({ children }) => {
  const { colorMode } = useColorMode()
  const borderIcon = {
    light: 'gray.400',
    dark: 'gray.500'
  }
  const footerHoverBg = {
    light: 'gray.100',
    dark: 'gray.700',
  }
  const bgColor = {
    light: 'white',
    dark: '#171717' // #1A202C
  }
  const color = {
    light: 'black',
    dark: 'white'
  }

  return (
    <>
      <Navigation />
      <MobileNavigationTop page="Home" />
      <Flex
        as="main"
        justifyContent="center"
        flexDirection="column"
        bg={bgColor[colorMode]}
        color={color[colorMode]}
        px={[0, 4, 4]}
        mt={0, 8, 8}
      >
        {children}
        <Footer />
      </Flex>
      <MobileNavigation />
    </>
  )
}

export default Container