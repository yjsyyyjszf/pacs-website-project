import React from 'react';
import Text from '../Text';
import Image from '../Image';
import { Container, TitleContainer, InfoContent, TextWrapper, ContentWrapper } from './styles';
import Title from '../Title';
import logo from '../../assets/images/logo.svg';


const Content: React.FC = () => {
    return (
        <Container>
            <TitleContainer>
                <Title value="O que podemos fazer por você?" align="left" main/>
            </TitleContainer>
            <TextWrapper>
                <Text value="Ideal para pacientes, médicos radiologistas, clínicas, hospitais e centrais de diagnósticos por imagem."
                    withDash align="left"/>
                <Text value="Nossas ofertas abrangem uma ampla gama de modalidades radiológicas para atender todas as necessidades."
                    align="left"/>
            </TextWrapper>
            <InfoContent>
                <ContentWrapper>
                    <Image source={logo} align="center"/>
                    <Text value="Laudos Online" fontWeight={600} align="center"/>
                    <Text value="Acesse seus laudos em qualuer lugar a todo momento com toda a segurança e desempenho da nossa nuvem."
                        fontWeight={200} align="center"/>
                </ContentWrapper>
                <ContentWrapper>
                    <Image source={logo} align="center"/>
                    <Text value="Totalmente Integrado" fontWeight={600} align="center"/>
                    <Text value="Acesse seus laudos em qualuer lugar a todo momento com toda a segurança e desempenho da nossa nuvem."
                        fontWeight={200} align="center"/>
                </ContentWrapper>
                <ContentWrapper>
                    <Image source={logo} align="center"/>
                    <Text value="Relatórios Completos" fontWeight={600} align="center"/>
                    <Text value="Acesse seus laudos em qualuer lugar a todo momento com toda a segurança e desempenho da nossa nuvem."
                        fontWeight={200} align="center"/>
                </ContentWrapper>
            </InfoContent>
        </Container>
    )
}

export default Content;
