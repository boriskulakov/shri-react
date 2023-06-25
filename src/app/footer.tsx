import classNames from 'classnames'
import styles from './css/layout.module.css'
import Link from 'next/link'

function Footer() {
  return (
    <footer className={classNames(styles.footer)}>
      <div className={classNames(styles.container, 'page_container')}>
        <Link href="/questions" className={classNames(styles.footer_links)}>
          Вопросы-ответы
        </Link>
        <Link href="/about" className={classNames(styles.footer_links)}>
          О нас
        </Link>
      </div>
    </footer>
  )
}

export default Footer
