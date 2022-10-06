import type { Todo } from '../Todos';

export interface CreatorProps {
  storageTodos: Todo[];
  setStorageTodos: (value: Todo[] | ((val: Todo[]) => Todo[])) => void;
}
