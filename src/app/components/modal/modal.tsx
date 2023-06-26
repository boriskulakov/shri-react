'use client'

import { useEffect } from 'react'
import classNames from 'classnames'
import styles from './modal.module.css'

function Modal({
  onClose,
  onConfirm,
}: {
  onClose: () => void
  onConfirm: () => void
}) {
  const onKeydown = ({ key }: KeyboardEvent) => {
    if (key === 'Escape') onClose()
  }

  useEffect(() => {
    document.addEventListener('keydown', onKeydown)
    return () => document.removeEventListener('keydown', onKeydown)
  })

  return (
    <div className={classNames(styles.container)} onClick={onClose}>
      <div className={classNames(styles.modal)}>
        <div className={classNames(styles.msg)}>
          <div className={classNames(styles.header)}>
            <p className={classNames(styles.title)}>Удаление билета</p>
            <button className={classNames(styles.close)} onClick={onClose} />
          </div>
          <p className={classNames(styles.msg_text)}>
            Вы уверены, что хотите удалить билет?
          </p>
        </div>
        <div className={classNames(styles.buttons)}>
          <button
            className={classNames(styles.button, styles.confirm)}
            onClick={onConfirm}
          >
            Да
          </button>
          <button
            className={classNames(styles.button, styles.reject)}
            onClick={onClose}
          >
            Нет
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
