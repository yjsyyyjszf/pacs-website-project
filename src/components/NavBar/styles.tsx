import styled from 'styled-components';
import {Theme} from "../../assets/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: ${Theme.sm};
`;

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 55%;
  margin-right: 0.5rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 35em;
`;

export const ImageWrapper = styled.div`
  width: 15rem;
`;
