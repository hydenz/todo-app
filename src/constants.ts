export type TFilterName = 'All' | 'Active' | 'Completed';

export interface ITodo {
  id: number;
  name: string;
  done: boolean;
}

export const filters: { [key in TFilterName]: (todo: ITodo) => boolean } = {
  All: () => true,
  Active: (todo: ITodo) => !todo.done,
  Completed: (todo: ITodo) => todo.done,
} as const;
