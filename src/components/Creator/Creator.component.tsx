import { useState } from 'react';
import {
  Container,
  RowCheckWrapper,
  RowCheck,
  TodoCreatorInput,
} from './Creator.style';
import type { CreatorProps } from './Creator.types';

function Creator({ storageTodos, setStorageTodos }: CreatorProps) {
  const [newTodoName, setNewTodoName] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (newValue.length > 50) return;
    setNewTodoName(newValue);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return;

    const id = storageTodos.length
      ? [...storageTodos].sort(
          (firstTodo, secTodo) => secTodo.id - firstTodo.id
        )[0].id + 1
      : 1;

    setStorageTodos((oldTodos: any) => [
      { name: newTodoName, done: false, id },
      ...oldTodos,
    ]);
    setNewTodoName('');
  };

  return (
    <Container>
      <RowCheckWrapper>
        <RowCheck />
      </RowCheckWrapper>
      <TodoCreatorInput
        value={newTodoName}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
    </Container>
  );
}

export default Creator;
