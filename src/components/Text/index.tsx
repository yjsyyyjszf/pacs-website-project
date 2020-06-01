import React from 'react';
import { Container, Span } from './styles';

interface Props {
    value: string;
    align: "left" | "center" | "right";
    fontWeight?: 200 | 600 | 800;
    colors?: boolean;
    withDash?: boolean;
}

const Text: React.FC<Props> = ({ value, align, fontWeight, withDash, colors }) => {
    const handleFontWeight = (): number => {
        switch (fontWeight) {
            case 200:
                return 200;
            case 600:
                return 600;
            case 800:
                return 800;
            default:
                return 400;
        }
    }

    return (
        <Container align={align}>
            <Span weight={handleFontWeight()} withDash={!!withDash} colors={!!colors}>{value}</Span>
        </Container>
    )
}

export default Text;
