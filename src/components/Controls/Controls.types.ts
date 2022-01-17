import type { FilterName } from '../Todos';

export interface ControlsProps {
  undoneTodos: number;
  onCompletedTodosClear: () => void;
  filters: FilterName[];
  currentFilter: FilterName;
  onTodosFilterChange: (newFilterName: FilterName) => void;
}
