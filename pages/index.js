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
  Button,
  Divider
} from '@chakra-ui/react'

import Container from '../components/Container'
import ExperienceBox from '../components/ExperienceBox'
import FeaturedProjectCard from '../components/FeaturedProjectCard'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import BlogPost from '../components/blog/BlogPost'
import Todo from '../components/Todo'
import TechStack from '../components/TechStack'

const url = 'https://benjamincarlson.io/'
const title = 'Home – Benjamin Carlson'
const description = 'Developer, creator, writer, and student living and working in CT. Browse Ben\'s latest projects, experience, blog posts, and statistics.'

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
        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="700px"
          px={4}
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
          >
            <Heading
              letterSpacing="tight"
              mb={4}
              as="h1"
              size="xl"
            >
              Hello! I'm Benjamin Carlson, a developer and student living and working in CT.
            </Heading>
            <Text
              color={colorSecondary[colorMode]}
            >
              I go to <Link href="https://www2.ccsu.edu/" color={linkColor[colorMode]} isExternal>CCSU</Link> where I study computer science, cybersecurity, and mathematics.
            My personal website is where I showcase my projects, writing, statistics, experience, and more.
            It also serves as a sandbox to play around with new technologies!
            Feel free to reach out via <Link href="mailto:bjcarlson42@gmail.com" color={linkColor[colorMode]}>email</Link> or any social media with any inquiries.
            </Text>

            <Heading letterSpacing="tight" mt={8} size="lg" fontWeight={700} as="h2">
              Experience
            </Heading>
            <ExperienceBox
              name="The Law Forum LLC"
              years="Summer 2019, 2020, Fall 2020, Spring 2021"
              pos="C# Software Developer"
              badge_1='Part Time'
              badge_2='Internship'
            >
              At the Law Forum, I use in ASP .NET, C#, HTML/CSS, JavaScript, and SQL to create and update internal websites for
              both The Law Forum and clients. I have completed 2 summer internships and over 6 months of part time work both
              in the office and remote.
            </ExperienceBox>
            <ExperienceBox
              name="Middletown, CT City Hall"
              years="Summer 2018"
              pos="I.T. Department"
              badge_1="Internship"
            >
              The summer after graduating from high school, I had the opportunity to work with my city halls' I.T. department. I didn't
              do any coding but I had a hands on look at the I.T. field and worked on a number of hardware related tasks.
            </ExperienceBox>

            <Divider mb={12} mt={16} w='90%' alignSelf="center" />

            <Todo />

            <Divider mb={12} mt={16} w='90%' alignSelf="center" />

            <Heading letterSpacing="tight" mt={8} mb={4} size="lg" fontWeight={700} as="h2">
              Latest Blog Post
            </Heading>

            <BlogPost
              title="UseEffect In Next.JS - React Hooks"
              summary="Learn what useEffect is learn how to use useEffect in Next.JS."
              slug="using-react-useeffect"
            />

            <Divider mb={12} mt={16} w='90%' alignSelf="center" />

            <Heading letterSpacing="tight" mt={8} mb={4} size="lg" fontWeight={700} as="h2">
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

            <Flex justify="center" width="100%">
              <NextLink href="/blog" passHref>
                <Link _hover="none">
                  <Button rightIcon={<ArrowForwardIcon />} colorScheme="gray" variant="outline" aria-label="view all posts">
                    View All Posts
                  </Button>
                </Link>
              </NextLink>
            </Flex>

            <Divider mb={12} mt={16} w='90%' alignSelf="center" />

            <Heading letterSpacing="tight" mt={8} size="lg" fontWeight={700} as="h2">
              Featured Projects
            </Heading>
            <FeaturedProjectCard
              title="25 Days Of Flutter"
              href="https://flutter25.com"
              src="/images/flutter25.png"
              alt='Flutter 25 logo'
              color={iconColor[colorMode]}
            >
              25 Days Of Flutter is a 25 day tutorial series designed to take you from a Flutter beginner to coding a complete app using various modern technologies.
            </ FeaturedProjectCard>
            <FeaturedProjectCard
              title="Word Of The Day App"
              href="https://github.com/bjcarlson42/wotd"
              src="/images/wotd.png"
              alt='Word Of The Day logo'
              color={iconColor[colorMode]}
            >
              Word of the day app built with <Code>Dart</Code>, <Code>Flutter</Code>, and <Code>Wordnik API</Code>. Video tutorial posted on YouTube.
            </ FeaturedProjectCard>
            <FeaturedProjectCard
              title="Personal Website"
              href="https://github.com/bjcarlson42/benjamincarlson.io"
              src="/images/logo.png"
              alt='Personal website logo'
              color={iconColor[colorMode]}
            >
              My personal portfolio website you are on now. Built with <Code>Next.js</Code>, <Code>chakra-ui</Code>, <Code>mdx</Code> pages, and serverless functions for realtime data.
            </FeaturedProjectCard>
            <Flex justify="center" width="100%">
              <NextLink href="/projects" passHref>
                <Link _hover="none" mt={8}>
                  <Button rightIcon={<ArrowForwardIcon />} colorScheme="gray" variant="outline" aria-label="view all projects">
                    View All Projects
                </Button>
                </Link>
              </NextLink>
            </Flex>

            <Divider mb={12} mt={16} w='90%' alignSelf="center" />

            <Flex
              justify="start"
              flexDirection="column"
              display={['none', 'flex', 'flex']}
            >
              <TechStack />
            </Flex>

            <Divider mb={12} mt={16} w='90%' alignSelf="center" display={['none', 'flex', 'flex']}/>

            <Text mt={8}>Looks like you've made it to the end of this page... feel free to <Link href="https://youtube.com/benjamincarlson" isExternal color={linkColor[colorMode]}>check out my YouTube</Link> where
            you can find even more programming content.
            </Text>

          </Flex>
        </Stack>
      </Container>
    </>
  )
}