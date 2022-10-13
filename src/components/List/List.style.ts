import styled from 'styled-components';

export const DraggableChildren = styled.div`
  &.fade-enter {
    opacity: 0;
  }

  &.fade-enter-active {
    opacity: 1;
    transition: opacity 500ms ease;
  }

  &.fade-exit {
    opacity: 1;
    max-height: 69px;
  }

  &.fade-exit-active {
    opacity: 0;
    max-height: 0;
    transition: opacity 500ms ease, max-height 500ms ease 500ms;
  }
`;
