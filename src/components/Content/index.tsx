import React from 'react';
import Button from '../Button';
import Text from '../Text';
import { Container, TextContainer } from './styles';
import Image from '../Image';
import logo from '../../logo.svg';
import Title from '../Title';

const Content: React.FC = () => {
    return (
        <Container>
            <TextContainer>
                <Title value="Gerencie, Armazene e compartilhe laudos" align="left"/>
                <Text value="Perfeito para pequenos consultorios e completo para grandes hospitais" align="left"/>
                <Button label="Peça um orçamento" onClick={() => alert('HELLO BOI3')} labelColor="red" />
            </TextContainer>
            <Image source={logo} align="center" />
            
        </Container>
    )
}

export default Content;