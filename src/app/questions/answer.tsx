'use client'

import { useState } from 'react'
import classNames from 'classnames'
import styles from './css/answer.module.css'

function Answer({ title, text }: { title: string; text?: string }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div
      className={classNames(styles.container)}
      data-open={isOpen}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className={classNames(styles.question)}>
        <h2 className={classNames(styles.title)}>{title}</h2>
        {isOpen && <div className={classNames(styles.answer)}>{text}</div>}
      </div>
      <button className={classNames(styles.arrow)} />
    </div>
  )
}

export default Answer
