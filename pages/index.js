import { Provider } from 'providers/Provider';
import styled from 'styled-components'
import { App } from './app';
import DeleteTodos from './delete';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return (
    <Provider>
      <App />
      <DeleteTodos />
    </Provider>
  )
}
