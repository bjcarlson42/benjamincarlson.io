import Head from 'next/head'

function Blog({ posts }) {
    function dateFormat(date) {
        var d = new Date(date.substr(0, 10))
        return(d).toDateString()
    }
    return (
        <div className='container'>
            <Head>
                <title>Blog | Benjamin J. Carlson</title>
            </Head>
            <h1>Blog</h1>
            <p style={{
                fontSize: '20px',
                fontWeight: '300',
            }}>I write for Medium about various Computer Science topics. The titles below will redirect you to Medium where you can read my work.</p>
            <hr />
            {posts.map(post => <p key={post.guid}><a href={post.link} target='_blank' style={{
                color: '#000',
            }}>{post.title}</a> - {dateFormat(post.pubDate)}</p>)}
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