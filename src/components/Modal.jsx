import React from 'react'
import style from '../styles/Modal.module.css'
import check from '../../public/assets/images/icon-order-confirmed.svg'

export const Modal = ({isOpen, onClose, children}) => {
  if(!isOpen)return null

  return (
    <div className={style.modalOverlay} onClick={onClose}>
       <div className={style.modalContent} onClick={(e)=>e.stopPropagation}>
         <img src= {check} />
         {children}
       </div>
    </div>
  )
}
