import { categories } from '@/data/categories'
import { CategoryType } from '@/types'
import Link from 'next/link'
import React from 'react'

export default async function MenuCategory() {
  let getCategories: {data :{ data: CategoryType[]}} = await categories('pagination[start]=0&pagination[limit]=6')
  return (
    <div className='bg-base-100 border rounded-box shadow'>
        <h3 className='px-4 pt-2 text-lg font-bold uppercase'>Categories</h3>
        <ul className="menu w-full">
            {getCategories.data.data.map(category => (
              <li key={category.id}><Link href={`/category/${category.attributes.slug}`}>{category.attributes.name}</Link></li>
            ))}
        </ul>
    </div>
  )
}
