import { DefaultComponentType } from '@/types/components'
import React from 'react'

function Card({children, className}: DefaultComponentType) {
  return (
    <div className={`card bg-base-100 ${className}`}>
      {children}
    </div>
  )
}

Card.CardBody = ({children, className}: DefaultComponentType) => (
  <div className={`card-body ${className}`}>
    {children}
  </div>
)

export default Card