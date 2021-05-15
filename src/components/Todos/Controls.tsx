import React from 'react';
import { useMediaQuery } from 'react-responsive';
import {
  InfoRow,
  InfoRowButton,
  InfoRowText,
  FiltersRow,
  FiltersButton,
  DragnDropText,
} from './styles';
import { FilterName } from './types';

const Controls = ({
  undoneTodos,
  onCompletedTodosClear,
  filters,
  currentFilter,
  onTodosFilterChange,
}: ControlsProps) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 570px)',
  });

  const filtersControlButtons = filters.map((filterName) => (
    <FiltersButton
      key={filterName}
      selected={currentFilter === filterName}
      onClick={() => onTodosFilterChange(filterName)}
    >
      {filterName}
    </FiltersButton>
  ));

  return (
    <>
      <InfoRow>
        <InfoRowText>{undoneTodos} items left</InfoRowText>
        {isDesktopOrLaptop && <span>{filtersControlButtons}</span>}
        <InfoRowButton onClick={onCompletedTodosClear} type='button'>
          Clear Completed
        </InfoRowButton>
      </InfoRow>
      {!isDesktopOrLaptop && <FiltersRow>{filtersControlButtons}</FiltersRow>}
      <DragnDropText>Drag and drop to reorder list</DragnDropText>
    </>
  );
};

interface ControlsProps {
  undoneTodos: number;
  onCompletedTodosClear: () => void;
  filters: FilterName[];
  currentFilter: FilterName;
  onTodosFilterChange: (newFilterName: FilterName) => void;
}

export default Controls;
