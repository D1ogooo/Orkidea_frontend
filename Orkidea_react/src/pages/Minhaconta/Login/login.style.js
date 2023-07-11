import styled from 'styled-components'

export const Main = styled.div`
 display: flex;
 margin-top: 120px;
`

export const MainImgStyle = styled.div`
 margin-top: 150px;

 img {
  width: 550px;
  height: 500px;
  border: solid 1px #0000000c;
 }
`

export const LoginForm = styled.div`
  width: 500px;
  height: 498px;
  margin-left: -1px;
  margin-top: 1px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0px 50px 50px 0px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`

export const InternalLogin = styled.div`
  width: 320px;
  margin: 0 auto;
  height: 350px;
  border-radius: 5px;
  text-align: center;
  margin-top: 70px;

  & img {
  width: 50px;
  height: 50px;
  margin-top: 20px;
  }

  & h2 {
  text-align: center;
  margin-top: -80px;
  padding-top: 90px;
  margin-bottom: 20px;
  font-family: 'Ubuntu', sans-serif;
  font-weight: bold;
  color: #4b4b4b;
  }
`
export const LogoLogin = styled.img`
  width: 50px;
  height: 50px;
  margin-top: 20px;
`

export const CustonForm = styled.form`
  width: 250px;
  margin: 0 auto;
  
  & input[type="email"]{
  width: 250px;
  height: 30px;
  background-color: #322b4656;
  border: solid 1px #f1f1f131;
  margin-top: 2px;
  border-radius: 2px;
  }

  & input[type="password"]{
  width: 250px;
  height: 30px;
  background-color: #322b4656;
  border: solid 1px #f1f1f131;
  margin-top: 2px;
  border-radius: 2px;
  }

  & input[type="submit"]{
  width: 250px;
  height: 30px;
  font-size: 13px;
  color: #ffffffd8;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  letter-spacing: 1px;
  cursor: pointer;
  margin-top: 2px;
  border-radius: 2px;
  background-color: #08b45e;
  border: solid 1px #00000010;
  }

  & input[type="submit"]:hover {
  background-color: #2e9c65;
  transition: 0.3s all;  
  }

  & input::placeholder {
  padding: 2px;
  color: #14141473;
  font-weight: 600;
  font-size: 12px;
  font-family: 'Ubuntu', sans-serif;
}
`

export const Buttton = styled.button`
  
`