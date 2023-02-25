import type { ITodo } from '../../constants';

export interface CreatorProps {
  storageTodos: ITodo[];
  setStorageTodos: (value: ITodo[] | ((val: ITodo[]) => ITodo[])) => void;
}
