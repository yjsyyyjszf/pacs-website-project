import React from 'react';
import Button from '../Button';
import { Container, ActionsContainer, ButtonsContainer } from './styles';
import Image from '../Image';
import logo from '../../logo.svg';

const NavBar: React.FC = () => {
    return (
        <Container>
            <Image source={logo} align="left" />
            <ActionsContainer>
                <ButtonsContainer>
                    <Button label="Sobre" onClick={() => alert('HELLO BOI')} flat />
                    <Button label="O que fazemos" onClick={() => alert('HELLO BOI1')} flat />
                    <Button label="Contato" onClick={() => alert('HELLO BOI2')} flat />
                </ButtonsContainer> 
                <Button label="Peça um orçamento" onClick={() => alert('HELLO BOI3')} labelColor="red" flat />
            </ActionsContainer>
        </Container>
    )
}

export default NavBar;