import {
    Button,
    Flex,
    Box,
    useColorModeValue,
    Heading,
    Text,
    AspectRatio,
    Link,
    ButtonGroup,
    SimpleGrid,
} from '@chakra-ui/react'
import { YoutubeIcon, GitHubIcon } from '../components/CustomIcons'
import { motion } from "framer-motion"

export default function Hero() {
    return (
        <Box bgColor={useColorModeValue("rgb(248, 250, 252)", "gray.900")}>
            <Flex
                w="100%"
                flexDir={["column", "column", "row"]}
                align="center"
                px={4}
                mt={[8, 8, 16]}
                mb={8}
                maxW="1200px"
                mx="auto"
            >
                <Flex flexDir="column" w={["100%", "100%", "50%"]} mr={[0, 0, 4]}>
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: .7, delay: .4 }}
                    >
                        <Heading
                            letterSpacing="tight"
                            mb={4}
                            as="h1"
                            size="xl"
                            fontWeight={700}
                        >
                            Hello! I'm Benjamin Carlson -
                        </Heading>
                    </motion.div>
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: .7, delay: .8 }}
                    >
                        <Text
                            fontSize="xl"
                            color={useColorModeValue("gray.600", "gray.500")}
                            mb={6}
                        >
                            A <strong>software engineer 👨‍💻</strong>, <strong>creator 📹</strong>, and <strong>student 👨‍🎓</strong> living and working in CT. You've stumbled onto my online portfolio, resume, blog, and all things in between.
                        </Text>
                    </motion.div>
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: .7, delay: 1.2 }}
                    >
                        <Flex flexDir={["column", "row", "row"]}>
                            <Link href="https://youtube.com/benjamincarlson" _hover={{ textDecor: 'none' }} w={["100%", "100%", null]} mr={[0, 2, 2]} mb={[2, 0, 0]} isExternal>
                                <Button
                                    w={["100%", "100%", null]}
                                    colorScheme="red"
                                    size="md"
                                    rightIcon={<YoutubeIcon fontSize="xl" />}
                                    boxShadow={useColorModeValue("0px 8px 26px rgba(0, 0, 0, 0.2)", "0px 8px 26px rgba(0, 0, 0, 0.7)")}
                                >
                                    Visit my YouTube
                                </Button>
                            </Link>
                            <Link href="https://github.com/sponsors/bjcarlson42" _hover={{ textDecor: 'none' }} w={["100%", "100%", null]} isExternal>
                                <Button
                                    w={["100%", "100%", null]}
                                    colorScheme="gray"
                                    variant="outline"
                                    size="md"
                                    rightIcon={<GitHubIcon fontSize="xl" />}
                                    boxShadow={useColorModeValue("0px 8px 26px rgba(0, 0, 0, 0.2)", "0px 8px 26px rgba(0, 0, 0, 0.7)")}
                                >
                                    Sponsor me on GitHub
                                </Button>
                            </Link>
                        </Flex>
                    </motion.div>
                </Flex>
                <Box mt={[10, 10, 0]} w={["100%", "100%", "50%"]}>
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: .7, delay: 1.6 }}
                    >
                        <AspectRatio ratio={16 / 9}>
                            <iframe src="https://www.youtube.com/embed/Cn0OKuG2mzM" alt="Featured YouTube video" allowFullScreen={true} style={{ borderRadius: 10 }} />
                        </AspectRatio>
                    </motion.div>
                </Box>
            </Flex>
        </Box>
    )
}
