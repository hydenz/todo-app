/* eslint-disable react/jsx-props-no-spreading  */
import { useEffect, useState } from 'react';
import { DragDropContext, Draggable, DropResult } from 'react-beautiful-dnd';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import StrictModeDroppable from '../StrictModeDroppable';
import Todo from '../Todo';
import { DraggableChildren } from './List.style';
import type { ListProps } from './List.types';

function List({ filteredTodos, setStorageTodos }: ListProps) {
  const [isDragDisabled, setIsDragDisabled] = useState(false);

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

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsDragDisabled(false);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [filteredTodos.length]);

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <StrictModeDroppable droppableId="0">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{
              boxShadow: '0px 50px 22px -20px #000',
            }}
          >
            <TransitionGroup>
              {filteredTodos.map((todo, idx) => (
                <CSSTransition
                  classNames="fade"
                  timeout={{ enter: 500, exit: 1000 }}
                  key={todo.id}
                  onExit={() => setIsDragDisabled(true)}
                >
                  {(state) => {
                    const isExiting = state === 'exiting';

                    return (
                      <Draggable
                        draggableId={todo.id.toString()}
                        index={idx}
                        isDragDisabled={isExiting || isDragDisabled}
                      >
                        {(innerProvided) => (
                          <DraggableChildren
                            ref={innerProvided.innerRef}
                            {...innerProvided.dragHandleProps}
                            {...innerProvided.draggableProps}
                          >
                            <Todo
                              todo={todo}
                              onTodoCompletion={(todoID) => {
                                if (!isExiting) handleTodoCompletion(todoID);
                              }}
                              onTodoDeletion={(todoID) =>
                                handleTodoDelete(todoID)
                              }
                            />
                          </DraggableChildren>
                        )}
                      </Draggable>
                    );
                  }}
                </CSSTransition>
              ))}
            </TransitionGroup>
            {provided.placeholder}
          </div>
        )}
      </StrictModeDroppable>
    </DragDropContext>
  );
}

export default List;
