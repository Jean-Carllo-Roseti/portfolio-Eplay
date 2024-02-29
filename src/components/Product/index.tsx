import Tag from '../Tag'

import { Card, Descricao, Infos, Titulo } from './styles'

export type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  imgage: string
}

const Product = ({
  title,
  category,
  system,
  description,
  infos,
  imgage
}: Props) => (
  <Card>
    <img src={imgage} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Titulo>{title}</Titulo>
    <Tag>{category}</Tag>
    <Tag>{system}</Tag>
    <Descricao>{description}</Descricao>
  </Card>
)

export default Product
