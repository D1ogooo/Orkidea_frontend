
import PrincipalImage from '../../assets/logo-fundoremovido.png'
import ImageQuemsomos from '../../assets/father-and-son-by-fence-1817597.jpg'
import ImageTelefone from '../../assets/bx-phone-call.svg'
import ImageInstagram from '../../assets/bxl-instagram.svg'
import ImageFacebook from '../../assets/bxl-facebook.svg'
import CarroselFisrtImg from '../../assets/Imagens_manipulações/composicao-de-bobinas-criativas.jpg'
import CarroselSecondImg from '../../assets/Imagens_manipulações/father-and-son-by-fence-1817597.jpg'
import CarroselTirdImg from '../../assets/Imagens_manipulações/medico-sorridente-com-estretoscopio-isolado-em-cinza.jpg'
import CarroselForImg from '../../assets/Imagens_manipulações/image-from-rawpixel-id-6072829-jpeg.jpg'
import { MainPrincipalStyle, MainQuemsomos, ContatosPai, TextP, TextH2 } from './Main.style'
import '../../App.css'
import '../../index.css'

function MainPrincipalComponent() {
  return (
    <>
      <div className="container">
        <MainPrincipalStyle>
          <div>
            <h1>Receba seus produtos de onde estiver</h1>
            <h2>com <span>Orkidea</span></h2>
            <a href="#main_produtos">Saiba sobre nós</a>
          </div>

          <img src={PrincipalImage} alt="imagem principal da farmacia"></img>
        </MainPrincipalStyle>
      </div>

      <MainQuemsomos>

        <div className='produtos_img_principal'>
          <img src={ImageQuemsomos} alt="imagem de quem somos" />
        </div>

        <div>
          <TextH2>Quem somos</TextH2>
          <hr />
          <TextP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nisi non
            , iusto odio vel, esse unde nobis, modi in cupiditate consequuntur molestiae
            corporis totam provident eveniet voluptatem animi suscipit exercitationem.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora libero rerum adipisci nobis.
            Nobis, tenetur unde eveniet incidunt iure totam culpa quas voluptates voluptatibus impedit,
            cupiditate distinctio, deserunt dolor quibusdam!</TextP>

          <ContatosPai>
            <div>
              <img src={ImageTelefone} alt="Icone do telefone da farmacia" />
              <h3>Telefone</h3>
              <p>+55 (27) 93856-2846</p>
            </div>
            <div>
              <img src={ImageInstagram} alt="Icone do instagram da farmacia" />
              <h3>Instagram</h3>
              <p>@Orkidea_farm</p>
            </div>
            <div>
              <img src={ImageFacebook} alt="Icone do facebook da farmacia" />
              <h3>Facebook</h3>
              <p>Farmacias Orkidea</p>
            </div>
          </ContatosPai>
        </div>
      </MainQuemsomos>

      <div className="slider">
        <div className="slides">
          <input type="radio" name="radio-btn" id="radio1" />
          <input type="radio" name="radio-btn" id="radio2" />
          <input type="radio" name="radio-btn" id="radio3" />
          <input type="radio" name="radio-btn" id="radio4" />
          <div className="slide first">
            <img src={CarroselFisrtImg} alt="primeira imagem" />
          </div>
          <div className="slide">
            <img src={CarroselSecondImg} alt="segunda imagem" />
          </div>
          <div className="slide">
            <img src={CarroselTirdImg} alt="terceira imagem" />
          </div>
          <div className="slide">
            <img src={CarroselForImg} alt="quarta imagem" />
          </div>

          <div className="navigationauto">
            <div className="auto-btn1"></div>
            <div className="auto-btn2"></div>
            <div className="auto-btn3"></div>
            <div className="auto-btn4"></div>
          </div>
        </div>

        <div className="manualnavigation">
          <label htmlFor='radio1' className='manualbtn'></label>
          <label htmlFor='radio2' className='manualbtn'></label>
          <label htmlFor='radio3' className='manualbtn'></label>
          <label htmlFor='radio4' className='manualbtn'></label>
        </div>
      </div>
      <div className="separate"></div>
    </>
  )
}

export default MainPrincipalComponent