import React from 'react'
import {
    useColorMode,
    Heading,
    Text,
    Flex,
    List,
    ListItem,
    Icon,
    Stack,
    Divider,
    Link
} from '@chakra-ui/core'

const YearDivider = () => {
    const { colorMode } = useColorMode()
    const borderColor = {
        light: 'gray.200',
        dark: 'gray.600'
    }

    return <Divider borderColor={borderColor[colorMode]} my={8} w="100%" />
}

const TimelineStep = ({ title, children }) => {
    const { colorMode } = useColorMode()
    const color = {
        light: 'gray.700',
        dark: 'gray.400'
    }
    const checkColor = {
        light: 'black.700',
        dark: 'white.400'
    }

    return (
        <ListItem>
            <Stack ml={2} mb={4}>
                <Flex align="center">
                    <Icon name="check" mr={2} color={checkColor[colorMode]}/>
                    <Text fontWeight="medium">{title}</Text>
                </Flex>
                <Text color={color[colorMode]} ml={6}>
                    {children}
                </Text>
            </Stack>
        </ListItem>
    )
}

const TimelineFull = () => (
    <>
        <Heading
            as="h3"
            size="lg"
            fontWeight="bold"
            my={4}
            letterSpacing="tighter"
        >
            2020
      </Heading>
        <List>
            <TimelineStep title="Worked First Part Time CS Job 👔">
                Continuing my summer internship by working as a software developer part time while balancing school and running is a good feeling.
            </TimelineStep>
            <TimelineStep title="Interned For A Second Summer at The Law Forum ⚖️">
                Because of the pandemic, all of the companies I was planning to intern at cancelled their
                summer programs, and some even withdrew their offers! Fortuantely, I was able to return to The Law Forum for a second summer - only this time I worked remotely.
            </TimelineStep>
            <TimelineStep title="Started A YouTube Channel 📹">
                I made a <Link href="https://youtube.com/benjamincarlson" color="blue.500" isExternal>YouTube channel</Link> to teach programming and document the projects I work on!
            </TimelineStep>
            <TimelineStep title="Started to Write For Medium ✍️">
                I started writing programming tutorials on <Link href="https://medium.com/@benjamincarlson" color="blue.500" isExternal>Medium</Link>. My work has been featured in many publications including <Link href="https://medium.com/swlh" color="blue.500" isExternal>The Startup</Link>, <Link href="https://medium.com/flutter-community" color="blue.500" isExternal>Flutter Community</Link>,
                and <Link href="https://levelup.gitconnected.com/" color="blue.500" isExternal>Level Up Coding</Link>.
            </TimelineStep>
            <TimelineStep title="Dropped Out Of College 😈">
                Just Kidding... I realized that I wanted to study Computer Science instead of Data Science and since Bryant didn't offer CS, I had to transfer schools to CCSU.
            </TimelineStep>
        </List>

        <YearDivider />
        <Heading
            as="h3"
            size="lg"
            fontWeight="bold"
            my={4}
            letterSpacing="tighter"
        >
            2019
      </Heading>
        <List>
            <TimelineStep title="Landed my First CS Internship 😎">
                I worked at The Law Forum as a C# Software Developer. I learned more this summer than I had my entire first year at college.
            </TimelineStep>
            <TimelineStep title="Coded And Deployed My First Website 🐱‍💻">
                My <Link href="https://github.com/bjcarlson42/personal-website-archived" color="blue.500" isExternal>first website</Link> was a one page portfolio built with only HTML, CSS, and JS.
            </TimelineStep>
        </List>

        <YearDivider />
        <Heading
            as="h3"
            size="lg"
            fontWeight="bold"
            my={4}
            letterSpacing="tighter"
        >
            2018
      </Heading>
        <List>
            <TimelineStep title="Attended Bryant University 🏫">
                At Bryant I studied Data Science and ran Division 1 cross country and track.
            </TimelineStep>
            <TimelineStep title="Graduated High School 🎓">
                 The past 4 years went by in a flash although I'm excited to start a new chapter in my life.
            </TimelineStep>
        </List>

        <YearDivider />
        <Heading
            as="h3"
            size="lg"
            fontWeight="bold"
            mb={4}
            letterSpacing="tighter"
        >
            2017
      </Heading>
        <List>
            <TimelineStep title="First I.T. Internship 🏛️">
                I worked for my city halls' I.T. department the summer after my senior year.
            </TimelineStep>
            <TimelineStep title="Coded First App 📱">
                I used Java to create multiple apps for Android. I learned by watching YouTube Videos and searching the web for anything I could find on the topic.
            </TimelineStep>
            <TimelineStep title="Started Cubing Club 🧩">
                Two friends and I founded our high schools Rubiks Cube club! My record for solving the cube was 11 seconds.
            </TimelineStep>
            <TimelineStep title="Took my First Computer Science Class 💻">
                My senior year of HS I took AP Coputer Science online. I instantly knew I wanted to do something with code when I grew up.
            </TimelineStep>
        </List>

        <YearDivider />
        <Heading
            as="h3"
            size="lg"
            fontWeight="bold"
            mb={4}
            letterSpacing="tighter"
        >
            2012
        </Heading>
        <List>
            <TimelineStep title="Joined XC and Track 🏃‍♂️">
                This was the beginning of my running career. I remember running a 5:40 mile in 7th grade.
            </TimelineStep>
        </List>

        <YearDivider />
        <Heading
            as="h3"
            size="lg"
            fontWeight="bold"
            mb={4}
            letterSpacing="tighter"
        >
            2000
      </Heading>
        <List>
            <TimelineStep title="Born 👶"></TimelineStep>
        </List>
    </>
)

export default TimelineFull