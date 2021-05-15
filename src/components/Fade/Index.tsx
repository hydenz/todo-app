import React from 'react';
import FadeIn from './styles';
import type { BaseAnimationProps } from './types';

const ConditionalFadeIn = ({
  duration,
  timingFunction,
  delay,
  iterationCount,
  direction,
  fillMode,
  playState,
  display,
  children,
  condition,
}: ConditionalFadeInProps) =>
  condition ? (
    <FadeIn
      duration={duration}
      timingFunction={timingFunction}
      delay={delay}
      iterationCount={iterationCount}
      direction={direction}
      fillMode={fillMode}
      playState={playState}
      display={display}
    >
      {children}
    </FadeIn>
  ) : (
    children
  );

interface ConditionalFadeInProps extends BaseAnimationProps {
  children: JSX.Element;
  condition: boolean;
}

export { FadeIn, ConditionalFadeIn };
