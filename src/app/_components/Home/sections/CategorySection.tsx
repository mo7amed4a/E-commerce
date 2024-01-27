import React from 'react'
import Category from '../components/Category'
import { categories } from '@/data/categories'
import { CategoryType } from '@/types'

export default async function CategorySection() {
  
  let getCategories:{data: {data: CategoryType[]}} = await categories()
  
  return (
    <section className=''>
      <h2 className='text-xl mb-2 font-bold'>Shop by categories</h2>
      <div className='carousel space-x-4 w-full'>
        {getCategories.data.data.map((category)=> {
          return <div key={category.id} className='carousel-item'>
            <Category category={category}/>
          </div>
        })}
        {/* <div className='carousel-item'>
          <Category />
        </div> */}
      </div>
     </section>
  )
}
