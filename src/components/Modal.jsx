import React from 'react'

export const Modal = ({isOpen, onClose, children}) => {
  if(!isOpen)return null

  return (
    <div onClick={onClose}>
       <div onClick={(e)=>e.stopPropagation}>
         <span>&times;</span>
         {children}
       </div>
    </div>
  )
}
