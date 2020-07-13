import Head from 'next/head'
import Medium from '../components/Medium'

export default function Blog() {
    return (
        <div className='main'>
            <div className='container'>
                <Head>
                    <title>Blog | Benjamin J. Carlson</title>
                    <meta name="description" content="Ben's Blog. I write for medium about various computer science topics." />
                </Head>
                <h1 className="title-padding">Blog</h1>
                <p className="blog-p">I write for Medium about various Computer Science topics. The titles below will redirect you to Medium where you can read my work.</p>
                <Medium />
            </div>
            <style jsx>{`
                .blog-p {
                   font-size: 20px;
                   font-weight: 300; 
                }
            `}
            </style>
        </div>
    )
}