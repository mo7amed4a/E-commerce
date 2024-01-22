import React from 'react'
import Rating from './Rating'

export default function ProductRAP({num}: {num:number}) {
  return (
    <div className='flex flex-col md:flex-row space-x-2 md:items-center -ms-2 w-full'>
        <Rating num={num}/>
        <div className='flex justify-between text-xs text-base-content/70 w-full mt-1 md:mt-0'>
            <span>2,751+ sold</span>
            <span className='text-base-content/50'>
                <b> - </b>
                <span className='line-through'>$154.99</span>
            </span>
        </div>
    </div>
  )
}
