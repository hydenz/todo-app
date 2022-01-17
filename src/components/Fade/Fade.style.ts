import styled, { keyframes } from 'styled-components';
import type { BaseAnimationProps } from './Fade.types';

const BaseAnimation = styled.div<BaseAnimationProps>`
  animation-duration: ${(props) => props.duration || '1s'};
  animation-timing-function: ${(props) => props.timingFunction || 'ease'};
  animation-delay: ${(props) => props.delay || '0s'};
  animation-iteration-count: ${(props) => props.iterationCount || '1'};
  animation-direction: ${(props) => props.direction || 'normal'};
  animation-fill-mode: ${(props) => props.fillMode || 'both'};
  animation-play-state: ${(props) => props.playState || 'running'};
  display: ${(props) => props.display || 'block'};
`;

const FadeInAnimation = keyframes`  
  from { opacity: 0.1; }
  to { opacity: 1; }
`;

export const FadeIn = styled(BaseAnimation)`
  animation-name: ${FadeInAnimation};
`;
