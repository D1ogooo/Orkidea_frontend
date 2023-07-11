import { Link } from "react-router-dom";
import { HeaderStyle, HeaderFilho } from './Header.style'
import HeaderLogo from '../../assets/rosa.png'
import PackageLogo from '../../assets/bx-package.svg'
import UserLogo from '../../assets/bx-user.svg'
import BellLogo from '../../assets/bxs-bell.svg'
import '../../App.css' /* feito para a estilização local e não global */

function HeaderComponent() {
  return (
    <HeaderStyle>
      <div className="container">
        <HeaderFilho>
          <div className="Logo">
            <img src={HeaderLogo} alt="logo de uma rosa" />
            <p>Orkidea</p>
          </div>

          {/* <ul>
            <img src={PackageLogo} alt="logo da aba de produtos" />
            <li><a href="#">Produtos</a></li>
            <img src={UserLogo} alt="logo da aba de login" />
            <li><a href="#">Minha conta</a></li>
            <img src={BellLogo} alt="logo da aba de noticias" />
            <li><a href="#">Informações</a></li>
          </ul> */}

          <nav>
            <ul>
            <img src={PackageLogo} alt="logo da aba de produtos" />
            <Link to="/products"></Link>
            <img src={UserLogo} alt="logo da aba de login" />
            <Link to="/login"></Link>
            <img src={BellLogo} alt="logo da aba de noticias" />
            <Link to="/products"></Link>
            </ul>
          </nav>

        </HeaderFilho>
      </div>
    </HeaderStyle>
  )
}

export default HeaderComponent