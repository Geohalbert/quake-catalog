import React, { Component } from 'react'
import styled from 'styled-components'

import banner from '../banner.png'

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})``

class Banner extends Component {
    render() {
        return (
            <Wrapper href="https://earthquake.usgs.gov/fdsnws/event/1/">
                <img src={banner} width="596" height="72" alt="usgs.gov" />
            </Wrapper>
        )
    }
}

export default Banner