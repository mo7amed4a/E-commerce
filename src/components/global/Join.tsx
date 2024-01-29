import { DefaultComponentType } from '@/types/components'
import React from 'react'

export default function Join({children, className}: DefaultComponentType) {
  return (
    <div className={`join join-vertical lg:join-horizontal [&>]:join-item bg-base-100 border overflow-hidden ${className}`}>
      {children}
    </div>
  )
}

