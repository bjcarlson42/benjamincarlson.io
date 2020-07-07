import Head from 'next/head'
import { parse } from 'node-html-parser';

function Blog({ posts }) {
    function dateFormat(date) {
        var d = new Date(date.substr(0, 10))
        return (d).toDateString()
    }
    return (
        <div className='main' style={{ minHeight: '100vh' }}>
            <div className='container'>
                <Head>
                    <title>Blog | Benjamin J. Carlson</title>
                    <meta name="description" content="Ben's Blog. I write for medium about various computer science topics." />
                </Head>
                <h1 className="title-padding">Blog</h1>
                <p style={{
                    fontSize: '20px',
                    fontWeight: '300',
                }}>I write for Medium about various Computer Science topics. The titles below will redirect you to Medium where you can read my work.</p>

                <section>
                    {posts.map(post =>
                        <div key={post.guid} className="blog-post">
                            <a href={post.link} target='_blank'><h3 className="blog-post-title">{post.title}</h3></a>
                            {/* <a href={post.link} target='_blank'><p className="blog-post-description">{parse(post.description)}</p></a> */}
                            <p>Posted on {dateFormat(post.pubDate)}</p>
                        </div>)}
                </section>
            </div>
        </div>
    )
}

Blog.getInitialProps = async () => {
    const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@benjamincarlson')
    const json = await res.json()
    const posts = json.items
    return { posts: posts }
}

export default Blog