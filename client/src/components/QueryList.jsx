import React, { Component } from 'react'
import ReactTable from 'react-table'
import USGSService from '../services/USGSService'

import styled from 'styled-components'

import 'react-table/react-table.css'

class QueryList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quakes: [],
            columns: [],
            isLoading: false,
        }

        this.usgsService = new USGSService();
    }

    componentDidMount = async (props) => {
        this.setState({ isLoading: true })

        await this.propsLoaded(this.props.quakes)
    }

    propsLoaded = (quakes) => {
        if (quakes) {
            console.log('props DID load INDEED')
            this.setState({
                quakes: quakes.data,
                isLoading: false
            })
        } else {
            console.log('props did not load')
        }
    } 

    render() {
        const { quakes, isLoading } = this.state
        console.log('TCL: QuakesList -> render -> quakes', quakes)

        const columns = [
            {
                Header: 'ID',
                accessor: 'id',
                filterable: true,
            },
            {
                Header: 'Mag',
                accessor: 'properties.mag',
                filterable: true,
            },
            {
                Header: 'Coordinates',
                accessor: 'geometry.coordinates',
                filterable: false,
            }
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <DeleteQuake id={props.original._id} />
                        </span>
                    )
                },
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <UpdateQuake id={props.original._id} />
                        </span>
                    )
                },
            },
        ]

        let showTable = true
        if (!quakes.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={quakes}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}

export default QueryList