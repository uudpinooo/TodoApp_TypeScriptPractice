import { createContext, VFC, ReactNode, useState, Dispatch, SetStateAction } from "react";

type Props = {
  children: ReactNode;
}

export type ContextType = {
  newTodo: string;
  setNewTodo: Dispatch<SetStateAction<string>>;
  incompleteTodos: string[];
  setIncompleteTodos: Dispatch<SetStateAction<string[]>>;
  completeTodos: string[];
  setCompleteTodos: Dispatch<SetStateAction<string[]>>;
  deleteTodos: string[];
  setDeleteTodos: Dispatch<SetStateAction<string[]>>
}

export const Context = createContext({} as ContextType);

export const Provider: VFC<Props> = ({ children }) => {
  const [newTodo, setNewTodo] = useState<string>('');
  const [incompleteTodos, setIncompleteTodos] = useState<string[]>([]);
  const [completeTodos, setCompleteTodos] = useState<string[]>([]);
  const [deleteTodos, setDeleteTodos] = useState<string[]>(["未完了1", "未完了2"]);

  return (
    <Context.Provider value={{
      newTodo, setNewTodo,
      incompleteTodos, setIncompleteTodos,
      completeTodos, setCompleteTodos,
      deleteTodos, setDeleteTodos,
    }}>
      {children}
    </Context.Provider>
  )
}