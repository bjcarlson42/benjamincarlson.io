import React, { useState } from 'react'
import { DeleteIcon, Search2Icon, ChevronRightIcon } from '@chakra-ui/icons'
import {
    useToast,
    Input,
    Stack,
    InputGroup,
    Button,
    useColorMode,
    Text,
    Heading,
    InputRightElement,
    Flex,
    IconButton,
    ListItem,
    ListIcon,
    OrderedList,
    Tooltip,
    InputLeftElement,
    useColorModeValue,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Divider,
    Box,
    Icon,
    Link,
} from "@chakra-ui/react"

const Todo = () => {
    const toast = useToast()
    const { colorMode } = useColorMode()
    const { isOpen, onOpen, onClose } = useDisclosure()

    const colorSecondary = {
        light: 'gray.600',
        dark: 'gray.400',
    }

    const borderColor = {
        light: 'gray.200',
        dark: 'gray.600',
    }

    const colorSmall = {
        light: 'gray.400',
        dark: 'gray.600',
    }

    const myTodos = [
        {
            completed: false,
            title: 'Improve Final Cut Pro skills 🎥',
        },
        {
            completed: false,
            title: 'Finish my degree 🎓',
        },
        {
            completed: false,
            title: 'Grow my YouTube channel 📺',
        },
        {
            completed: false,
            title: 'Grow coffeeclass.io ☕',
        },
    ]

    const [todos, setTodos] = useState(myTodos)
    const [input, setInput] = useState('')
    const removeTodo = todo => {
        setTodos(todos.filter(t => t !== todo))
    }

    const toggleCompleted = todo => {
        todo.completed = !todo.completed
        setTodos([...todos])
    }

    const addTodo = () => {
        setTodos(todos.concat({
            completed: false,
            title: input,
        }))
        setInput('')
    }

    return (
        <>
            <Box as="section" w="100%" mt={10} mb={20}>
                <Stack spacing={4} w="100%">
                    <Heading letterSpacing="tight" size="lg" fontWeight={700} as="h2">Todo List 📝</Heading>
                    <Text color={colorSecondary[colorMode]}>Here is a list of things I plan to accomplish over the next year. Try it out yourself!</Text>
                    <InputGroup size="md" mt={4} borderColor="gray.500" borderColor={borderColor[colorMode]}>
                        <InputLeftElement
                            pointerEvents="none"
                            children={<Search2Icon color={useColorModeValue("gray.500", "gray.600")} />}
                        />
                        <Input
                            aria-label="Enter a Todo!"
                            placeholder="Improve Python skills 🐍"
                            value={input}
                            onChange={e => setInput(e.target.value)}
                        />
                        <InputRightElement width="6.75rem">
                            <Button
                                aria-label="Add a TODO!"
                                fontWeight="bold"
                                h="1.75rem"
                                size="md"
                                colorScheme="gray"
                                mr={2}
                                variant="outline"
                                px={10}
                                onClick={() => {
                                    if (input == '')
                                        toast({
                                            title: 'Whoops! There\'s an error!',
                                            description: "Input can't be empty!",
                                            status: "error",
                                            duration: 2000,
                                            isClosable: true,
                                        })
                                    else {
                                        addTodo(input)
                                    }
                                }}
                            >
                                Add Todo!
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    <Flex flexDir="column">
                        {todos.map((todo, index) => (
                            <Flex
                                key={index}
                                justify="space-between"
                                align="center"
                                my={1}
                            >
                                <Flex align="center">
                                    <Icon fontSize="xl" mr={2} as={ChevronRightIcon} color={colorSecondary[colorMode]} />
                                    <Tooltip label={`Click "${todo.title}" to mark as completed.`} placement="top" hasArrow>
                                        <Text color={colorSecondary[colorMode]} textDecor={todo.completed && "line-through"} _hover={{ cursor: 'pointer' }} onClick={() => toggleCompleted(todo)}>{todo.title}</Text>
                                    </Tooltip>
                                </Flex>
                                <Tooltip label={`Delete "${todo.title}"`} placement="top" hasArrow>
                                    <IconButton aria-label={`Delete "${todo.title}" from Todo list.`} icon={<DeleteIcon color="red.400" />} onClick={() => removeTodo(todo)} />
                                </Tooltip>
                            </Flex>
                        ))}
                    </Flex>
                    <Flex align="center">
                        <Text onClick={() => setTodos(myTodos)} _hover={{ cursor: 'pointer' }} color={colorSmall[colorMode]}>Reset</Text>
                        <Divider orientation="vertical" mx={2} h={4} />
                        <Text onClick={onOpen} _hover={{ cursor: 'pointer' }} color={colorSmall[colorMode]}>Help</Text>
                    </Flex>
                </Stack>
            </Box>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Todo List Help</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <OrderedList>
                            <ListItem>
                                <Text fontWeight="bold">Add a Todo</Text>
                                <Text>Input your Todo and click the "Add Todo!" button to add a new Todo.</Text>
                            </ListItem>
                            <ListItem>
                                <Text fontWeight="bold">Reset</Text>
                                <Text>Click the "Reset" button to reset the list.</Text>
                            </ListItem>
                            <ListItem>
                                <Text fontWeight="bold">Delete</Text>
                                <Text>Click the "Delete" button to delete a Todo.</Text>
                            </ListItem>
                            <ListItem>
                                <Text fontWeight="bold">Completed</Text>
                                <Text>Click a Todo to mark it as completed.</Text>
                            </ListItem>
                            <ListItem>
                                <Text fontWeight="bold">View Code</Text>
                                <Text>Click the "View Code" button to view the code on GitHub for this simple TODO list.</Text>
                            </ListItem>
                        </OrderedList>
                        <Divider my={6} />
                        <Text><strong>Current state of Todo List:</strong> [{todos.map(t => { return `{"${t.title}",${t.completed}},` })}]</Text>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Link
                            href="https://github.com/bjcarlson42/benjamincarlson.io/blob/master/components/Todo.js"
                            _hover={{ textDecor: 'none' }}
                            isExternal
                        >
                            <Button variant="ghost">View Code</Button>
                        </Link>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Todo