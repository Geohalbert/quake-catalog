import React, { Component } from 'react'

import QuakeServices from "../services/QuakeService";
import styled from 'styled-components'

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

class DeleteQuake extends Component {
    deleteQuake = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Do tou want to delete the quake ${this.props.id} permanently?`,
            )
        ) {
            QuakeServices.deleteQuakeById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteQuake}>Delete</Delete>
    }
}

export default DeleteQuake;