import {
  Container,
  RowCheckWrapper,
  RowCheck,
  TodoCreatorInput,
} from './Creator.style';
import type { CreatorProps } from './Creator.types';

function Creator({ newTodoName, onChange, onKeyPress }: CreatorProps) {
  return (
    <Container>
      <RowCheckWrapper>
        <RowCheck />
      </RowCheckWrapper>
      <TodoCreatorInput
        value={newTodoName}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    </Container>
  );
}

export default Creator;
