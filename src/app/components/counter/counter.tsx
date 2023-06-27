'use client'

import classNames from 'classnames'
import styles from './counter.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '@/redux/features/cart'
import {
  selectFilmTicketsAmount,
  selectAllTicketsAmount,
} from '@/redux/features/cart/selector'

function Counter({
  movieId,
  handler,
  min = 0,
  max = 100,
}: {
  movieId: string
  handler?: Function
  min?: number
  max?: number
}) {
  const dispatch = useDispatch()
  const value = useSelector((state) => selectFilmTicketsAmount(state, movieId))
  const ticketAmount = useSelector((state) => selectAllTicketsAmount(state))

  const decrement = () => {
    if (value > 1 || !handler){
      dispatch(cartActions.decrement(movieId))
    }
    if (handler && value === 1) {
      handler()
    }
  }

  return (
    <div className={classNames(styles.container)}>
      <button
        className={classNames(styles.button, styles.minus)}
        disabled={value === min}
        onClick={decrement}
      />
      <div className={classNames(styles.value)}>{value}</div>
      <button
        className={classNames(styles.button, styles.plus)}
        disabled={ticketAmount === max}
        onClick={() => dispatch(cartActions.increment(movieId))}
      />
    </div>
  )
}

export default Counter
