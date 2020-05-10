import React from 'react';
import { Container, Img } from './styles';

interface Props {
    source: string,
    opaque?: boolean
}

const Image: React.FC<Props> = ({ source, opaque }) => {
    return (
        <Container>
            <Img src={source} opaque={!!opaque} />
        </Container>
    )
}

export default Image;