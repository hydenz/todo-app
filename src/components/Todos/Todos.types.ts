export interface Todo {
  id: number;
  name: string;
  done: boolean;
}

export interface TodosProps {
  children?: React.ReactNode;
}
