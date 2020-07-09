import Head from 'next/head'

function PersonalWebsite() {
    return (
        <div style={{ minHeight: '100vh' }}>
            <Head>
                <title>Personal Website Detail Project | Benjamin J. Carlson</title>
                <meta name="description" content="The detail view of Benjamin Carlson's personal website project." />
            </Head>
            <div className="container">
                <div style={{ paddingTop: '100px' }}>
                    <h1 className="center">Personal Website</h1>
                    <p className="text-center">My personal website you are currently on... <a href="https://github.com/bjcarlson42/personal-website" target="_blank" className="animate-underline">View the code here</a></p>
                    <p className="text-center"><a href="/#projects-section" className="animate-underline">Back to all projects</a></p>
                </div>
            </div>
        </div>
    )
}
export default PersonalWebsite