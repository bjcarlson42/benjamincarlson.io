import React, { useState, useEffect } from 'react'
import { NextSeo } from 'next-seo'
import {
    useColorMode,
    Heading,
    Text,
    Flex,
    Stack,
    Link,
    SimpleGrid
} from '@chakra-ui/react'
import GhPolyglot from 'gh-polyglot'
import Container from '../components/Container'
import YouTubeData from '../components/YouTubeData'
import GitHubData from '../components/GitHubData'
import StravaData from '../components/StravaData'
import Repos from '../components/statistics/Repos'
import Charts from '../components/statistics/Charts'

import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

const url = 'https://benjamincarlson.io/statistics'
const title = 'Statistics – Benjamin Carlson'
const description = 'My personal dashboard. I use it to keep track of various stats such as YouTube, GitHub, Strava and more.'

const Statistics = () => {
    const { colorMode } = useColorMode()

    const colorSecondary = {
        light: 'gray.700',
        dark: 'gray.400'
    }

    const username = 'bjcarlson42';
    const [userData, setUserData] = useState(null);
    const [langData, setLangData] = useState(null);
    const [repoData, setRepoData] = useState(null);
    const [error, setError] = useState({ active: false, type: 200 });
    const [rateLimit, setRateLimit] = useState(null);

    const getLangData = () => {
        const me = new GhPolyglot(`${username}`);
        me.userStats((err, stats) => {
            if (err) {
                console.error('Error:', err);
                setError({ active: true, type: 400 });
            }
            setLangData(stats);
        });
    };

    const getRepoData = () => {
        fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
            .then(response => {
                if (response.status === 404) {
                    return setError({ active: true, type: 404 });
                }
                if (response.status === 403) {
                    return setError({ active: true, type: 403 });
                }
                return response.json();
            })
            .then(json => setRepoData(json))
            .catch(error => {
                setError({ active: true, type: 200 });
                console.error('Error:', error);
            });
    };

    useEffect(() => {
        fetch(`https://api.github.com/rate_limit`)
            .then(response => response.json())
            .then(json => {
                setRateLimit(json.resources.core);
                if (json.resources.core.remaining < 1) {
                    setError({ active: true, type: 403 });
                }
            });

        getLangData();
        getRepoData();

    }, []);
    const { t } = useTranslation()
    const { locale } = useRouter()
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
                        <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
                            {t('common:statistics')}
                        </Heading>
                    </Flex>
                    <SimpleGrid columns={[1, 2, 3]} w="100%">
                        <YouTubeData />
                        <GitHubData />
                        <StravaData />
                    </SimpleGrid>
                    {/* <Text mt={2} fontSize="12px" color={colorSecondary[colorMode]}>Increase and decrease values are compared to the previous week (Monday 12am EST is the start of a new week) and are in the same unit as the statistic.</Text> */}
                    {langData && repoData && <Charts langData={langData} repoData={repoData} />}
                    {/* {repoData && <Repos repoData={repoData} />} */}
                </Stack>
            </Container>
        </>
    )
}

export default Statistics