import styled from 'styled-components';


type ValueTdProp = {
    isPositive: boolean;
}

export const ProfileWrapper = styled.div`
    width: 75%;
    margin: 0 auto;
`;

export const ValueTd = styled.td<ValueTdProp>`
    color: ${props => props.isPositive ? 'green' : 'red'};
`;

export const Table = styled.table`
    border-collapse: collapse;
    border-spacing: 0;

    th, td {
        padding: 0.35rem 0.5rem;
        font-size: 0.75rem;
        text-align: left;
        vertical-align: middle;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;