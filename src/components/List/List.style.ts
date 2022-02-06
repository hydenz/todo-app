import styled from 'styled-components';
import checkIcon from '../../assets/icon-check.svg';
import crossIcon from '../../assets/icon-cross.svg';
import Row from '../Row';

export const DraggableChildren = styled.div`
  &.fade-appear {
    opacity: 0;
  }

  &.fade-appear-active {
    opacity: 1;
    transition: opacity 500ms ease;
  }

  &.fade-enter {
    opacity: 0;
  }

  &.fade-enter-active {
    opacity: 1;
    transition: opacity 500ms ease;
  }

  &.fade-exit {
    opacity: 1;
  }

  &.fade-exit-active {
    opacity: 0;
    transition: opacity 500ms ease;
  }
`;

export const TodoRow = styled(Row)<TodoRowProps>`
  padding: calc(1.45rem + 0.35vw) calc(1.8rem + 0.55vw);
  color: ${({ done, theme }) =>
    done ? theme.colors.doneTodoFont : theme.colors.undoneTodoFont};
  text-decoration: ${({ done }) => done && 'line-through'};
  border-radius: ${({ borderRadius }) => borderRadius};
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.rowDivider}`};
  font-size: clamp(1.2rem, 1rem + 0.5vw, 3rem);
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

  ${TodoRow}:hover & {
    display: block;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

interface TodoRowProps {
  done?: boolean;
  borderRadius?: string;
  divider?: boolean;
}

interface RowCheckProps {
  done?: boolean;
}
