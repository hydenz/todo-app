import styled from 'styled-components';

export const Background = styled.div`
  display: flex;
  justify-content: space-between;
  background-image: ${({ theme }) => `url(${theme.assets.bgImages.mobile})`};
  transition-property: background-image;
  transition-duration: 1s;
  transition-timing-function: ease-in-out;
  background-size: cover;
  min-height: 200px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;

  @media (min-width: 570px) {
    background-image: ${({ theme }) => `url(${theme.assets.bgImages.desktop})`};
    min-height: 300px;
    padding-top: 0;
  }
`;
