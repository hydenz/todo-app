import styled from 'styled-components';

export const AppContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.bodyBg};
  transition-property: background-color;
  transition-duration: 1s;
  transition-timing-function: ease;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 0;
  min-height: 100vh;
`;
