'use client'

import classNames from 'classnames'
import styles from './filters.module.css'
import Select from '../select/select'
import { SFProText } from '@/font-vars'
import { useGetCinemasQuery } from '@/redux/services/movieApi'
import { genres } from '@/app/utils/movie'
import { useDispatch } from 'react-redux'
import { filterActions } from '@/redux/features/filters'
import { useState } from 'react'

const cinemas = [
  {
    id: 'none',
    name: 'Не выбран',
    movieIds: [],
  },
]

const InputName = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const changeHandler = (e) => {
    setValue(e.target.value)
    dispatch(filterActions.setName(e.target.value))
  }

  return (
    <input
      type="text"
      className={classNames(styles.input, SFProText.variable)}
      placeholder="Введите название"
      value={value}
      onChange={(e) => changeHandler(e)}
    />
  )
}

function Filters() {
  let { data } = useGetCinemasQuery(null)

  return (
    <div className={classNames(styles.filters, SFProText.variable)}>
      <div className={classNames(styles.filter)}>
        <p className={classNames(styles.name)}>Название</p>
        <InputName />
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
