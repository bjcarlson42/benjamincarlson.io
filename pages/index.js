import { NextSeo } from 'next-seo'
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Link,
  useColorModeValue,
  Box,
  SimpleGrid,
  Icon,
  Divider,
} from '@chakra-ui/react'
import Container from '../components/Container'
import Todo from '../components/Todo'
import TechStack from '../components/TechStack'
import { motion } from "framer-motion"
import ProjectCard from '../components/ProjectCard'
import { ChevronRightIcon } from "@chakra-ui/icons"
import { GrBlockQuote } from 'react-icons/gr'
import { YoutubeIcon } from '../components/CustomIcons'
import { SiMedium } from 'react-icons/si'
import { FiCoffee } from 'react-icons/fi'
import { BsGear } from 'react-icons/bs'

const url = 'https://benjamincarlson.io/'
const title = 'Home – Benjamin Carlson'
const description = 'Developer, creator, writer, and student living and working in CT. Browse Ben\'s latest projects, experience, blog posts, and statistics.'

export default function Index() {
  const { colorMode } = useColorMode()

  const colorSecondary = {
    light: 'gray.600',
    dark: 'gray.400'
  }

  const iconColor = {
    light: 'gray.600',
    dark: 'gray.300'
  }

  const linkColor = {
    light: 'blue.400',
    dark: 'blue.600'
  }

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description
        }}
      />
      <Container>
        <Flex
          flexDirection="column"
          maxWidth="1000px"
          alignSelf={[null, "center"]}
        >
          {/* hero is defined inside of components/Container.js which allows it to have a different bg color without applying p to a bunch of tags */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: .7, delay: 2 }}
          >
            <Box as="section" mt={10} mb={20}>
              <Heading letterSpacing="tight" mt={8} size="lg" fontWeight={700} as="h2" mb={4}>About Me</Heading>
              <Text color={colorSecondary[colorMode]}>Hi everyone 👋, I'm Benjamin Carlson. I go to <Link color="blue.500" href="https://www2.ccsu.edu/" isExternal>Central Connect State University</Link> where I study computer science and mathematics. My personal website is where I showcase my projects, writing, statistics, experience, and more. It also serves as a sandbox to play around with new technologies, as seen by the <Link href="https://github.com/bjcarlson42/benjamincarlson.io#overview" color={linkColor[colorMode]} isExternal>evolution</Link> of this website! Feel free to reach out via email or any social media.</Text>
            </Box>

            <Box as="section" mt={10} mb={20}>
              <Heading letterSpacing="tight" mt={8} size="lg" fontWeight={700} as="h2" mb={4}>Featured Projects 👨‍💻</Heading>
              <SimpleGrid minChildWidth="300px" spacing="40px">
                <ProjectCard
                  title="coffeeclass.io"
                  description="coffeeclass.io is a tutorial website I started to teach programming and computer science skills in a fun and easy to learn manner."
                  repoHref="https://github.com/carlson-technologies/coffeeclass.io"
                  demoHref="https://www.coffeeclass.io?utm_source=website&utm_campaign=benjamincarlson.io"
                  languageColor="#f1e05a"
                  language="JavaScript"
                />
                <ProjectCard
                  title="benjamincarlson.io"
                  description="This website is a personal website I built to showcase my projects and experience."
                  repoHref="https://github.com/bjcarlson42/benjamincarlson.io"
                  demoHref="https://benjamincarlson.io"
                  languageColor="#f1e05a"
                  language="JavaScript"
                />
                <ProjectCard
                  title="Word Of The Day App"
                  description="A word of the day app built using Google's Flutter - a cross platform mobile app framework. View current and past words and save your favorites!"
                  repoHref="https://github.com/bjcarlson42/wotd"
                  youtubeId="https://youtu.be/17wMTF_bnnc"
                  languageColor="#00B4AB"
                  language="Dart"
                />
              </SimpleGrid>
            </Box>

            <Box as="section" mt={10} mb={20}>
              <Heading letterSpacing="tight" mt={8} mb={4} size="lg" fontWeight={700} as="h2">Publications 📚</Heading>
              <Text color={colorSecondary[colorMode]}>I began writing about programming back in 2019 on my first blog that is no longer alive. Since then I have expanded to different media outlets and covered a variety of topics from programming, to productivity, to business.</Text>
              {/* <Flex align="center" mt={4}> */}
              <SimpleGrid minChildWidth="200px" spacing="20px" my={10}>
                <Flex flexDir="column">
                  <Icon as={YoutubeIcon} color="red.500" fontSize="2xl" mb={1} />
                  <Heading as="h3" size="md" fontWeight={400} mb={2} letterSpacing="tight">YouTube</Heading>
                  <Text>I started uploading YouTube videos in 2020 when the pandemic started. I mostly upload programming tutorial videos but I also upload developer vlogs and informational videos. I have uploaded (almost) weekly since then and have grown my channel to an audience of over 3.4k subscribers and 350k views!</Text>
                </Flex>
                <Flex flexDir="column">
                  <Icon as={SiMedium} fontSize="2xl" mb={1} />
                  <Heading as="h3" size="md" fontWeight={400} mb={2} letterSpacing="tight">Medium</Heading>
                  <Text>Medium was the first publication I started. I wrote my first article in <Link color="blue.500" href="https://levelup.gitconnected.com/using-javascript-to-scramble-a-rubiks-cube-306f52908f18" isExternal>March 2020</Link>, and since then I have written about a dozen more articles. Nowadays I write less for Medium and more for coffeeclass.io.</Text>
                </Flex>
                <Flex flexDir="column">
                  <Icon as={FiCoffee} color="yellow.500" fontSize="2xl" mb={1} />
                  <Heading as="h3" size="md" fontWeight={400} mb={2} letterSpacing="tight">coffeeclass.io</Heading>
                  <Text>Because I enjoyed uploading YouTube videos about programming and writing about programming on Medium, I decided to start my own programming tutorial website, coffeeclass.io. If you are interested in writing about code, see our <Link color="blue.500" href="https://www.coffeeclass.io/contribute/getting-started" isExternal>getting started</Link> page.</Text>
                </Flex>
                <Flex flexDir="column">
                  <Icon as={BsGear} color="gray.500" fontSize="2xl" mb={1} />
                  <Heading as="h3" size="md" fontWeight={400} mb={2} letterSpacing="tight">engineering.coffeeclass.io</Heading>
                  <Text>The behind the scenes look at coffeeclass.io. On this site I write about the development of coffeeclass.io. Everything from the current tech stack, future plans, growing pains, and more.</Text>
                </Flex>
              </SimpleGrid>
              {/* </Flex> */}
              <Flex
                mb={4}
                bgColor={useColorModeValue("gray.100", "gray.900")}
                p={[5, 20, 50]}
                borderRadius={3}
                as="blockquote"
                borderLeft="10px solid"
                borderLeftColor={useColorModeValue("blue.400", "blue.700")}
              >
                <Icon as={GrBlockQuote} fontSize={40} color={colorSecondary[colorMode]} mr={4} />
                <Flex flexDir="column">
                  <Text fontSize="xl" fontStyle="italic" color={colorSecondary[colorMode]}>If You Can Think and Speak and Write, You Are Absolutely Deadly.</Text>
                  <Text fontSize="xl" fontWeight="bold" mt={2}>Jordan B. Peterson</Text>
                </Flex>
              </Flex>
            </Box>

            {/* <Box as="section" mt={10} mb={20}>
              <Heading letterSpacing="tight" mt={8} size="lg" fontWeight={700} as="h2" mb={4}>Experience 👨‍💼</Heading>
              <Flex align="center" overflowX="auto">
                <Text>Experience 1</Text>
                <Icon mx={4} as={ChevronRightIcon} />
                <Text>Experience 2</Text>
                <Icon mx={4} as={ChevronRightIcon} />
                <Text>Experience 3</Text>
                <Icon mx={4} as={ChevronRightIcon} />
                <Text>Experience 4</Text>
                <Icon mx={4} as={ChevronRightIcon} />
                <Text>Experience 5</Text>
                <Icon mx={4} as={ChevronRightIcon} />
                <Text>Experience 1</Text>
                <Icon mx={4} as={ChevronRightIcon} />
                <Text>Experience 2</Text>
                <Icon mx={4} as={ChevronRightIcon} />
                <Text>Experience 3</Text>
                <Icon mx={4} as={ChevronRightIcon} />
                <Text>Experience 4</Text>
                <Icon mx={4} as={ChevronRightIcon} />
                <Text>Experience 5</Text>
              </Flex>
            </Box> */}

            <Todo />
            <TechStack />

            <Text mt={10}>Looks like you've made it to the end of this page... feel free to <Link href="https://youtube.com/benjamincarlson" isExternal color={linkColor[colorMode]}>check out my YouTube channel</Link> or
              visit <Link href="https://www.coffeeclass.io/?utm_source=website&utm_campaign=benjamincarlson.io" isExternal color={linkColor[colorMode]}>coffeeclass.io</Link> where
              you can find even more programming content.
            </Text>
          </motion.div>

        </Flex>
      </Container>
    </>
  )
}