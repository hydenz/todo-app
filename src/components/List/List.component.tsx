/* eslint-disable react/jsx-props-no-spreading  */
import { useState } from 'react';
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
import type { FilterName, Todo } from '../Todos';

function List({
  todos,
  onTodoCompletion,
  onTodoDelete,
  onDragEnd,
  currentFilterName,
}: ListProps) {
  const [hoveredTodoId, setHoveredTodoId] = useState<number | null>(null);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="0">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{ boxShadow: '0px 50px 22px -20px #000' }}
          >
            <TransitionGroup appear>
              {todos.map((todo, idx) => (
                <CSSTransition
                  classNames="fade"
                  timeout={500}
                  key={todo.id}
                  exit={
                    currentFilterName === 'All' || todo.id === hoveredTodoId
                  }
                >
                  <Draggable draggableId={todo.id.toString()} index={idx}>
                    {(innerProvided) => (
                      <DraggableChildren
                        ref={innerProvided.innerRef}
                        {...innerProvided.dragHandleProps}
                        {...innerProvided.draggableProps}
                        onMouseOver={() => setHoveredTodoId(todo.id)}
                        onMouseOut={() => setHoveredTodoId(null)}
                      >
                        <TodoRow
                          borderRadius={!idx ? '.5rem .5rem 0 0' : ''}
                          done={todo.done}
                        >
                          <RowCheckWrapper
                            done={todo.done}
                            onClick={() => onTodoCompletion(todo.id)}
                          >
                            <RowCheck done={todo.done} />
                          </RowCheckWrapper>
                          {todo.name}
                          <RowCross onClick={() => onTodoDelete(todo.id)} />
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

interface ListProps {
  todos: Todo[];
  onTodoCompletion: (todoId: number) => void;
  onTodoDelete: (todoId: number) => void;
  onDragEnd: (e: DropResult) => void;
  currentFilterName: FilterName;
}

export default List;
