import classNames from 'classnames'
import styles from './css/page.module.css'
import Filters from './components/filter/filters'
import TicketCard from './components/ticketCard/ticketCard'

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
        <TicketCard id="2aT976Fs_Bek0e2ZR_05V" />
        <TicketCard id="CTzeB2PGEHHBwxCNlU4uo" />
        <TicketCard id="5flr8UOuJz7UuputaZ9iL" />
        <TicketCard id="9t2dPgRBgWpmOXRXK5l4Q" />
      </div>
    </div>
  )
}
