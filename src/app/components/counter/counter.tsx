import { useState } from 'react'
import classNames from 'classnames'
import styles from './counter.module.css'

function Counter({
  initialValue = 0,
  min = 0,
  max = 100,
}: {
  initialValue?: number
  min?: number
  max?: number
}) {
  const [value, setValue] = useState(initialValue)
  const decrement = () => setValue(value - 1)
  const increment = () => setValue(value + 1)

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
        disabled={value === max}
        onClick={increment}
      />
    </div>
  )
}

export default Counter
