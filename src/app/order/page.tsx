'use client'

import { useRef, useState } from 'react'
import classNames from 'classnames'
import styles from './page.module.css'
import { stylesType } from '../utils/styleTypes'
import TicketCard from '../components/ticketCard/ticketCard'
import Modal from '../components/modal/modal'
import Portal from '@/portal'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '@/redux/features/cart'
import {
  selectAllFilmWithTickets,
  selectAllTicketsAmount,
} from '@/redux/features/cart/selector'
import Counter from '../components/counter/counter'

function Page() {
  const dispatch = useDispatch()
  const films = useSelector((state) => selectAllFilmWithTickets(state))
  const ticketAmount = useSelector((state) => selectAllTicketsAmount(state))

  const [isOpenModal, setIsOpenModal] = useState(false)
  const currentId = useRef('')

  const portalStyles: stylesType = {
    top: '0px',
    left: '0px',
    width: '100vw',
  }

  const openModal = (id: string) => {
    setIsOpenModal(true)
    currentId.current = id
  }

  const deleteTicket = () => {
    setIsOpenModal(false)
    dispatch(cartActions.reset(currentId.current))
  }

  if (films.length == 0)
    return (
      <div className={classNames(styles.container)}>
        <p>Нет добавленных билетов</p>
      </div>
    )

  return (
    <div className={classNames(styles.container)}>
      <div className={classNames(styles.tickets)}>
        {films.map((el) => (
          <div className={classNames(styles.ticket)} key={el}>
            <TicketCard id={el} withoutCounter={true} />
            <div className={classNames(styles.counter)}>
              <Counter movieId={el} max={30} handler={() => openModal(el)} />
            </div>
            <button
              className={classNames(styles.close)}
              onClick={() => openModal(el)}
            />
          </div>
        ))}
      </div>
      <div className={classNames(styles.total)}>
        <span className={classNames(styles.total_text)}>Итого билетов:</span>
        <span className={classNames(styles.total_text)}>{ticketAmount}</span>
      </div>
      {isOpenModal && (
        <Portal styles={portalStyles}>
          <Modal
            onClose={() => setIsOpenModal(false)}
            onConfirm={() => deleteTicket()}
          />
        </Portal>
      )}
    </div>
  )
}

export default Page
