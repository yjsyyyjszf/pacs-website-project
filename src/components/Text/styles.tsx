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

export const Container = styled.div<{align: string}>`
    display: flex;
    justify-content: ${({ align }) => checkAlign(align)};
`;

export const Span = styled.span<{ weight: number }>`
  font-size: ${Theme.md};
  font-family: 'Poppins', sans-serif;
  line-height: 1.2;
  font-weight: ${({ weight }) => weight};
`;
