import React from 'react';
import { Container } from './styles';

interface Props {
    value: string;
    align: "left" | "center" | "right";
}

const Text: React.FC<Props> = ({ value, align }) => {
    return (
        <Container align={align}>
            <p>{value}</p>
        </Container>
    )
}

export default Text;