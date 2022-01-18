import styled from 'styled-components';
import Row from '../Row';

export const InfoRow = styled(Row)`
  border-radius: 0 0 0.5rem 0.5rem;
  justify-content: space-between;
  padding: 1.6rem 2rem 1.8rem 2rem;
  box-shadow: 0px 15px 64px -20px #000;
`;

export const InfoRowText = styled.span`
  color: ${({ theme }) => theme.colors.todosLeftFont};
  font-size: clamp(1.15rem, 0.8rem + 1vw, 1.4rem);
`;

export const InfoRowButton = styled.button`
  background: none;
  border: none;
  font-family: inherit;
  font-size: clamp(1.2rem, 0.8rem + 1vw, 1.4rem);
  color: ${({ theme }) => theme.colors.clearCompletedFont};
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.clearCompletedHoverFont};
  }
`;

export const FiltersRow = styled(Row)`
  padding: calc(1.45rem + 0.35vw) calc(1.8rem + 0.55vw);
  border-radius: 0.5rem;
  justify-content: center;
  margin-top: 1.6rem;
`;

export const FiltersButton = styled.button.attrs({
  type: 'button',
})<FiltersButtonProps>`
  border: none;
  background: none;
  font-family: inherit;
  font-weight: bold;
  margin: 0 1rem;
  color: ${({ selected, theme }) =>
    selected ? theme.colors.filterSelectedFont : theme.colors.filterFont};
  &:hover {
    cursor: pointer;
    color: ${({ selected, theme }) =>
      !selected && theme.colors.filterHoverFont};
  }
`;

export const DragnDropText = styled.p`
  color: ${({ theme }) => theme.colors.dragnDropTextFont};
  text-align: center;
  font-size: 1.4rem;
  margin-top: 4.3rem;
`;

interface FiltersButtonProps {
  selected?: boolean;
}
