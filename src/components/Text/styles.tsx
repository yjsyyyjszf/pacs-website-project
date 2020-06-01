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

export const Container = styled.div<{align: string,}>`
    display: flex;
    justify-content: ${({ align }) => checkAlign(align)};
`;

export const Span = styled.span<{ weight: number, withDash: boolean, colors?: boolean }>`
  font-size: ${({ colors }) => !!colors ? Theme.mdw : Theme.md};
  line-height: 2;
  font-weight: ${({ weight }) => weight};
  color: ${({ colors }) => !!colors ? Theme.white : Theme.black};
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
