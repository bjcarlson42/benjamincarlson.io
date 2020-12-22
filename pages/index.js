import React from 'react'
import { NextSeo } from 'next-seo'
import NextLink from 'next/link'
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Link,
  Code,
  Button
} from '@chakra-ui/react'

import Container from '../components/Container'
import Subscribe from '../components/Subscribe'
import ExperienceBox from '../components/ExperienceBox'
import FeaturedProjectCard from '../components/FeaturedProjectCard'
import IndexHeading from '../components/IndexHeading'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import BlogPost from '../components/BlogPost'

const url = 'https://benjamincarlson.io/'
const title = 'Home – Benjamin Carlson'
const description = 'Developer, creator, writer, and student living and working in CT. Browse my latest projects, posts, and stats.'

export default function Index() {
  const { colorMode } = useColorMode()

  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400'
  }

  const iconColor = {
    light: 'gray.600',
    dark: 'gray.300'
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
        <IndexHeading />
        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="700px"
          px={2}
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
          >

            {/* Hero Section */}
            <Heading
              letterSpacing="normal"
              mb={4}
              as="h1"
              size="xl"
              visibility={['visible', 'visible', 'hidden']}
            >
              Hello! I'm Benjamin Carlson, a developer and student living and working in CT.
            </Heading>
            <Text
              color={colorSecondary[colorMode]}
              mt={[0, 0, 12]}
            >
              I’m a student, creator, developer, and writer. I go to <Link href="https://www2.ccsu.edu/" color="blue.500" isExternal>CCSU</Link> where I study
            computer science, cybersecurity, and mathematics. On this site you will find
            my projects, gear, writing, and much more. Feel free to reach out via <Link href="mailto:bjcarlson42@gmail.com" color="blue.500">email</Link> or any social media to say hi!
            </Text>

            {/* Experience Section */}
            <Heading mt={8} mb={4} as="h2" size="xl">
              Experience
            </Heading>
            <ExperienceBox
              name="The Law Forum LLC"
              years="Fall 2020 / Summer 2020 / Summer 2019"
              pos="C# Software Developer"
            >
              I first interned with The Law Forum during summer 2019, going into my sophmore year of college.
              Fortunately, I was able to return the following summer, 2020, only this time I worked remotely (due to the pandemic!). Currently, this fall 2020, I am
              working part time with The Law Forum while continuing my Junior year of college.
            </ExperienceBox>
            <ExperienceBox
              name="Middletown, CT City Hall"
              years="Summer 2018"
              pos="I.T. Department"
            >
              The summer after graduating from high school, I had the opportunity to work with my city halls' I.T. department. I didn't
              do any coding but I had a hands on look at the I.T. field and worked on a number of hardware related tasks.
            </ExperienceBox>

            {/* Blog Section */}
            <Heading mt={8} mb={4} as="h2" size="xl">
              Top Blog Posts
                </Heading>
            
            <BlogPost
              title="How Tik Tok Gave Me The Perfect Coding Side Project"
              summary="I got an idea for a weekend coding project from Tik Tok."
              slug="tik-tok-coding-idea"
            />
            <BlogPost
              title="Add A Firebase Backend To Your Flutter App Fast!"
              summary="Learn how to integrate Google's Firebase into your Flutter App."
              slug="connect-flutter-to-firebase"
            />
            <BlogPost
              title="Using JavaScript To Scramble A Rubik’s Cube: An Improved Algorithm"
              summary="I am making a web app that required me to make a rubiks cube scramble. I will show you how to implement this algorithm in JavaScript."
              slug="using-javascript-to-scramble-a-rubiks-cube-2"
            />

            {/* <BlogPost {...FlutterToFirebase} />
            <BlogPost {...JavaScriptCube} /> */}
            <Flex justify="center" width="100%">
              <NextLink href="/blog" passHref>
                <Link _hover="none">
                  <Button rightIcon={<ArrowForwardIcon />} colorScheme="blue" variant="outline">
                    View All Posts
                        </Button>
                </Link>
              </NextLink>
            </Flex>

            {/* Project Section */}
            <Heading letterSpacing="tight" mt={8} size="xl" fontWeight={700} as="h2">
              Featured Projects
            </Heading>
            <FeaturedProjectCard
              title="25 Days Of Flutter"
              href="https://flutter25.com"
              src="/images/flutter25.png"
              color={iconColor[colorMode]}
            >
              25 Days Of Flutter is a 25 day tutorial series designed to take you from a Flutter beginner to coding a complete app using various modern technologies.
            </ FeaturedProjectCard>
            <FeaturedProjectCard
              title="Word Of The Day App"
              href="https://github.com/bjcarlson42/wotd"
              src="/images/wotd.png"
              color={iconColor[colorMode]}
            >
              Word of the day app built with <Code>Dart</Code>, <Code>Flutter</Code>, and <Code>Wordnik API</Code>. Video tutorial posted on YouTube.
            </ FeaturedProjectCard>
            <FeaturedProjectCard
              title="Personal Website"
              href="https://github.com/bjcarlson42/benjamincarlson.io"
              src="/images/logo.png"
              color={iconColor[colorMode]}
            >
              My personal portfolio website you are on now. Built with <Code>Next.js</Code>, <Code>chakra-ui</Code>, <Code>mdx</Code> pages, and serverless functions for realtime data.
            </FeaturedProjectCard>
            <Flex justify="center" width="100%">
              <NextLink href="/projects" passHref>
                <Link _hover="none" mt={8}>
                  <Button rightIcon={<ArrowForwardIcon />} colorScheme="blue" variant="outline">
                    View All Projects
                </Button>
                </Link>
              </NextLink>
            </Flex>

            {/* More On This Site Section */}
            <Heading letterSpacing="tight" mt={8} mb={2} size="xl" fontWeight={700} as="h2">
              More On This Site
           </Heading>
            <Text mb={2} color={colorSecondary[colorMode]}>Be sure to check out all the pages on this site!</Text>

            <Flex wrap="wrap">
              <Link href="/" _hover="none"><Button rightIcon={<ArrowForwardIcon />} colorScheme="blue" variant="outline" mr={2} mt={4}>Home</Button></Link>
              <Link href="/projects" _hover="none"><Button rightIcon={<ArrowForwardIcon />} colorScheme="blue" variant="outline" mr={2} mt={4}>Projects</Button></Link>
              <Link href="/blog" _hover="none"><Button rightIcon={<ArrowForwardIcon />} colorScheme="blue" variant="outline" mr={2} mt={4}>Blog</Button></Link>
              <Link href="/statistics" _hover="none"><Button rightIcon={<ArrowForwardIcon />} colorScheme="blue" variant="outline" mr={2} mt={4}>Statistics</Button></Link>
              <Link href="/about" _hover="none"><Button rightIcon={<ArrowForwardIcon />} colorScheme="blue" variant="outline" mr={2} mt={4}>About</Button></Link>
              <Link href="/gear" _hover="none"><Button rightIcon={<ArrowForwardIcon />} colorScheme="blue" variant="outline" mr={2} mt={4}>Gear</Button></Link>
              <Link href="/hello" _hover="none"><Button rightIcon={<ArrowForwardIcon />} colorScheme="blue" variant="outline" mr={2} mt={4}>Hello</Button></Link>
              <Link href="/thanks" _hover="none"><Button rightIcon={<ArrowForwardIcon />} colorScheme="blue" variant="outline" mr={2} mt={4}>Thanks</Button></Link>
            </Flex>
          </Flex>

          {/* Subscribe Section */}
          <Subscribe />
        </Stack>
      </Container>
    </>
  )
}