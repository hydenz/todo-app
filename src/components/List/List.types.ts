import type { Todo } from '../Todos';

export interface ListProps {
  filteredTodos: Todo[];
  setStorageTodos: (value: Todo[] | ((val: Todo[]) => Todo[])) => void;
}
