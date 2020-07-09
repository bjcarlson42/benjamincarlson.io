import Head from 'next/head'

function Grid() {
    return (
        <div style={{ minHeight: '100vh' }}>
            <Head>
                <title>Grid Detail Project | Benjamin J. Carlson</title>
                <meta name="description" content="The detail view of Benjamin Carlson's grid project." />
            </Head>
            <div className="container">
                <div style={{paddingTop: '100px'}}>
                    <h1 className="center">Grid Detail View</h1>
                    <p className="center">This UI is in progrress!</p>
                </div>
            </div>

        </div>
    )
}
export default Grid 