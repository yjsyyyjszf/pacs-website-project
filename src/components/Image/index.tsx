import React from 'react';
import { Container, Img } from './styles';

interface Props {
    source: string,
    opaque?: boolean,
    align: "left"|"right"|"center"
}

const Image: React.FC<Props> = ({ source, opaque, align }) => {
    return (
        <Container align={align}>
            <Img src={source} opaque={!!opaque} />
        </Container>
    )
}

export default Image;