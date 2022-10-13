import { Container, RowCheckWrapper, RowCheck, RowCross } from './Todo.style';
import { TodoProps } from './Todo.types';

function Todo({ todo, onTodoCompletion, onTodoDeletion }: TodoProps) {
  return (
    <Container done={todo.done}>
      <RowCheckWrapper
        done={todo.done}
        onClick={() => onTodoCompletion(todo.id)}
      >
        <RowCheck done={todo.done} />
      </RowCheckWrapper>
      {todo.name}
      <RowCross onClick={() => onTodoDeletion(todo.id)} />
    </Container>
  );
}

export default Todo;
