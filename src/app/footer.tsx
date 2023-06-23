import classNames from 'classnames'
import styles from './css/layout.module.css'
import Link from 'next/link'

function Footer() {
  return (
    <footer className={classNames(styles.footer)}>
      <Link href="/questions" className={classNames(styles.footer_links)}>
        Вопросы-ответы
      </Link>
      <Link href="/about" className={classNames(styles.footer_links)}>
        О нас
      </Link>
    </footer>
  )
}

export default Footer
