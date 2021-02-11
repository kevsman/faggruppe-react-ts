import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderLink, HeaderWrapper, LinkWrapper } from './Header.style'

export default () => {
    return (
        <>
            <HeaderWrapper>
                <h2>UC Aksjer</h2>
                <LinkWrapper>
                    <HeaderLink to='/'>Home</HeaderLink>
                    <HeaderLink to='/Profile'>Profile</HeaderLink>
                </LinkWrapper>
            </HeaderWrapper>
        </>
    );
}