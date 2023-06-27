'use client'

import classNames from 'classnames'
import styles from './css/layout.module.css'
import Link from 'next/link'
import Image from 'next/image'
import basket from '@/icons/icon-basket.svg'
import { useSelector } from 'react-redux'
import { selectAllTicketsAmount } from '@/redux/features/cart/selector'

const Basket = () => {
  const ticketAmount = useSelector((state) => selectAllTicketsAmount(state))
  return <div className={classNames(styles.amount)}>{ticketAmount}</div>
}

function Header() {
  return (
    <header className={classNames(styles.header)}>
      <div className={classNames(styles.container, 'page_container')}>
        <Link href="/" className={classNames(styles.logo)}>
          Билетопоиск
        </Link>
        <div className={classNames(styles.order)}>
          <Basket />
          <Link href="/order" className={classNames(styles.basket)}>
            <Image src={basket} alt="Корзина" />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
