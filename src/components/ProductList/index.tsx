import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductList = ({ title, background }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        <Product
          title={'Nome do jogo'}
          category={'Ação'}
          system={'Windows'}
          description={'teste'}
          infos={['-10%', 'R$ 150,00']}
          imgage={'//placehold.it/222x250'}
        />
        <Product
          title={'Nome do jogo'}
          category={'Ação'}
          system={'Windows'}
          description={'teste'}
          infos={['-10%', 'R$ 150,00']}
          imgage={'//placehold.it/222x250'}
        />
        <Product
          title={'Nome do jogo'}
          category={'Ação'}
          system={'Windows'}
          description={'teste'}
          infos={['-10%', 'R$ 150,00']}
          imgage={'//placehold.it/222x250'}
        />
        <Product
          title={'Nome do jogo'}
          category={'Ação'}
          system={'Windows'}
          description={'teste'}
          infos={['-10%', 'R$ 150,00']}
          imgage={'//placehold.it/222x250'}
        />
      </List>
    </div>
  </Container>
)

export default ProductList
