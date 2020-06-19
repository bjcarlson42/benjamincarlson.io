import Head from 'next/head'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

function Projects({ p }) {

    function descFormat(cell) {
        if (cell.length < 50) {
            return cell + '.'
        } else {
            return cell.substr(0, 50) + '...'
        }
    }

    function dateFormat(cell) {
        return cell.substr(0, 10)
    }

    function projName(cell) {
        return capital_letter(cell.split('-').join(' '))
    }

    function capital_letter(str) {
        str = str.split(' ');

        for (let i = 0, x = str.length; i < x; i++) {
            str[i] = str[i][0].toUpperCase() + str[i].substr(1);
        }

        return str.join(' ');
    }

    const columns = [{
        dataField: 'name',
        text: 'Title',
        style: { 'white-space': 'nowrap' },
        formatter: projName,
    },
    {
        dataField: 'description',
        text: 'Description',
        style: { 'white-space': 'nowrap' },
        formatter: descFormat
    },
    {
        dataField: 'language',
        text: 'Main Language'
    },
    {
        dataField: 'created_at',
        text: 'Date Created',
        style: { 'white-space': 'nowrap' },
        formatter: dateFormat
    },
    {
        dataField: 'updated_at',
        text: 'Last Updated',
        style: { 'white-space': 'nowrap' },
        formatter: dateFormat
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
            <div className="container" style={{ marginBottom: '100px' }}>
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