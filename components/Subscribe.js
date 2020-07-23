import React, { useState, useRef } from 'react'

const Subscribe = () => {
    const inputEl = useRef(null)
    const [loading, setLoading] = useState(false)

    const subscribe = async (e) => {
        e.preventDefault()
        setLoading(true)

        const res = await fetch('/api/subscribe', {
            body: JSON.stringify({
                email: inputEl.current.value
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })

        setLoading(false)
        const { error } = await res.json()

        if (error) {
            alert(error)
            return
        }

        inputEl.current.value = ''
        alert('You are subscribed!')
    }

    return (
        <div className="container-subscribe">
            <h3 className="text-center">Subscribe to my newsletter!</h3>
            <p className="text-center">Your time is valuable and so is mine. That's why I send out an email only once a month with my recent YouTube videos, Medium posts, and programming related things I've found interesting over the past month.</p>
            <div className="text-center form-group">
                <input
                    aria-label="Email for newsletter"
                    placeholder="benc@benjamincarlson.io"
                    ref={inputEl}
                    type="email"
                    required
                    className="form-control"
                />

                <input
                    onClick={subscribe}
                    type="submit"
                    value="Subscribe"
                    className="btn btn-primary"
                    style={{ width: '100%' }}
                />
            </div>
            <style jsx>{`
                .container-subscribe {
                    padding: 15px;
                    margin: 10px 150px;
                    background-color: lightblue;
                }

                @media only screen and (max-width: 768px) {
                    .container-subscribe {
                    padding: 10px;
                    margin: 10px 0;
                    }
                }

                @media only screen and (max-width: 425px) {
                    .container-subscribe {
                        background-color: #fff;
                    }
                }
            `}
            </style>
        </div>
    )
}

export default Subscribe;