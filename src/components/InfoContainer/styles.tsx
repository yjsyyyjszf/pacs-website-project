import styled from 'styled-components';
import {Theme} from "../../assets/theme";


export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 5rem;
    padding-left: 4rem;
    height: 100vh;
    background: ${Theme.green};
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    width: 60%;
    margin-bottom: 15rem;
`;

export const InfoContent = styled.div`
    margin-bottom: 1.5rem;
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 32%;
    margin-right: 16rem;
    margin-top: 5.5rem;
`;
