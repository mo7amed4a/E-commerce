import Image from 'next/image'
import React from 'react'
import Rating from './Rating'
import ProductRAP from './ProductRAP'
import Price from './Price'

export default function ProductBestSeller({image}:{image: any}) {
  return (
    <a href='#' className="card card-side mx-2 h-24 items-center shadow bg-base-100">
        <figure className='w-0 h-0 xl:w-24 xl:h-24'>
          <Image className='h-full w-full object-fill' width={200} height={200} src={`/images/${image}.jpg`} alt="Movie"/>
        </figure>
        <div className="card-body p-2 items-start -space-y-2">
            <h2 className="card-title text-base line-clamp-1">New movie is released!</h2>
            <div className='flex'>
              <p className='text-sm line-clamp-2 pe-2'>Click Click the button to w app.</p>
              <div>
                <Price />
              </div>
            </div>
            <div className="card-actions w-full">
              <ProductRAP num={4}/>
            </div>
        </div>
    </a>
  )
}
