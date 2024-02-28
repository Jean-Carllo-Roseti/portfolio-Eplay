import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#eee',
  cinza: '#333',
  verde: '#10AC84',
  preto: '#111'
}

export const GlobalCss = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Roboto, sans-serif;
  list-style: none;
  }

  body {
    background-color: ${cores.preto};
    color: ${cores.branca};
    padding-top: 40px;
  }
`
export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
