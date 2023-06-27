import './css/globals.css'
import styles from './css/layout.module.css'
import { roboto } from '@/font-vars'
import Header from './header'
import Footer from './footer'
import { StoreProvider } from '@/redux/StoreProvider'

export const metadata = {
  title: 'Билетопоиск',
  description: 'Крупнейший сервис о кино в рунете',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={roboto.variable}>
        <StoreProvider>
          <main className={styles.main}>{children}</main>
          <Header />
          <Footer />
          <div id="portal" className={styles.portal} />
        </StoreProvider>
      </body>
    </html>
  )
}
