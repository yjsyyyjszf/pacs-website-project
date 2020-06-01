import React from 'react';
import Text from '../Text';
import { Container, TextContainer, InfoContent, TextWrapper } from './styles';
import Title from '../Title';


const Content: React.FC = () => {
    return (
        <Container>
            <TextContainer>
                <Title value="Nós te ajudamos a organizar seus exames online." align="center" main/>
                <Title value="Interação é nosso nome do meio." align="center" main colors/>
            </TextContainer>
            <TextWrapper>
                <InfoContent>
                    <Text value="Apoiamos a presença online dos nossos clientes e implementamos habilmente estratégicas para lidar com isso."
                        align="center"  colors />
                </InfoContent>
                <InfoContent>
                    <Text value="Somos a resposta tanto para as necessidades individuais médicas, quanto para estruturas completas. O WebPACS irá te ajudar a lidar com variadas demandas de exames e satisfazer o paciente com resultados onde desejar."
                        align="center" colors />
                </InfoContent>
            </TextWrapper>
        </Container>
    )
}

export default Content;
