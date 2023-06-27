import classNames from 'classnames'
import styles from './filmLoad.module.css'

function FilmLoad() {
  return (
    <div className={classNames(styles.container)}>
      <div className={classNames(styles.poster)}></div>
      <div className={classNames(styles.info)}>
        <div className={classNames(styles.title)}></div>
        <div className={classNames(styles.line)}></div>
      </div>
    </div>
  )
}

export default FilmLoad
