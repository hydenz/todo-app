import React from 'react';
import {
  TodoCreator,
  RowCheckWrapper,
  RowCheck,
  TodoCreatorInput,
} from './styles';

const Creator = ({ newTodoName, onChange, onKeyPress }: CreatorProps) => (
  <TodoCreator>
    <RowCheckWrapper>
      <RowCheck />
    </RowCheckWrapper>
    <TodoCreatorInput
      value={newTodoName}
      onChange={onChange}
      onKeyPress={onKeyPress}
    />
  </TodoCreator>
);

interface CreatorProps {
  newTodoName: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export default Creator;
