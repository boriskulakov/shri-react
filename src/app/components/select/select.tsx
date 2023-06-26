'use client'

import { useRef, useState } from 'react'
import classNames from 'classnames'
import styles from './select.module.css'
import { SFProText } from '@/font-vars'
import Portal from '../portal'
import { stylesType } from '../../utils/styleTypes'

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
  const selectRef = useRef<HTMLDivElement>(null)

  const clientRect = selectRef?.current?.getBoundingClientRect() as DOMRect
  const portalStyles: stylesType = {
    top: clientRect ? clientRect.bottom + 'px' : '',
    left: clientRect ? clientRect.left + 'px' : '',
    width: clientRect ? clientRect.width + 'px' : '',
  }

  return (
    <div className={classNames(styles.container)} ref={selectRef}>
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
        <Portal styles={portalStyles}>
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
        </Portal>
      )}
    </div>
  )
}

export default Select
