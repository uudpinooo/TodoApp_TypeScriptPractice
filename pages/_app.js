import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { Provider } from 'providers/Provider';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const theme = {
  colors: {
    primary: '#d4acad',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  )
}
