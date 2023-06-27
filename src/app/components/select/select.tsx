'use client'

import { useRef, useState } from 'react'
import classNames from 'classnames'
import styles from './select.module.css'
import { SFProText } from '@/font-vars'
import Portal from '../portal'
import { stylesType } from '../../utils/styleTypes'
import { useDispatch, useSelector } from 'react-redux'
import { filterActions } from '@/redux/features/filters'
import { selectFilters } from '@/redux/features/filters/selector'
import { translateGenre } from '@/app/utils/movie'

interface option {
  id: string
  name: string
}

function Select({
  data,
  type,
  placeholder,
}: {
  data: option[]
  type: string
  placeholder?: string
}) {
  const [isOpen, setIsOpen] = useState(false)
  const selectRef = useRef<HTMLDivElement>(null)

  const clientRect = selectRef?.current?.getBoundingClientRect() as DOMRect
  const portalStyles: stylesType = {
    top: clientRect ? clientRect.bottom + 'px' : '',
    left: clientRect ? clientRect.left + 'px' : '',
    width: clientRect ? clientRect.width + 'px' : '',
  }

  const filterValue = useSelector((state) => selectFilters(state))
  const value =
    type === 'cinema'
      ? filterValue[type].name
      : filterValue[type]?.length > 0
      ? translateGenre(filterValue[type])
      : ''

  const dispatch = useDispatch()
  const clickHandler = (el) => {
    setIsOpen(!isOpen)
    const result = el.id === 'none' ? '' : el

    type === 'genre'
      ? dispatch(filterActions.setGenre(result.id))
      : dispatch(
          filterActions.setCinema({
            id: result.id || '',
            name: result.name || '',
            movieIds: result.movieIds || [],
          })
        )
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
          value={value}
          placeholder={placeholder}
          disabled
        />
        <button className={classNames(styles.arrow)} />
      </div>
      {isOpen && (
        <Portal styles={portalStyles}>
          <div className={classNames(styles.options)}>
            {data
              .filter((el) => el)
              .map((el) => (
                <div
                  key={el.id}
                  className={classNames(styles.option)}
                  onClick={() => clickHandler(el)}
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
