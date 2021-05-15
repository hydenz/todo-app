import styled from 'styled-components';
import checkIcon from '../../assets/icon-check.svg';
import crossIcon from '../../assets/icon-cross.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-block: clamp(4.5rem, 3.5rem + 3vw, 7.5rem) 0;
  margin-inline: auto;
  width: 87%;
  max-width: 540px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: clamp(2.7rem, 1.5rem + 3vw, 4rem);
  margin-bottom: calc(2.6rem + 0.7vw);
  letter-spacing: clamp(1rem, 0.5rem + 1vw, 1.5rem);
  text-transform: uppercase;
  color: hsl(0, 0%, 100%);
`;

export const HeaderButton = styled.button.attrs({ type: 'button' })`
  background: none;
  border: none;
  width: calc(1.7rem + 0.6vw);
  &:hover {
    cursor: pointer;
  }
`;

export const HeaderButtonImage = styled.img.attrs(({ theme }) => ({
  width: '100%',
  src: theme.assets.icon,
}))``;

export const Row = styled.div<RowProps>`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.rowBg};
  padding: calc(1.45rem + 0.35vw) calc(1.8rem + 0.55vw);
  color: ${({ done, theme }) =>
    done ? theme.colors.doneTodoFont : theme.colors.undoneTodoFont};
  text-decoration: ${({ done }) => done && 'line-through'};
  border-radius: ${({ borderRadius }) => borderRadius};
  border-bottom: ${({ theme, divider }) =>
    divider && `1px solid ${theme.colors.rowDivider}`};
  font-size: clamp(1.2rem, 1rem + 0.5vw, 3rem);
  transition-property: background-color, color;
  transition-duration: 1s;
  transition-timing-function: ease;
`;

export const TodoCreator = styled(Row).attrs({ borderRadius: '.5rem' })`
  margin-bottom: calc(1.3rem + 0.7vw);
  box-shadow: 0px 20px 50px -25px #000;
`;

export const TodoCreatorInput = styled.input.attrs({
  placeholder: 'Create a new todo...',
})`
  width: 100%;
  font-family: inherit;
  font-size: clamp(1.2rem, 1rem + 0.5vw, 3rem);
  color: ${({ theme }) => theme.colors.todoCreatorFont};
  background: none;
  border: none;
  caret-color: ${({ theme }) => theme.colors.todoCreatorCaret};
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.todoCreatorPlaceholder};
  }
`;

export const InfoRow = styled(Row).attrs({ borderRadius: '0 0 .5rem .5rem' })`
  display: flex;
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

export const FiltersRow = styled(Row).attrs({ borderRadius: '.5rem' })`
  display: flex;
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

export const RowCheckWrapper = styled.span<RowCheckProps>`
  position: relative;
  background: ${({ done, theme }) =>
    done ? theme.colors.doneTodoChecker : theme.colors.undoneTodoChecker};
  padding: 0.1rem;
  margin-right: calc(0.6rem + 1.2vw);
  border-radius: 50%;
  &:hover {
    background: ${({ theme }) => theme.colors.doneTodoChecker};
  }
`;

export const RowCheck = styled.button.attrs({ type: 'button' })<RowCheckProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50%;
  padding: calc(0.6em + 0.2vw);
  background: ${({ done, theme }) =>
    done
      ? `url(${checkIcon}), ${theme.colors.doneTodoChecker}`
      : theme.colors.rowBg};
  background-position: center;
  background-repeat: no-repeat;
  transition-property: background-color, color;
  transition-duration: 1s;
  transition-timing-function: ease;
  &:hover {
    cursor: pointer;
  }
`;

export const RowCross = styled.button.attrs({ type: 'button' })`
  margin-left: auto;
  background: url(${crossIcon});
  padding: 0.5em;
  border: none;
  background-size: cover;
  &:hover {
    cursor: pointer;
  }
  ${Row}:hover & {
    display: block;
  }
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const DragnDropText = styled.p`
  color: ${({ theme }) => theme.colors.dragnDropTextFont};
  text-align: center;
  font-size: 1.4rem;
  margin-top: 4.3rem;
`;

interface RowProps {
  done?: boolean;
  borderRadius?: string;
  divider?: boolean;
}

interface RowCheckProps {
  done?: boolean;
}

interface FiltersButtonProps {
  selected?: boolean;
}
