import type { ITodo } from '../Todo';

export interface ListProps {
  filteredTodos: ITodo[];
  setStorageTodos: (value: ITodo[] | ((val: ITodo[]) => ITodo[])) => void;
}
