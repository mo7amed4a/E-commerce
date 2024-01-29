import { CategoryType } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Category({category}: {category : CategoryType}) {
  return (
    <Link href={`/category/${category.attributes.slug}`} className="avatar group flex-col items-center space-y-3">
        <div className="w-40 rounded-full">
          <Image src={category.attributes.image.data.attributes.url} width={500} height={400} alt='category' />
        </div>
        <h1 className='font-medium'>{category.attributes.name}</h1>
    </Link>
  )
}
