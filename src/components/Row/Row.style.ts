import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.rowBg};
  transition-property: background-color, color;
  transition-duration: 1s;
  transition-timing-function: ease;
`;
