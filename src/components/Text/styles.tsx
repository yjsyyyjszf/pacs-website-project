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

export const Span = styled.span<{ weight: number, withDash: boolean }>`
  font-size: ${Theme.md};
  line-height: 1.2;
  font-weight: ${({ weight }) => weight};
  position: relative;
  
  ${({withDash}) => withDash 
    ? `margin-left: 1.5rem;
     
      &::before {
        content: "";
        position: absolute;
        left: -20px;
        top: 10px;
        width: 15px;
        height: 3px;
        background: ${Theme.red};
      }` 
    : 
      ''
    }
`;
