import classNames from 'classnames'
import styles from './css/layout.module.css'
import Link from 'next/link'
import Image from 'next/image'
import basket from '@/icons/icon-basket.svg'

function Header() {
  return (
    <header className={classNames(styles.header)}>
      <div className={classNames(styles.container, 'page_container')}>
        <Link href="/" className={classNames(styles.logo)}>
          Билетопоиск
        </Link>
        <Image src={basket} alt="Корзина" />
      </div>
    </header>
  )
}

export default Header
