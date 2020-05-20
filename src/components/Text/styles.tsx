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
    font-size: 1.5rem;
    opacity: 0.6;
    Justify-content: ${({ align }) => checkAlign(align)};
`;