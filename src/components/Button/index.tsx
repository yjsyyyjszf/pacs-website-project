import React from 'react';
import { Container, Label, Wrapper } from './styles';

interface Props {
    label: string,
    flat?: boolean,
    labelColor?: 'white' | 'red' | 'black',
    onClick: Function
}

const Button: React.FC<Props> = ({ label, flat, labelColor, onClick }) => {
    const handleOnClick = () => {
        return onClick();
    }

    return (
        <Wrapper onClick={handleOnClick}>
            <Container flat={!!flat}>
                <Label labelColor={labelColor}>{label}</Label>
            </Container>
        </Wrapper>
    )
}

export default Button;