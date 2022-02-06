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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (newValue.length > 50) return;
    setNewTodoName(newValue);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const id = storageTodos.length
        ? [...storageTodos].sort(
            (firstTodo, secTodo) => secTodo.id - firstTodo.id
          )[0].id + 1
        : 1;
      setStorageTodos((oldTodos) => [
        { name: newTodoName, done: false, id },
        ...oldTodos,
      ]);
      setNewTodoName('');
    }
  };

  const handleTodoCompletion = (todoId: number) => {
    setStorageTodos((todos) => {
      const foundTodo = todos.find((todo) => todo.id === todoId);
      foundTodo!.done = !foundTodo!.done;
      return [...todos];
    });
  };

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
      <Creator
        newTodoName={newTodoName}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
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
