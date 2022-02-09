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
import type { Todo } from '../Todos';
import { FilterName } from "../Todos"

function List({
  todos,
  onTodoCompletion,
  onTodoDelete,
  onDragEnd,
  currentFilterName,
}: ListProps) {

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
              {todos.map((todo, idx) => {
                const exitMappings = {
                  [FilterName.ALL]: true,
                  [FilterName.ACTIVE]: todo.done,
                  [FilterName.COMPLETED]: !todo.done
                }

                return (
                  <CSSTransition
                    classNames="fade"
                    timeout={500}
                    key={todo.id}
                    exit={exitMappings[currentFilterName]}
                  >
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
                )
              })}
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
