import React from 'react';
import { Container } from './styles';

interface Props {
    value: string
}

const Text: React.FC<Props> = ({ value }) => {
    return (
        <Container>
            <span>{value}</span>
        </Container>
    )
}

export default Text;