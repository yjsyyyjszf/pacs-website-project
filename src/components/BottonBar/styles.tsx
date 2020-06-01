import styled from 'styled-components';
import {Theme} from "../../assets/theme";


export const Container = styled.div`
    display: flex;
    flex-direction: row;
    background: ${Theme.red};
    padding-top: 5rem;
    padding-left: 2rem;
    height: 30vh;
    border: 1px solid;
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    width: 85%;
    height: 15%;
    margin-bottom: 2rem;
`;

export const TextWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 2rem;
`;

export const InfoContent = styled.div`
    display: flex;
    flex-direction: row; 
    width: 90%;
    margin-left: 2.5rem;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 4rem;
    width: 30%;
`;



