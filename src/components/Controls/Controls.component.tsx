import { useMediaQuery } from 'react-responsive';
import {
  InfoRow,
  InfoRowButton,
  InfoRowText,
  FiltersRow,
  FiltersButton,
  DragnDropText,
} from './Controls.style';
import type { ControlsProps } from './Controls.types';
import { filters, FilterName } from '../Todos';

function Controls({
  undoneTodos,
  onCompletedTodosClear,
  currentFilterName,
  onTodosFilterChange,
}: ControlsProps) {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 570px)',
  });

  const filtersControlButtons = (Object.keys(filters) as FilterName[]).map(
    (filterName) => (
      <FiltersButton
        key={filterName}
        selected={currentFilterName === filterName}
        onClick={() => onTodosFilterChange(filterName)}
      >
        {filterName}
      </FiltersButton>
    )
  );

  return (
    <>
      <InfoRow>
        <InfoRowText>{undoneTodos} items left</InfoRowText>
        {isDesktopOrLaptop && <span>{filtersControlButtons}</span>}
        <InfoRowButton onClick={onCompletedTodosClear} type="button">
          Clear Completed
        </InfoRowButton>
      </InfoRow>
      {!isDesktopOrLaptop && <FiltersRow>{filtersControlButtons}</FiltersRow>}
      <DragnDropText>Drag and drop to reorder list</DragnDropText>
    </>
  );
}

export default Controls;
