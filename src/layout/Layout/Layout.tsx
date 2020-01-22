import React from 'react'
import styled, { css } from 'styled-components'

interface StyledProps {
    danger: boolean
}

const Header = styled.header`
    width: 1280px;
    height: 60px;
    border: 1px solid black;
    border-radius: 2px;
    ${(props: StyledProps) => {
        if (props.danger) {
            return css`
                background: #efefefef;
            `
        }
    }}
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
        <Header danger={false}>Header</Header>
        {children}
        <Footer>Footer</Footer>
    </div>
)

export default Layout
