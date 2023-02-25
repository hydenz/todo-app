import type { ITodo } from '../../constants';

export interface TodoProps {
  todo: ITodo;
  onTodoDeletion: (todoID: ITodo['id']) => void;
  onTodoCompletion: (todoID: ITodo['id']) => void;
}
