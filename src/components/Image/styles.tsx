import styled from 'styled-components';

export const Container = styled.div`

`;

export const Img = styled.img<{opaque: boolean}>`
    width: 22rem;
    opacity: ${({ opaque }) => opaque ? 0.3 : 1 }
`; 