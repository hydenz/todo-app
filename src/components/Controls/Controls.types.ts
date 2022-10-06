import type { FilterName } from '../Todos';

export interface ControlsProps {
  activeTodosLength: number;
  onCompletedTodosClear: () => void;
  currentFilterName: FilterName;
  onTodosFilterChange: (newFilterName: FilterName) => void;
}
