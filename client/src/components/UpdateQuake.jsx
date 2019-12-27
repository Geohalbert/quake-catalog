import React, { Component } from 'react'

import styled from 'styled-components'
import api from '../api'

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

class UpdateQuake extends Component {
    updateQuake = event => {
        event.preventDefault()

        window.location.href = `/quakes/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateQuake}>Update</Update>
    }
}

export default UpdateQuake;