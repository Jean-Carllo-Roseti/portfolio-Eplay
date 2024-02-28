import { createGlobalStyle } from 'styled-components'

const cores = {
  branca: '#333',
  cinza: '#EEEEEE',
  verde: '#10AC84',
  preto: '#111'
}

const GlobalCss = createGlobalStyle`
* {
  border-size: border-box;
  margin: 0;
  font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${cores.preto}
  }
`
