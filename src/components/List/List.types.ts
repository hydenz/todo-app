import type { Todo } from '../Todos';

export interface ListProps {
  filteredTodos: Todo[];
  showTodos: boolean;
  setStorageTodos: (value: Todo[] | ((val: Todo[]) => Todo[])) => void;
}
