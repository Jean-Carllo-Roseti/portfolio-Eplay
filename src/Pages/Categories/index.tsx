import Game from '../../Models/Games'
import Banner from '../../components/Banner'
import ProductList from '../../components/ProductList'

import Resident from '../../assets/images/resident.png'
import Zelda from '../../assets/images/zelda.png'
import Diblo from '../../assets/images/diablo.png'
import StarWars from '../../assets/images/star_wars.png'

const promcoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'at deserunt numquam ut non? Nam dolorem illo perspiciatis illum eveniet ea repudiandae voluptatem soluta eos.',
    infos: ['10%', 'R$ 250,00'],
    image: Resident,
    system: 'PS4',
    title: 'Resident Evil'
  },
  {
    id: 2,
    category: 'Aventura',
    description:
      'at deserunt numquam ut non? Nam dolorem illo perspiciatis illum eveniet ea repudiandae voluptatem soluta eos.',
    infos: ['15%', 'R$ 220,00'],
    image: Zelda,
    system: 'PS5',
    title: 'Zelda'
  },
  {
    id: 3,
    category: 'RPG',
    description:
      'at deserunt numquam ut non? Nam dolorem illo perspiciatis illum eveniet ea repudiandae voluptatem soluta eos.',
    infos: ['20%', 'R$ 200,00'],
    image: Diblo,
    system: 'Windows',
    title: 'Diablo'
  },
  {
    id: 4,
    category: 'Ação',
    description:
      'at deserunt numquam ut non? Nam dolorem illo perspiciatis illum eveniet ea repudiandae voluptatem soluta eos.',
    infos: ['10%', 'R$ 250,00'],
    image: StarWars,
    system: 'PS5',
    title: 'Star Wars'
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'Ação',
    description:
      'at deserunt numquam ut non? Nam dolorem illo perspiciatis illum eveniet ea repudiandae voluptatem soluta eos.',
    infos: ['15/09'],
    image: Resident,
    system: 'PS4',
    title: 'Resident Evil'
  },
  {
    id: 6,
    category: 'Aventura',
    description:
      'at deserunt numquam ut non? Nam dolorem illo perspiciatis illum eveniet ea repudiandae voluptatem soluta eos.',
    infos: ['15/09'],
    image: Zelda,
    system: 'PS5',
    title: 'Zelda'
  },
  {
    id: 7,
    category: 'RPG',
    description:
      'at deserunt numquam ut non? Nam dolorem illo perspiciatis illum eveniet ea repudiandae voluptatem soluta eos.',
    infos: ['15/09'],
    image: Diblo,
    system: 'Windows',
    title: 'Diablo'
  },
  {
    id: 8,
    category: 'Ação',
    description:
      'at deserunt numquam ut non? Nam dolorem illo perspiciatis illum eveniet ea repudiandae voluptatem soluta eos.',
    infos: ['15/09'],
    image: StarWars,
    system: 'PS5',
    title: 'Star Wars'
  }
]

const Categories = () => (
  <>
    <Banner />
    <ProductList title={'RPG'} background={'gray'} games={promcoes} />
    <ProductList title={'Ação'} background={'black'} games={emBreve} />
    <ProductList title={'Aventura'} background={'gray'} games={promcoes} />
    <ProductList title={'FPS'} background={'black'} games={emBreve} />
  </>
)

export default Categories
