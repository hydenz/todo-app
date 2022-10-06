import { useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Container, FadeContainer } from './Todos.style';
import useLocalStorage from '../../hooks/useLocalStorage';
import Creator from '../Creator';
import List from '../List';
import Controls from '../Controls';
import { initialTodos, FilterName, filters } from './Todos.data';
import type { TodosProps } from './Todos.types';

function Todos({ children }: TodosProps) {
  const [storageTodos, setStorageTodos] = useLocalStorage(
    'todos',
    initialTodos
  );
  const [currentFilter, setCurrentFilter] = useState<
    typeof filters[FilterName]
  >(filters.All);
  const [showTodos, setShowTodos] = useState(true);

  const filteredTodos = storageTodos.filter(currentFilter.function);

  const nextFilterName = useRef<FilterName>(currentFilter.name);

  const handleCompletedTodosClear = () => {
    setStorageTodos((oldTodos) => oldTodos.filter(filters.Active.function));
  };

  const handleFilterChange = (newFilterName: FilterName) => {
    if (newFilterName === currentFilter.name) return;

    nextFilterName.current = newFilterName;
    setShowTodos(false);
  };

  const handleExited = () => {
    setCurrentFilter(filters[nextFilterName.current]);
    setShowTodos(true);
  };

  return (
    <Container>
      {children}
      <Creator storageTodos={storageTodos} setStorageTodos={setStorageTodos} />
      <CSSTransition
        classNames="fade"
        timeout={500}
        in={showTodos}
        appear
        unmountOnExit
        onExited={handleExited}
      >
        <FadeContainer>
          <List
            showTodos={showTodos}
            filteredTodos={filteredTodos}
            setStorageTodos={setStorageTodos}
          />
          {!!storageTodos.length && (
            <Controls
              currentFilterName={currentFilter.name}
              onTodosFilterChange={handleFilterChange}
              activeTodosLength={
                storageTodos.filter(filters.Active.function).length
              }
              onCompletedTodosClear={handleCompletedTodosClear}
            />
          )}
        </FadeContainer>
      </CSSTransition>
    </Container>
  );
}

export default Todos;
