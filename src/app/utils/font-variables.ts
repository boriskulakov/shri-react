import localFont from 'next/font/local'
import { Roboto } from 'next/font/google'

export const SFProText = localFont({
  src: '../../../public/font/San Francisco Pro Text/SFProText-Regular.ttf',
  variable: '--font-san-f',
})

export const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['cyrillic'],
  variable: '--font-roboto',
})
