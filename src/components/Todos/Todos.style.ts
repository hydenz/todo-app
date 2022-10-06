import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  margin-block: clamp(4.5rem, 3.5rem + 3vw, 7.5rem) 0;
  margin-inline: auto;
  width: 87%;
  max-width: 540px;
`;

export const FadeContainer = styled.div`
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
