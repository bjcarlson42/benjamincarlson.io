import Head from 'next/head'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

function Projects({ p }) {
    const columns = [{
        dataField: 'name',
        text: 'Title'
    },
    {
        dataField: 'description',
        text: 'Description'
    },
    {
        dataField: 'language',
        text: 'Main Language'
    },
    {
        dataField: 'created_at',
        text: 'Date Created'
    },
    {
        dataField: 'updated_at',
        text: 'Last Updated'
    },
    {
        dataField: 'forks_count',
        text: 'Forks'
    },
    {
        dataField: 'stargazers_count',
        text: 'Stars'
    },];
    const projects = p

    return (
        <div>
            <Head>
                <title>Projects | Benjamin J. Carlson</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="container" style={{marginBottom: '100px'}}>
                <h1 style={{ fontWeight: '300' }}>Projects Repository</h1>
                <div className="table-responsive">
                    <BootstrapTable
                        keyField='id'
                        data={projects}
                        columns={columns}
                        bordered={false}
                    />
                </div>
            </div>
        </div>
    )
}

Projects.getInitialProps = async () => {
    const res = await fetch('https://api.github.com/users/bjcarlson42/repos')
    const json = await res.json()
    const p = json
    return { p: p }
}

export default Projects