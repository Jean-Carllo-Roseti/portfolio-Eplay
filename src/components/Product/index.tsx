import Tag from '../Tag'

import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categorias</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod similique
      error ratione dolore, obcaecati rerum numquam doloribus, illo iure
      blanditiis harum deleniti. Similique dicta illum facilis nihil nostrum,
      saepe ipsum.
    </Descricao>
  </Card>
)

export default Product
