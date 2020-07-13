import React, { useState, useRef } from 'react';

const Subscribe = () => {
    const [loading, setLoading] = useState(false);
    const inputEl = useRef(null);

    const subscribe = async (e) => {
        e.preventDefault();
        setLoading(true);

        const res = await fetch('/api/subscribe', {
            body: JSON.stringify({
                email: inputEl.current.value
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        });

        setLoading(false);
        const { error } = await res.json();

        if (error) {
            alert(error)
            return;
        }

        inputEl.current.value = '';
        alert('You are subscribed!')
    };

    return (
        <div className="container-subscribe">
            <hr />
            <h3 className="text-center">Subscribe to my newsletter!</h3>
            <p className="text-center">Your time is valuable and so is mine. That's why I send out an email only once a month with my recent YouTube videos, Medium posts, and programming related things I've found interesting over the past month.</p>
            <div className="text-center">
                <input
                    aria-label="Email for newsletter"
                    placeholder="benc@benjamincarlson.io"
                    ref={inputEl}
                    type="email"
                    className="email-input-subscribe"
                    required
                />

                <input
                    isLoading={loading}
                    onClick={subscribe}
                    type="submit"
                    value="Subscribe"
                    className="btn btn-primary"
                />
            </div>
            <style jsx>{`
                .email-input-subscribe {
                    border: none;
                    border-bottom: 1px solid lightgrey;
                    width: 200px;
                    margin: 10px;
                    padding: 5px;
                }

                .container-subscribe {
                    padding: 20px;
                    margin: 10px 0;
                }
            `}
            </style>
        </div>
    );
};

export default Subscribe;