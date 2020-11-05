import React, { useState } from 'react'
import useSWR from 'swr'
import fetcher from '../lib/fetcher'
import {
    useColorMode,
    Text,
    Flex,
    Box,
    Link,
    Icon,
    InputGroup,
    Input,
    InputRightElement,
    SimpleGrid
} from '@chakra-ui/core'

const ProjectItem = ({ name, desc, star_count, href, language }) => {
    const { colorMode } = useColorMode()
    const color = {
        light: 'gray.700',
        dark: 'gray.400'
    };

    return (
        <Link href={href} isExternal _hover={{
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
            textDecoration: 'none',
        }}>
            <Box w='100%' h="100%" borderWidth="1px" rounded="md" overflow="hidden" p={2}>
                <Flex justify="space-between">
                    <Flex align="center">
                        <Text as="h2" fontSize="xl" fontWeight="medium">{name}</Text>
                        <Icon ml={2} name="external-link"></Icon>
                    </Flex>
                    <Flex align="center">
                        <Text>{star_count}</Text>
                        <Icon ml={2} name="star" color="yellow.300" />
                    </Flex>
                </Flex>
                <Flex justify="space-between">
                    <Flex align="center">
                        <Text color={color[colorMode]}>
                            {desc}
                        </Text>
                    </Flex>
                    <Flex align="flex-end">
                        <Text color={color[colorMode]} ml={4}>{language}</Text>
                    </Flex>
                </Flex>
            </Box>
        </Link>
    )
}

const ProjectListFull = () => {
    const [searchValue, setSearchValue] = useState('');
    const { data, error } = useSWR('/api/projects', fetcher)
    if (error) return <div style={{ width: '100%' }}>Failed to load projects! Please check your internet connnection. If the error persists, contact me.</div>
    if (!data) return (
        <div style={{ width: '100%' }}>
            <InputGroup mb={4} mr={4} w="100%">
                <Input
                    aria-label="Search by name, description, and language"
                    placeholder="Search by name, description, and language"
                />
                <InputRightElement>
                    <Icon name="search" color="gray.300" />
                </InputRightElement>
            </InputGroup>
            <SimpleGrid columns={[1, 1, 2]} spacing="20px">
                <ProjectItem key="loading-1" name="---" star_count="---" desc="---" language="---"></ProjectItem>
                <ProjectItem key="loading-2" name="---" star_count="---" desc="---" language="---"></ProjectItem>
            </SimpleGrid>
        </div>
    )

    function projName(str) {
        const exceptions = ['benjamincarlson.io', 'flutter-json', 'flutter-ui', 'mm-kennels', 'wotd'] // names of repos that I don't watch changed
        if (exceptions.includes(str)) {
            // make additional changes in here if needed
            // ex:
            // if (str == 'wotd') {
            //     return 'word of the day'
            // }
            return str
        }
        return capital_letter(str.split('-').join(' '))
    }

    function capital_letter(str) {
        str = str.split(' ');

        for (let i = 0, x = str.length; i < x; i++) {
            str[i] = str[i][0].toUpperCase() + str[i].substr(1);
        }

        return str.join(' ');
    }

    const filteredProjects = Object(data.repos)
        .filter((post) =>
            post.name.toLowerCase().includes(searchValue.toLowerCase())
            || post.description.toLowerCase().includes(searchValue.toLowerCase())
            || post.language.toLowerCase().includes(searchValue.toLowerCase())
        )

    return (
        <>
            <InputGroup mb={4} mr={4} w="100%">
                <Input
                    aria-label="Search by name, description, and language"
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder="Search by name, description, and language"
                />
                <InputRightElement>
                    <Icon name="search" color="gray.300" />
                </InputRightElement>
            </InputGroup>
            <SimpleGrid columns={[1, 1, 2]} spacing="20px">
                {!filteredProjects.length && 'No projects found.'}
                {filteredProjects.map((p) => (
                    <ProjectItem key={p.name} name={projName(p.name)} star_count={p.stars} href={p.url} desc={p.description} language={p.language}></ProjectItem>
                ))}
            </SimpleGrid>
        </>
    )
}

export default ProjectListFull