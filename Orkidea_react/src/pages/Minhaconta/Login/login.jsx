import HeaderComponent from '../../../components/Header/Header'
import MainImg from '../../../assets/Imagens_manipulações/Screenshot_1.png'
import InternalloginLogo from '../../../assets/rosa.png'
import { Main, MainImgStyle, InternalLogin, CustonForm, LoginForm, LogoLogin } from '../Login/login.style'
import { Button } from '../Login/login.style'

export default function Login() {
  return (
    <>
      <HeaderComponent />
      <div className="container">
        <Main>
          <MainImgStyle>
            <MainImg />
          </MainImgStyle>

          <LoginForm>
            <InternalLogin>
              <LogoLogin>
                <InternalloginLogo />
              </LogoLogin>
              <h2>Login</h2>
              <CustonForm>
                <input type="email" />
                <input type="password" />
                <input type="submit" value="entrar" />
              </CustonForm>
              <Button>Cadastro</Button>
              <p>Esqueceu sua senha? <a href="#">Esqueceu a senha?</a></p>  {/*Deixar assim por enquanto mas o certo é botar para rota */}
            </InternalLogin>
          </LoginForm>
        </Main>
      </div>
    </>
  )
}