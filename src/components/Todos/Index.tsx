import React, { useState } from 'react';
import { DropResult } from 'react-beautiful-dnd';
import { Container } from './styles';
import useLocalStorage from '../../hooks/useLocalStorage';
import Header from './Header';
import Creator from './Creator';
import List from './List';
import Controls from './Controls';
import initialTodos from './initialTodos';
import type { Todo } from './types';

const filters = {
  All: (todos: Todo[]) => todos,
  Active: (todos: Todo[]) => todos.filter((todo) => !todo.done),
  Completed: (todos: Todo[]) => todos.filter((todo) => todo.done),
};

const Todos = () => {
  const [storageTodos, setStorageTodos] = useLocalStorage(
    'todos',
    initialTodos
  );
  const [newTodoName, setNewTodoName] = useState('');
  const [currentFilter, setCurrentFilter] = useState({
    name: 'All' as FilterName,
    function: filters.All,
  });

  const shownTodos = currentFilter.function(storageTodos);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 50) return;
    setNewTodoName(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const id = Math.random();
      setStorageTodos((oldTodos) => [
        { name: newTodoName, done: false, id },
        ...oldTodos,
      ]);
      setNewTodoName('');
    }
  };

  const handleTodoCompletion = (todoId: number) => {
    setStorageTodos((oldTodos) => {
      const idx = oldTodos.findIndex((todo) => todo.id === todoId);
      const newTodos = oldTodos;
      newTodos[idx].done = !newTodos[idx].done;
      return [...newTodos];
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
    setCurrentFilter({
      name: newFilterName,
      function: filters[newFilterName],
    });
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
      <Header />
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
      />
      {storageTodos.length ? (
        <>
          <Controls
            currentFilter={currentFilter.name}
            filters={Object.keys(filters) as Array<FilterName>}
            onTodosFilterChange={handleFilterChange}
            undoneTodos={storageTodos.filter((todo) => !todo.done).length}
            onCompletedTodosClear={handleCompletedTodosClear}
          />
        </>
      ) : (
        ''
      )}
    </Container>
  );
};

export type FilterName = keyof typeof filters;
export default Todos;
