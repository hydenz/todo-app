export interface BaseAnimationProps {
  duration?: string;
  timingFunction?: string;
  delay?: string;
  iterationCount?: string;
  direction?: string;
  fillMode?: string;
  playState?: string;
  display?: string;
}

export interface ConditionalFadeInProps extends BaseAnimationProps {
  children: JSX.Element;
  condition?: boolean;
}
