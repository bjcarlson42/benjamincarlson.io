import Head from 'next/head'

function WordCounter() {
    return (
        <div style={{ minHeight: '100vh' }}>
            <Head>
                <title>Word Counter Detail Project | Benjamin J. Carlson</title>
                <meta name="description" content="The detail view of Benjamin Carlson's word counter project." />
            </Head>
            <div className="container">
                <div style={{ paddingTop: '100px' }}>
                    <h1 className="center">Word Counter Detail View</h1>
                    <p className="center">This UI is in progrress!</p>
                </div>
            </div>
        </div>
    )
}
export default WordCounter