import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: clamp(2.7rem, 1.5rem + 3vw, 4rem);
  margin-bottom: calc(2.6rem + 0.7vw);
  letter-spacing: clamp(1rem, 0.5rem + 1vw, 1.5rem);
  text-transform: uppercase;
  color: hsl(0, 0%, 100%);
`;

export const Button = styled.button.attrs({
  type: 'button',
  ariaLabel: 'Switch between dark and light theme',
})`
  background: none;
  border: none;
  width: calc(1.7rem + 0.6vw);

  &:hover {
    cursor: pointer;
  }
`;

export const ButtonImage = styled.img.attrs(({ theme }) => ({
  width: '100%',
  src: theme.assets.icon,
}))``;
