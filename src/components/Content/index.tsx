import React from 'react';
import Button from '../Button';
import Text from '../Text';
import { Container, TextContainer, ImageWrapper, InfoContent } from './styles';
import Image from '../Image';
import Doctors from '../../assets/images/doctors.svg';
import Title from '../Title';

const Content: React.FC = () => {
    return (
        <Container>
            <TextContainer>
                <Title value="Gerencie, Armazene & compartilhe laudos" align="left" main/>
                <InfoContent>
                  <Text value="Perfeito para pequenos consultorios e completo para grandes hospitais" align="left" fontWeight={200} withDash/>
                  <Button label="Peça um orçamento" onClick={() => alert('HELLO BOI3')} labelColor="white" />
                </InfoContent>
            </TextContainer>
            <ImageWrapper>
              <Image source={Doctors} align="center" />
            </ImageWrapper>
        </Container>
    )
}

export default Content;
