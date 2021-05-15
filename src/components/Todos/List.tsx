/* eslint-disable react/jsx-props-no-spreading  */
import React, { useEffect, useRef } from 'react';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from 'react-beautiful-dnd';
import { Row, RowCheck, RowCheckWrapper, RowCross } from './styles';
import {
  ConditionalFadeIn,
  //  FadeIn
} from '../Fade/Index';
import type { Todo } from './types';

const List = ({
  todos,
  onTodoCompletion,
  onTodoDelete,
  onDragEnd,
}: ListProps) => {
  const oldTodos = useRef(todos);

  useEffect(() => {
    oldTodos.current = todos;
  }, [todos]);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId='0'>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{ boxShadow: '0px 50px 22px -20px #000' }}
          >
            {todos.map((todo, idx) => (
              <Draggable
                draggableId={todo.id.toString()}
                index={idx}
                key={todo.id}
              >
                {(innerProvided) => (
                  <div
                    ref={innerProvided.innerRef}
                    {...innerProvided.dragHandleProps}
                    {...innerProvided.draggableProps}
                  >
                    <ConditionalFadeIn
                      duration='0.5s'
                      condition={!oldTodos.current.includes(todo)}
                    >
                      <Row
                        divider
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
                      </Row>
                    </ConditionalFadeIn>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

interface ListProps {
  todos: Todo[];
  onTodoCompletion: (todoId: number) => void;
  onTodoDelete: (todoId: number) => void;
  onDragEnd: (e: DropResult) => void;
}

export default List;
