import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})``

class Banner extends Component {
    render() {
        return (
            <Wrapper href="https://earthquake.usgs.gov/fdsnws/event/1/">
                <img src={require('../banner.png')} width="596" height="72" alt="USGS API" />
            </Wrapper>
        )
    }
}

export default Banner