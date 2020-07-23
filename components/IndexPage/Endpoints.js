import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'

const Endpoint = () => {

    const columns = [{
        dataField: 'name',
        text: 'Name',
        style: { 'white-space': 'nowrap' },
    },
    {
        dataField: 'end',
        text: 'Endpoint',
        style: { 'white-space': 'nowrap' },
    },
    {
        dataField: 'desc',
        text: 'Description',
    },]

    const data = [{
        name: 'Linktree',
        end: '/hello',
        desc: 'My own linktree',
    },
    {
        name: "API's",
        end: '/api/*',
        desc: 'Various API routes',
    },
    {
        name: 'Pages',
        end: '/pages/*',
        desc: 'Staic pages',
    },
    {
        name: 'Blog Posts',
        end: '/tutorials/blog/content/*',
        desc: 'Static pre-rendered blog posts',
    },]

    return (
        <div className="table-responsive">
            <BootstrapTable
                keyField='name'
                data={data}
                columns={columns}
                bordered={false}
            />
        </div>
    )
}

export default Endpoint