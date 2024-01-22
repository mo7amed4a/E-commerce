import React from 'react'
import Category from '../components/Category'

export default function CategorySection() {
  return (
    <section className=''>
      <h2 className='text-xl mb-2 font-bold'>Shop by categories</h2>
      <div className='carousel space-x-4 w-full'>
        <div className='carousel-item'>
          <Category />
        </div>
        <div className='carousel-item'>
          <Category />
        </div>
        <div className='carousel-item'>
          <Category />
        </div>
        <div className='carousel-item'>
          <Category />
        </div>
        <div className='carousel-item'>
          <Category />
        </div>
        <div className='carousel-item'>
          <Category />
        </div>
        <div className='carousel-item'>
          <Category />
        </div>
        <div className='carousel-item'>
          <Category />
        </div>
        <div className='carousel-item'>
          <Category />
        </div>
        <div className='carousel-item'>
          <Category />
        </div>
        <div className='carousel-item'>
          <Category />
        </div>
        <div className='carousel-item'>
          <Category />
        </div>
      </div>
     </section>
  )
}
