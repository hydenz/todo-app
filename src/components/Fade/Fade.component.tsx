import { FadeIn } from './Fade.style';
import type { ConditionalFadeInProps } from './Fade.types';

function ConditionalFadeIn({
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
}: ConditionalFadeInProps) {
  return condition ? (
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
}

export default ConditionalFadeIn;
