import styled from 'styled-components'

export const MainPrincipalStyle = styled.div`
 display: flex;
 align-items: center;
 margin-top: 200px;
 font-family: 'Nunito Sans', sans-serif;
 color: #322b46;

 h2 {
  margin-bottom: 15px;
 }
 span {
 color: #7225eeda;
 font-size: 25px;
 }

a {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 18px;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1ae6;
  cursor: pointer;
  transition: border-color 0.25s;
  text-decoration: none;
  color: #fff;
}
a:hover {
  border-color: #646cff;
}
a:focus,
a:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
`

export const MainQuemsomos = styled.div`
  display: flex;
  margin-bottom: 12.5rem;
  padding: 20px;
  height: 25rem;
  /* background-color: #111010; */
  background-color: #cfcfcfef;

  hr {
  border: none;
  padding: 1px;
  width: 29.125rem;
  height: 0.125rem;
  flex-shrink: 0;
  margin: 0 auto;
  margin-bottom: 20px;
  background-color: #322b46;
  }
`

export const TextP = styled.p`
  color: #696969ce;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  margin: 10px;
`

export const TextH2 = styled.h2`
  text-align: center;
  margin-bottom: 8px;
  font-size: 35px;
  font-family: 'Ubuntu', sans-serif;
  font-weight: bold;
  color: #480e77;
  margin-top: 20px;
`

export const ContatosPai = styled.div`
 display: flex;
 gap: 60px;
 justify-content: center;
 margin-top: 50px;

:nth-child(1),:nth-child(2),:nth-child(3){
  text-align: center;
} 

 p {
  color: rgba(105, 105, 105, 0.81);
  font-family: Ubuntu;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
 }

 h3 {
  color: rgba(5, 5, 5, 0.80);
  font-family: Ubuntu;
  font-size: 1.0625rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
 }
 
`

export const MainPrincipalInfo = styled.div`
 
`
