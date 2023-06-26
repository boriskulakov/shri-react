'use client'

import classNames from 'classnames'
import styles from './filters.module.css'
import Select from '../select/select'
import { SFProText } from '@/font-vars'

const genres = [
  {
    id: 'none',
    name: 'Не выбран',
  },
  {
    id: 'action',
    name: 'Боевик',
  },
  {
    id: 'comedy',
    name: 'Комедия',
  },
  {
    id: 'fantasy',
    name: 'Фэнтези',
  },
  {
    id: 'horror',
    name: 'Ужасы',
  },
]
const cinemas = [
  {
    id: 'none',
    name: 'Не выбран',
  },
  {
    id: 'CTfrB5PGEJHBwxCNlU4uo',
    name: 'Синема сад',
  },
  {
    id: '2a2976KdjBek0e2ZR_07V',
    name: '4 с половиной звезды',
  },
]

function Filters() {
  return (
    <div className={classNames(styles.filters, SFProText.variable)}>
      <div className={classNames(styles.filter)}>
        <p className={classNames(styles.name)}>Название</p>
        <input
          type="text"
          className={classNames(styles.input, SFProText.variable)}
          placeholder="Введите название"
        />
      </div>
      <div className={classNames(styles.filter)}>
        <p className={classNames(styles.name)}>Жанр</p>
        <Select placeholder="Выберите жанр" data={genres} />
      </div>
      <div className={classNames(styles.filter)}>
        <p className={classNames(styles.name)}>Кинотеатр</p>
        <Select placeholder="Выберите кинотеатр" data={cinemas} />
      </div>
    </div>
  )
}

export default Filters
