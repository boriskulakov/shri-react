'use client'

import classNames from 'classnames'
import styles from './css/page.module.css'
import Filters from './components/filter/filters'
import Films from './home/films'

export default function Home() {
  return (
    <div className={classNames(styles.container, 'page_container')}>
      <div className={classNames(styles.filters)}>
        <div className={classNames(styles.search)}>
          <p className={classNames(styles.title)}>Фильтр поиска</p>
          <Filters />
        </div>
      </div>
      <div className={classNames(styles.films)}>
        <Films />
      </div>
    </div>
  )
}
