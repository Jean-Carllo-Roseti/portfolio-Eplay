import { Link } from 'react-router-dom'

import { HeaderBar, Links, LinksItens, LinkCart } from './styles'

import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

const Header = () => {
  return (
    <HeaderBar>
      <div>
        <img src={logo} alt="Eplay" />
        <nav>
          <Links>
            <LinksItens>
              <Link to="/categories">Categorias</Link>
            </LinksItens>
            <LinksItens>
              <a href="#">Novidades</a>
            </LinksItens>
            <LinksItens>
              <a href="#">Promoções</a>
            </LinksItens>
          </Links>
        </nav>
      </div>
      <LinkCart>
        0 - produtos(s) <img src={carrinho} alt="imagem de um corrinho" />
      </LinkCart>
    </HeaderBar>
  )
}

export default Header
