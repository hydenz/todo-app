import Container from './Row.style';
import type { RowProps } from './Row.types';

function Row({ children, className }: RowProps) {
  return <Container className={className}>{children}</Container>;
}

export default Row;
