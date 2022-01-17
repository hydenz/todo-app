import { filters } from './Todos.data';

export interface Todo {
  id: number;
  name: string;
  done: boolean;
}

export interface TodosProps {
  children?: React.ReactNode;
}

export type FilterName = keyof typeof filters;
