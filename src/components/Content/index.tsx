import React from 'react';
import Button from '../Button';
import Text from '../Text';
import { Container, TextContainer, ImageWrapper } from './styles';
import Image from '../Image';
import Doctors from '../../assets/images/doctors.svg';
import Title from '../Title';

const Content: React.FC = () => {
    return (
        <Container>
            <TextContainer>
                <Title value="Gerencie, Armazene & compartilhe laudos" align="left"/>
                <Text value="Perfeito para pequenos consultorios e completo para grandes hospitais" align="left"/>
                <Button label="Peça um orçamento" onClick={() => alert('HELLO BOI3')} labelColor="white" />
            </TextContainer>
            <ImageWrapper>
              <Image source={Doctors} align="center" />
            </ImageWrapper>
        </Container>
    )
}

export default Content;
