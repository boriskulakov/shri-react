'use client'

import classNames from 'classnames'
import styles from './filters.module.css'
import Select from '../select/select'
import { SFProText } from '@/font-vars'
import { useGetCinemasQuery } from '@/redux/services/movieApi'
import { genres } from '@/app/utils/movie'

const cinemas = [
  {
    id: 'none',
    name: 'Не выбран',
  },
]

function Filters() {
  let { data } = useGetCinemasQuery(null)

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
        <Select placeholder="Выберите жанр" type="genre" data={genres} />
      </div>
      <div className={classNames(styles.filter)}>
        <p className={classNames(styles.name)}>Кинотеатр</p>
        <Select
          placeholder="Выберите кинотеатр"
          type="cinema"
          data={cinemas.concat(data)}
        />
      </div>
    </div>
  )
}

export default Filters
