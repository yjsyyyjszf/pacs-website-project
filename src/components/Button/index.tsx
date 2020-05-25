import React from 'react';
import {Container, Label, Wrapper} from './styles';
import {Theme} from "../../assets/theme";

interface Props {
    label: string,
    flat?: boolean,
    labelColor?: 'white' | 'red' | 'black',
    onClick: Function
}

const Button: React.FC<Props> = ({ label, flat, labelColor, onClick }) => {
    const handleOnClick = () => {
        return onClick();
    };

    const handleLabelColor = (): string => {
        switch (labelColor) {
            case "white":
                return Theme.white;
            case "red":
                return Theme.red;
            default:
                return Theme.black;
        }
    }

    return (
        <Wrapper onClick={handleOnClick}>
            <Container flat={!!flat}>
                <Label labelColor={handleLabelColor()}>{label}</Label>
            </Container>
        </Wrapper>
    )
}

export default Button;
