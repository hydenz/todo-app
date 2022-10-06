import React, { useState } from 'react';
import { DropResult } from 'react-beautiful-dnd';
import { Container } from './Todos.style';
import useLocalStorage from '../../hooks/useLocalStorage';
import Creator from '../Creator';
import List from '../List';
import Controls from '../Controls';
import { initialTodos, FilterName, filters } from './Todos.data';
import type { TodosProps } from './Todos.types';

function Todos({ children }: TodosProps) {
  const [storageTodos, setStorageTodos] = useLocalStorage(
    'todos',
    initialTodos
  );
  const [newTodoName, setNewTodoName] = useState('');
  const [currentFilter, setCurrentFilter] = useState(filters.All);

  const shownTodos = currentFilter.function(storageTodos);

  const nextFilterName = useRef<FilterName>(currentFilter.name);

  const handleCompletedTodosClear = () => {
    setStorageTodos((oldTodos) => oldTodos.filter((todo) => !todo.done));
  };

  const handleTodoDelete = (todoId: number) => {
    setStorageTodos((oldTodos) =>
      oldTodos.filter((todo) => todo.id !== todoId)
    );
  };

  const handleFilterChange = (newFilterName: FilterName) => {
    setCurrentFilter(filters[newFilterName]);
  };

  const handleDragEnd = (e: DropResult) => {
    if (!e.destination) return;

    // Setting the new todos so that the filters do not interfere in the order
    setStorageTodos((oldStorageTodos) => {
      const currentShownTodos = [...shownTodos];
      const spliced = currentShownTodos.splice(e.source.index, 1)[0];
      currentShownTodos.splice(e.destination!.index, 0, spliced);
      let i = 0;
      const newStorageTodos = oldStorageTodos.map((todo) => {
        if (currentShownTodos.includes(todo)) {
          i += 1;
          return currentShownTodos[i - 1];
        }
        return todo;
      });
      return newStorageTodos;
    });
  };

  return (
    <Container>
      {children}
      <Creator storageTodos={storageTodos} setStorageTodos={setStorageTodos} />
      <List
        todos={shownTodos}
        onTodoCompletion={handleTodoCompletion}
        onTodoDelete={handleTodoDelete}
        onDragEnd={handleDragEnd}
        currentFilterName={currentFilter.name}
      />
      {!!storageTodos.length && (
        <Controls
          currentFilterName={currentFilter.name}
          onTodosFilterChange={handleFilterChange}
          undoneTodos={storageTodos.filter((todo) => !todo.done).length}
          onCompletedTodosClear={handleCompletedTodosClear}
        />
      )}
    </Container>
  );
}

export default Todos;
