import Image from 'next/image'
import React from 'react'

export default function Category() {
  return (
    <a href='#' className="avatar group flex-col items-center space-y-3">
        <div className="w-40 rounded-full">
          <Image src={'/images/z.webp'} width={500} height={400} alt='category' />
        </div>
        <h1 className='font-medium'>Category</h1>
    </a>
  )
}
