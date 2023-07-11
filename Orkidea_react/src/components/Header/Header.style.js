import styled from 'styled-components'

export const HeaderStyle = styled.header`
  background-color: #750391cc;
  height: 3.125rem;
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;

  ul {
  list-style: none;
  text-decoration: none;
  padding: 15px;
  display: flex;
  margin: 0 auto;
  }

  li {
  margin-top: 0.125rem;
  font-family: 'Ubuntu', sans-serif;
  padding: 4px;
  }
  
  li a {
  text-decoration: none;
  color: #bbbbbbf6;
  font-weight: 600;
  }
`

export const HeaderFilho = styled.div`
  display: flex;
`