import React from 'react';
import { Container } from './styles';

interface Props {
    value: string;
    align: "left" | "center" | "right";
    main?: boolean;
    colors?: boolean;
}

const Title: React.FC<Props> = ({ value, align, main, colors}) => {
    return (
        <Container align={align} main={main} colors={colors}>
            <span>{value}</span>
        </Container>
    )
}

export default Title;
