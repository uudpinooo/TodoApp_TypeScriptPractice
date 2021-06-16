import { useContext, VFC } from "react";
import Link from 'next/link';
import styled from 'styled-components';
import { Context, ContextType } from 'providers/Provider';

const DeleteTodos: VFC = () => {
  const { deleteTodos, setDeleteTodos } = useContext<ContextType>(Context);

  const onClickDelete = (index: number) => {
    // deleteTodosから指定のTodoを削除
    const target = [...deleteTodos];
    target.splice(index, 1);
    setDeleteTodos(target);
  }

  return (
    <div>
      <ul>
        <StyledP>削除したTodo</StyledP>
        {deleteTodos.map((todo, index) => {
          return (
            <StyledIncompleteTodo>
              <li key={index}>{todo}</li>
              <StyledButton onClick={() => onClickDelete(index)}>完全に削除</StyledButton>
            </StyledIncompleteTodo>
          )
        })}
      </ul>

      <Link href="/">もどる</Link>
    </div>
  )
}

const StyledP = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
`;

const StyledIncompleteTodo = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const StyledButton = styled.button`
  margin-left: 0.3rem;
  &:hover {
    cursor: pointer;
  }
`;

export default DeleteTodos;