import React, { useState } from 'react'
import { DeleteIcon, CheckCircleIcon } from '@chakra-ui/icons'
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
    List,
    ListItem,
    ListIcon
} from "@chakra-ui/react"

const Todo = () => {
    const toast = useToast()
    const { colorMode } = useColorMode()

    const colorSecondary = {
        light: 'gray.700',
        dark: 'gray.400'
    }

    const borderColor = {
        light: 'gray.200',
        dark: 'gray.600'
    }

    const [todos, setTodos] = useState(['Learn Final Cut Pro X', 'Advanced Python', 'Security'])
    const [todo, setTodo] = useState('')
    const removeTodo = todo => {
        setTodos(todos.filter(t => t !== todo))
    }

    return (
        <Stack spacing={4} w="100%">
            <Heading letterSpacing="tight" mt={8} size="lg" fontWeight={700} as="h2">TODO List</Heading>
            <Text>Here is a list of things I plan to learn over the next 6 months or so.</Text>
            <InputGroup size="md" mt={4} borderColor="gray.500" borderColor={borderColor[colorMode]}>
                <Input
                    aria-label="Eenter a TODO!"
                    placeholder="Learn Python"
                    value={todo}
                    onChange={e => setTodo(e.target.value)}
                />
                <InputRightElement width="6.75rem">
                    <Button
                        fontWeight="bold"
                        h="1.75rem"
                        size="sm"
                        colorScheme="blue"
                        variant="outline"
                        px={10}
                        onClick={() => {
                            if (todo == '')
                                toast({
                                    title: 'Whoops! There\'s an error!',
                                    description: "TODO can't be empty!",
                                    status: "error",
                                    duration: 3000,
                                    isClosable: true,
                                })
                            else {
                                setTodos([...todos, todo])
                                setTodo('')
                            }
                        }}
                    >
                        Add!
                        </Button>
                </InputRightElement>
            </InputGroup>
            <List spacing={3}>
                {todos.map((todo, index) => (
                    <ListItem key={index} color={colorSecondary[colorMode]}>
                        <Flex justify="space-between" align="center">
                            <Flex align="center">
                                <ListIcon as={CheckCircleIcon} color="green.500" />
                                {todo}
                            </Flex>
                            <IconButton icon={<DeleteIcon color="red.400" />} onClick={() => removeTodo(todo)} />
                        </Flex>
                    </ListItem>
                ))}
            </List>
        </Stack>

    )
}

export default Todo