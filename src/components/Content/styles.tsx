import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 1rem;
    padding: 2rem 0;
    height: 80vh;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    width: 40%;
`;

export const InfoContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 20vh;
    margin-top: 2rem;
`;

export const ImageWrapper = styled.div`
  display: flex;
  width: 60%;
  margin-left: 2rem;
`;
