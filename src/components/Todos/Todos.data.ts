import type { Todo } from './Todos.types';

export const initialTodos: Todo[] = [
  {
    name: 'Complete online JavaScript course',
    done: true,
    id: 1,
  },
  { name: 'Jog around the park 3x', done: false, id: 2 },
  { name: '10 minutes meditation', done: false, id: 3 },
  { name: 'Read for 1 hour', done: false, id: 4 },
  { name: 'Pick up groceries', done: false, id: 5 },
  {
    name: 'Complete Todo App on Frontend Mentor',
    done: false,
    id: 6,
  },
];

export enum FilterName {
  ALL = 'All',
  ACTIVE = 'Active',
  COMPLETED = 'Completed',
}

export const filters = {
  [FilterName.ALL]: {
    name: FilterName.ALL,
    function: (todos: Todo[]) => todos,
  },
  [FilterName.ACTIVE]: {
    name: FilterName.ACTIVE,
    function: (todos: Todo[]) => todos.filter((todo) => !todo.done),
  },
  [FilterName.COMPLETED]: {
    name: FilterName.COMPLETED,
    function: (todos: Todo[]) => todos.filter((todo) => todo.done),
  },
};
