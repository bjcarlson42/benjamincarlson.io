import Head from 'next/head'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
// import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

function Index({ p }) {

    function descFormat(cell) {
        if (cell.length < 40) {
            return cell + '.'
        } else {
            return cell.substr(0, 40) + '...'
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
        sort: true
    },
    {
        dataField: 'description',
        text: 'Description',
        style: { 'white-space': 'nowrap' },
        formatter: descFormat,
        sort: true
    },
    {
        dataField: 'language',
        text: 'Main Language',
        sort: true
    },
    {
        dataField: 'created_at',
        text: 'Date Created',
        style: { 'white-space': 'nowrap' },
        formatter: dateFormat,
        sort: true
    },
    {
        dataField: 'updated_at',
        text: 'Last Updated',
        style: { 'white-space': 'nowrap' },
        formatter: dateFormat,
        sort: true
    },
    {
        dataField: 'forks_count',
        text: 'Forks',
        sort: true
    },
    {
        dataField: 'stargazers_count',
        text: 'Stars',
        sort: true
    },];
    const projects = p

    return (
        <div className='main'>
            <div className="container">
                <Head>
                    <title>Projects | Benjamin J. Carlson</title>
                    <meta name="description" content="View all programming projects for Benjamin Carlson." />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <h1 className="title-padding">Projects Repository</h1>
                <p style={{ color: 'lightgrey', fontSize: '14px' }}>Click on a header to sort the columns</p>
                <div className="table-responsive">
                    <BootstrapTable
                        keyField='name'
                        data={projects}
                        columns={columns}
                        bordered={false}
                    // pagination={paginationFactory()}
                    />
                </div>
            </div>
        </div>
    )
}

Index.getInitialProps = async () => {
    const headers = {
        "Authorization": "Token " + process.env.GITHUB_KEY
    }
    const url = "https://api.github.com/users/bjcarlson42/repos"
    const res = await fetch(url, { "headers": headers })
    const json = await res.json()
    const p = json
    return { p: p }
}

export default Index