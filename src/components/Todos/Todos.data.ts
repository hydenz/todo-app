import type { ITodo } from '../Todo';
import type { TFilterName } from './Todos.types';

export const initialTodos: ITodo[] = [
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

export const filters: { [key in TFilterName]: (todo: ITodo) => boolean } = {
  All: () => true,
  Active: (todo: ITodo) => !todo.done,
  Completed: (todo: ITodo) => todo.done,
} as const;
