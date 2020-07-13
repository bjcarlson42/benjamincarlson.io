import React from 'react'
import useSWR from 'swr'
import fetcher from '../lib/fetcher'
import '../pages/api/blog'

const Medium = () => {
    const { data, error } = useSWR('/api/blog', fetcher)
    function dateFormat(date) {
        var d = new Date(date.substr(0, 10))
        return (d).toDateString()
    }
    if (error) return <div className="container main center">Failed to load posts</div>
    if (!data) return <div className="container main center" style={{ marginTop: '200px' }}>Loading...</div>

    return (
        <section>
            {data.posts.map(post =>
                <div key={post.guid} className="blog-post">
                    <a href={post.link} target='_blank'><h3 className="blog-post-title">{post.title}</h3></a>
                    <p>Posted on {dateFormat(post.pubDate)}</p>
                </div>)}
        </section>
    )
}

export default Medium;