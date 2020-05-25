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
`;

export const Label = styled.span<{ labelColor?: string }>`
    font-weight: bold;
    font-size: 1.3em;
    color: ${({ labelColor }) => labelColor };
`;



