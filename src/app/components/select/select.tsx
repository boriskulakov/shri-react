'use client'

import { useState } from 'react'
import classNames from 'classnames'
import styles from './select.module.css'
import { SFProText } from '@/font-variables'

interface option {
  id: string
  name: string
}

function Select({
  data,
  placeholder,
}: {
  data: option[]
  placeholder?: string
}) {
  const [current, setCurrent] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={classNames(styles.container)}>
      <div
        className={classNames(styles.select)}
        onClick={() => setIsOpen(!isOpen)}
        data-open={isOpen}
      >
        <input
          className={classNames(styles.input, SFProText.variable)}
          value={current}
          placeholder={placeholder}
          disabled
        />
        <button className={classNames(styles.arrow)} />
      </div>
      {isOpen && (
        <div className={classNames(styles.options)}>
          {data.map((el) => (
            <div
              key={el.id}
              className={classNames(styles.option)}
              onClick={() => {
                setIsOpen(!isOpen)
                el.id === 'none' ? setCurrent('') : setCurrent(el.name)
              }}
            >
              {el.name}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Select
