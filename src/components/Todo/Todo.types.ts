export interface ITodo {
  id: number;
  name: string;
  done: boolean;
}

export interface TodoProps {
  todo: ITodo;
  onTodoDeletion: (todoID: ITodo['id']) => void;
  onTodoCompletion: (todoID: ITodo['id']) => void;
}
