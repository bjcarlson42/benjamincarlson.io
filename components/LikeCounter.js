import { useState, useEffect } from 'react'
import {
    Button,
    useToast,
    ButtonGroup
} from "@chakra-ui/react"
import format from 'comma-number'
import { BiLike } from "react-icons/bi"

import loadDb from '../lib/db'

const LikeCounter = ({ id }) => {
    const [likes, setLikes] = useState('')
    const [loading, setLoading] = useState(false)
    const [liked, setLiked] = useState(false)
    const [color, setColor] = useState('gray')
    const toast = useToast()

    useEffect(() => {
        const onLikes = (newLikes) => setLikes(newLikes.val())
        let db

        const fetchData = async () => {
            db = await loadDb()
            db.ref('likes').child(id).on('value', onLikes)
        }

        fetchData()

        return () => {
            if (db) {
                db.ref('likes').child(id).off('value', onLikes)
            }
        }
    }, [id])

    const like = async (e) => {
        if (!liked) {
            e.preventDefault()
            setLoading(true)
            const registerLike = () =>
                fetch(`/api/increment-likes?id=${encodeURIComponent(id)}`)

            registerLike()
            setLoading(false)
            setLiked(true)
            setColor('yellow.500')
            toast({
                title: "Thanks for liking!",
                status: "success",
                duration: 3000,
                isClosable: true,
            })
        } else {
            toast({
                title: "Already Liked!",
                status: "error",
                duration: 3000,
                isClosable: true,
            })
        }

    }

    return (
        <>
            <ButtonGroup>
                <Button
                    leftIcon={<BiLike />}
                    colorScheme="gray"
                    variant="outline"
                    onClick={like}
                    isLoading={loading}
                    color={color}
                    fontSize="sm"
                    px={2}
                >
                    {likes ? format(likes) : '–––'}
                </Button>
            </ButtonGroup>
        </>
    )
}

export default LikeCounter