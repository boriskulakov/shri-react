'use client'

import classNames from 'classnames'
import styles from './css/page.module.css'
import Filters from './components/filter/filters'
import TicketCard from './components/ticketCard/ticketCard'
import { useDispatch, useSelector } from 'react-redux'
import { useGetMoviesQuery } from '@/redux/services/movieApi'
import { movie } from '@/app/utils/movie'

export default function Home() {
  const { data, isLoading, error } = useGetMoviesQuery(null)

  return (
    <div className={classNames(styles.container, 'page_container')}>
      <div className={classNames(styles.filters)}>
        <div className={classNames(styles.search)}>
          <p className={classNames(styles.title)}>Фильтр поиска</p>
          <Filters />
        </div>
      </div>
      <div className={classNames(styles.films)}>
        {data && data.map((el: movie) => <TicketCard id={el.id} key={el.id} />)}
      </div>
    </div>
  )
}
