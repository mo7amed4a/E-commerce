import React from 'react'
import { bestCategories } from '@/data/categories'
import { BestCategoriesType } from '@/types'
import Category from '../_components/Category'

export default async function CategorySection() {
  let getCategories:{data: BestCategoriesType} = await bestCategories()
  return (
    <section>
      <h2 className='text-xl mb-2 font-bold'>{getCategories.data.data.attributes.title}</h2>
      <div className='carousel space-x-4 w-full'>
        {getCategories.data.data.attributes.categories.data.map((category)=> {
          return <div key={category.id} className='carousel-item'>
            <Category category={category}/>
          </div>
        })}
      </div>
     </section>
  )
}
