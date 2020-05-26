import styled from 'styled-components';
import {Theme} from "../../assets/theme";

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

export const Container = styled.div<{align: string, main?: boolean}>`
    display: flex;
    font-weight: ${({ main }) => !!main ? 600 : 400};
    font-size: ${({ main }) => !!main ? Theme.xl : Theme.lg};
    justify-content: ${({ align }) => checkAlign(align)};
    line-height: 1.1em;
`;
