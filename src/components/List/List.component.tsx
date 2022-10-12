/* eslint-disable react/jsx-props-no-spreading  */
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from 'react-beautiful-dnd';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {
  TodoRow,
  RowCheck,
  RowCheckWrapper,
  RowCross,
  DraggableChildren,
} from './List.style';
import type { ListProps } from './List.types';

function List({ filteredTodos, setStorageTodos }: ListProps) {
  const handleTodoCompletion = (todoId: number) => {
    setStorageTodos((oldTodos) => {
      const foundTodo = oldTodos.find((todo) => todo.id === todoId)!;
      foundTodo.done = !foundTodo.done;
      return [...oldTodos];
    });
  };

  const handleTodoDelete = (todoId: number) => {
    setStorageTodos((oldTodos) =>
      oldTodos.filter((todo) => todo.id !== todoId)
    );
  };

  const handleDragEnd = (e: DropResult) => {
    if (!e.destination) return;

    // Setting the new todos so that the filters do not interfere in the order
    setStorageTodos((oldStorageTodos) => {
      const currentShownTodos = [...filteredTodos];
      const spliced = currentShownTodos.splice(e.source.index, 1)[0];
      currentShownTodos.splice(e.destination!.index, 0, spliced);
      let i = 0;
      const newStorageTodos = oldStorageTodos.map((todo) => {
        if (currentShownTodos.includes(todo)) {
          i += 1;
          return currentShownTodos[i - 1];
        }
        return todo;
      });
      return newStorageTodos;
    });
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="0">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{ boxShadow: '0px 50px 22px -20px #000' }}
          >
            <TransitionGroup>
              {filteredTodos.map((todo, idx) => (
                <CSSTransition classNames="fade" timeout={500} key={todo.id}>
                  <Draggable draggableId={todo.id.toString()} index={idx}>
                    {(innerProvided) => (
                      <DraggableChildren
                        ref={innerProvided.innerRef}
                        {...innerProvided.dragHandleProps}
                        {...innerProvided.draggableProps}
                      >
                        <TodoRow
                          borderRadius={!idx ? '.5rem .5rem 0 0' : ''}
                          done={todo.done}
                        >
                          <RowCheckWrapper
                            done={todo.done}
                            onClick={() => handleTodoCompletion(todo.id)}
                          >
                            <RowCheck done={todo.done} />
                          </RowCheckWrapper>
                          {todo.name}
                          <RowCross onClick={() => handleTodoDelete(todo.id)} />
                        </TodoRow>
                      </DraggableChildren>
                    )}
                  </Draggable>
                </CSSTransition>
              ))}
            </TransitionGroup>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default List;
