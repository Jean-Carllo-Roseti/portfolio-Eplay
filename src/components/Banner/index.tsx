import { Imagem, Preco, Titulos } from './styles'

import BannerImg from '../../assets/images/banner-homem-aranha.png'
import Tag from '../Tag'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${BannerImg})` }}>
    <div className="container">
      <Tag size="big">Destaque do dia</Tag>
      <Titulos>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Titulos>
      <Preco>
        De <span>R$ 250,00</span> <br />
        por apenas R$ 99,00
      </Preco>
    </div>
  </Imagem>
)
export default Banner
