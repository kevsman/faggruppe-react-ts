import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    box-shadow: 0 2px 7px -2px #ccc;
    background: #501450;
    color: #fff;
    align-items: center;

    h2 {
        margin: 0;
    }
`;

export const LinkWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 60%;
`;

export const HeaderLink = styled(Link)`
    font-weight: 500;
    text-decoration: none;
    color: #fff;

    &:hover {
        font-weight: 400;
    }

`;