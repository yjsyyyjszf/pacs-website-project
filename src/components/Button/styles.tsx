import styled from 'styled-components';
import {Theme} from "../../assets/theme";

export const Wrapper = styled.div`
    cursor: pointer;
    width: 18em;
`;

export const Container = styled.div<{ flat?: boolean }>`
    background: ${({ flat }) => flat ? 'transparent' : Theme.red };
    border-radius: 6px;
    padding: ${({ flat }) => flat ? '0.6em' : '1.5em' };
    display: flex;
    justify-content: center;
    align-items: center;
    
    position:relative;
`;

export const Label = styled.span<{ labelColor?: string }>`
    font-weight: 500;
    font-size: 1.3em;
    color: ${({ labelColor }) => labelColor };
    
    ::after {
      bottom: 0;
      content: "";
      display: block;
      height: 2px;
      left: 50%;
      position: absolute;
      background: ${({ labelColor }) => labelColor === "#FFF" ? "none" : labelColor };
      transition: width 0.3s ease 0s, left 0.3s ease 0s;
      width: 0;
    }
    :hover::after { 
      width: 60%; 
      left: 20%; 
    }
`;



