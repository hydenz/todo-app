import type { FilterName } from '../Todos';

export interface ControlsProps {
  undoneTodos: number;
  onCompletedTodosClear: () => void;
  currentFilterName: FilterName;
  onTodosFilterChange: (newFilterName: FilterName) => void;
}
