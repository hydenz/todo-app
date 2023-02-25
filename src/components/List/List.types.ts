import type { ITodo } from '../../constants';

export interface ListProps {
  filteredTodos: ITodo[];
  setStorageTodos: (value: ITodo[] | ((val: ITodo[]) => ITodo[])) => void;
}
