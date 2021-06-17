import { ChangeEvent, useContext, VFC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Context, ContextType } from 'providers/Provider';

export const App: VFC = () => {
  const {
    newTodo,
    setNewTodo,
    incompleteTodos,
    setIncompleteTodos,
    completeTodos,
    setCompleteTodos,
    deleteTodos,
    setDeleteTodos,
  } = useContext<ContextType>(Context);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) =>
    setNewTodo(e.target.value);

  const onClickAdd = () => {
    if (newTodo === '') {
      return null;
    } else {
      setIncompleteTodos([...incompleteTodos, newTodo]);
      setNewTodo('');
    }
    return;
  };

  const onClickComplete = (todo: string, index: number) => {
    // inCompleteTodosから指定のTodoを削除
    const target = [...incompleteTodos];
    target.splice(index, 1);
    setIncompleteTodos(target);

    // completeTodosに指定のTodoを追加
    setCompleteTodos([...completeTodos, todo]);
  };

  const onClickBack = (todo: string, index: number) => {
    // completeTodosから指定のTodoを削除
    const target = [...completeTodos];
    target.splice(index, 1);
    setCompleteTodos(target);

    // inCompleteTodosに指定のTodoを追加
    setIncompleteTodos([...incompleteTodos, todo]);
  };

  const onClickDelete = (index: number, todo: string, status: string) => {
    // 未完了Todoの削除の場合はinCompleteTodosから指定のTodoを削除
    if (status === 'inComplete') {
      const targetOfIncomplete = [...incompleteTodos];
      targetOfIncomplete.splice(index, 1);
      setIncompleteTodos(targetOfIncomplete);
    }

    // 完了Todoの削除の場合はcompleteTodosから指定のTodoを削除
    if (status === 'complete') {
      const targetODCmplete = [...completeTodos];
      targetODCmplete.splice(index, 1);
      setCompleteTodos(targetODCmplete);
    }

    // 共通処理としてdeletetodosに追加
    setDeleteTodos([...deleteTodos, todo]);
  };

  return (
    <div>
      <p>Next.js TypeScript Todo☺️</p>
      <input
        type="text"
        placeholder="Todoを入力"
        value={newTodo}
        onChange={onChangeInput}
      />
      <button onClick={onClickAdd}>追加</button>

      <ul>
        <StyledP>未完了Todo</StyledP>
        {incompleteTodos.map((todo, index) => {
          return (
            <StyledIncompleteTodo key={index}>
              <li>{todo}</li>
              <StyledButton onClick={() => onClickComplete(todo, index)}>
                完了
              </StyledButton>
              <StyledButton
                onClick={() => onClickDelete(index, todo, 'inComplete')}
              >
                削除
              </StyledButton>
            </StyledIncompleteTodo>
          );
        })}
        <StyledP>完了Todo</StyledP>
        {completeTodos.map((todo, index) => {
          return (
            <StyledIncompleteTodo key={index}>
              <li>{todo}</li>
              <StyledButton onClick={() => onClickBack(todo, index)}>
                戻す
              </StyledButton>
              <StyledButton
                onClick={() => onClickDelete(index, todo, 'complete')}
              >
                削除
              </StyledButton>
            </StyledIncompleteTodo>
          );
        })}
      </ul>

      <Link href="/delete">削除したTodoへ</Link>
    </div>
  );
};

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

// export default App;
