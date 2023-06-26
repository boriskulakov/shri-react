'use client'

import { useRef, useState } from 'react'
import classNames from 'classnames'
import styles from './page.module.css'
import { stylesType } from '../utils/styleTypes'
import TicketCard from '../components/ticketCard/ticketCard'
import Modal from '../components/modal/modal'
import Portal from '@/portal'

function Page() {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [ticketsId, setTicketsId] = useState([
    '2aT976Fs_Bek0e2ZR_05V',
    '9t2dPgRBgWpmOXRXK5l4Q',
  ])
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
    setTicketsId(ticketsId.filter((el) => el !== currentId.current))
  }

  if (ticketsId.length == 0)
    return (
      <div className={classNames(styles.container)}>
        <p>Нет добавленных билетов</p>
      </div>
    )

  return (
    <div className={classNames(styles.container)}>
      <div className={classNames(styles.tickets)}>
        {ticketsId.map((el) => (
          <div className={classNames(styles.ticket)} key={el}>
            <TicketCard id={el} />
            <button
              className={classNames(styles.close)}
              onClick={() => openModal(el)}
            />
          </div>
        ))}
      </div>
      <div className={classNames(styles.total)}>
        <span className={classNames(styles.total_text)}>Итого билетов:</span>
        <span className={classNames(styles.total_text)}>0</span>
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
