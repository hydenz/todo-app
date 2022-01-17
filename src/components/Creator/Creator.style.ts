import styled from 'styled-components';
import checkIcon from '../../assets/icon-check.svg';
import Row from '../Row';

export const Container = styled(Row)`
  border-radius: 0.5rem;
  margin-bottom: calc(1.3rem + 0.7vw);
  box-shadow: 0px 20px 50px -25px #000;
  padding: calc(1.45rem + 0.35vw) calc(1.8rem + 0.55vw);
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

interface RowCheckProps {
  done?: boolean;
}
