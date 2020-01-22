import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
    width: 1280px;
    height: 60px;
    border: 1px solid black;
    border-radius: 2px;
`

const Footer = styled.footer`
    bottom: 0;
    width: 1280px;
    height: 60px;
    border: 1px solid black;
    border-radius: 2px;
`

const Layout: React.FC = ({ children }) => (
    <div className='HeaderWrapper'>
        <Header>Header</Header>
        {children}
        <Footer>Footer</Footer>
    </div>
)

export default Layout
