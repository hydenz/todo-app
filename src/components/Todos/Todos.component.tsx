import { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Container, FadeContainer } from './Todos.style';
import useLocalStorage from '../../hooks/useLocalStorage';
import Creator from '../Creator';
import List from '../List';
import Controls from '../Controls';
import { initialTodos, filters } from './Todos.data';
import type { TodosProps, TFilterName } from './Todos.types';

function Todos({ children }: TodosProps) {
  const [storageTodos, setStorageTodos] = useLocalStorage(
    'todos',
    initialTodos
  );
  const [currentFilter, setCurrentFilter] = useState<TFilterName>('All');
  const [showTodos, setShowTodos] = useState(true);

  const filteredTodos = storageTodos.filter(filters[currentFilter]);

  const nextFilterName = useRef(currentFilter);

  const handleCompletedTodosClear = () => {
    setStorageTodos((oldTodos) => oldTodos.filter(filters.Active));
  };

  const handleFilterChange = (newFilterName: TFilterName) => {
    if (newFilterName === currentFilter) return;

    nextFilterName.current = newFilterName;
    setShowTodos(false);
  };

  const handleExited = () => {
    setCurrentFilter(nextFilterName.current);
  };

  useEffect(() => {
    setShowTodos(true);
  }, [currentFilter]);

  return (
    <Container>
      {children}
      <Creator storageTodos={storageTodos} setStorageTodos={setStorageTodos} />
      <CSSTransition
        classNames="fade"
        timeout={{ appear: 1000, enter: 500, exit: 500 }}
        in={showTodos}
        appear
        unmountOnExit
        onExited={handleExited}
      >
        <FadeContainer>
          <List
            filteredTodos={filteredTodos}
            setStorageTodos={setStorageTodos}
          />
          {!!storageTodos.length && (
            <Controls
              currentFilterName={currentFilter}
              onTodosFilterChange={handleFilterChange}
              activeTodosLength={storageTodos.filter(filters.Active).length}
              onCompletedTodosClear={handleCompletedTodosClear}
            />
          )}
        </FadeContainer>
      </CSSTransition>
    </Container>
  );
}

export default Todos;
