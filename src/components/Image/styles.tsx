import styled from 'styled-components';

const checkAlign = (align: string) => {
    switch (align) {
        case 'right':
            return 'flex-end';
        case 'left':
            return 'flex-start';
        case 'center':
            return 'center';
    }
}
export const Container = styled.div<{align: string}>`
    display: flex;
    flex-direction: row;
    justify-content: ${({ align }) => checkAlign(align)};
    padding: 1em;
    background: white; 
`;

export const Img = styled.img<{opaque: boolean}>`
    width: 100%;
    height: auto;
    opacity: ${({ opaque }) => opaque ? 0.3 : 1 };  
`;
