import type { ITodo } from '../Todo';

export interface CreatorProps {
  storageTodos: ITodo[];
  setStorageTodos: (value: ITodo[] | ((val: ITodo[]) => ITodo[])) => void;
}
