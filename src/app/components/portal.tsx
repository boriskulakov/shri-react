import { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { stylesType } from '../utils/styleTypes'

function Portal({
  children,
  styles,
}: {
  children: ReactNode
  styles: stylesType
}) {
  const modalRoot = document.getElementById('portal') as HTMLElement

  modalRoot.setAttribute(
    'style',
    Object.entries(styles)
      .map((el) => el.join(': '))
      .join('; ')
  )
  return createPortal(children, modalRoot)
}

export default Portal
