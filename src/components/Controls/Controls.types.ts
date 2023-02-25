import type { TFilterName } from '../../constants';

export interface ControlsProps {
  activeTodosLength: number;
  onCompletedTodosClear: () => void;
  currentFilterName: TFilterName;
  onTodosFilterChange: (newFilterName: TFilterName) => void;
}
