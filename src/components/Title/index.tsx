import React from 'react';
import { Container } from './styles';

interface Props {
    value: string;
    align: "left" | "center" | "right";
    main?: boolean;
}

const Title: React.FC<Props> = ({ value, align, main }) => {
    return (
        <Container align={align} main={main}>
            <span>{value}</span>
        </Container>
    )
}

export default Title;
