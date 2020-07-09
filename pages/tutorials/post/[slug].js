import React from 'react'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import Head from 'next/head'
import Author from '../../../components/Author'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function PostTemplate({ content, data }) {
    // This holds the data between `---` from the .md file
    const frontmatter = data

    return (
        <div className="main">
            <Head>
                <title>{frontmatter.title} | Benjamin J. Carlson</title>
                <meta name="description" content={frontmatter.description} />
            </Head>
            <div className="container">
                <h1 className="text-center" style={{ paddingTop: '75px' }}>{frontmatter.title}</h1>
                <iframe style={{ display: 'block', margin: 'auto' }} width="560" height="315" src={frontmatter.youtube} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <br />
                <p>Outline: {frontmatter.snippet}</p>
                <br />
                <Row>
                    <Col xl xl={9}>
                        <ReactMarkdown source={content} />
                    </Col>
                    <Col xl>

                    </Col>
                </Row>

                <Author name={frontmatter.author} />
            </div>
        </div>
    )
}

PostTemplate.getInitialProps = async (context) => {
    const { slug } = context.query
    // Import our .md file using the `slug` from the URL
    const content = await import(`../content/${slug}.md`)

    // Parse .md data through `matter`
    const data = matter(content.default)

    // Pass data to the component props
    return { ...data }
}