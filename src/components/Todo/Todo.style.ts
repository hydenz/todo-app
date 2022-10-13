import styled from 'styled-components';
import checkIcon from '../../assets/icon-check.svg';
import crossIcon from '../../assets/icon-cross.svg';
import Row from '../Row';

export const Container = styled(Row)<ContainerProps>`
  padding: calc(1.45rem + 0.35vw) calc(1.8rem + 0.55vw);
  color: ${({ done, theme }) =>
    done ? theme.colors.doneTodoFont : theme.colors.undoneTodoFont};
  text-decoration: ${({ done }) => done && 'line-through'};
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.rowDivider}`};
  font-size: clamp(1.2rem, 1rem + 0.5vw, 3rem);

  &:first-child {
    border-radius: 0.5rem 0.5rem 0 0;
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
  cursor: pointer;
`;

export const RowCross = styled.button.attrs({ type: 'button' })`
  margin-left: auto;
  background: url(${crossIcon});
  padding: 0.5em;
  border: none;
  background-size: cover;

  cursor: pointer;

  ${Container}:hover & {
    display: block;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

interface ContainerProps {
  done?: boolean;
  divider?: boolean;
}

interface RowCheckProps {
  done?: boolean;
}
