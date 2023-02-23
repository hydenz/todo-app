import type { TFilterName } from '../Todos';

export interface ControlsProps {
  activeTodosLength: number;
  onCompletedTodosClear: () => void;
  currentFilterName: TFilterName;
  onTodosFilterChange: (newFilterName: TFilterName) => void;
}
