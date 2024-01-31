import React from 'react'
import { products } from '@/data/products'
import { productType } from '@/types'
import Link from 'next/link'
import Product from '../_components/Product'

export default async function ProductsSection() {
  let getProducts:{data: {data: productType[]}} = await products('pagination[start]=0&pagination[limit]=16')
  return (
    <div>
       <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 flex-wrap w-full'>
            {getProducts.data.data.map(product=> (
              <Product key={product.id} product={product} />
            ))}
       </div>
       <div className='flex justify-end mt-6'>
        <Link href='/products' className='btn btn-primary' >
          More Products
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </Link> 
       </div>
    </div>
  )
}
