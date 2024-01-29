import React from 'react'
import { products } from '@/data/products'
import { productType } from '@/types'
import Link from 'next/link'
import Product from '../_components/Product'

export default async function ProductsSection() {
  let getProducts:{data: {data: productType[]}} = await products('pagination[start]=0&pagination[limit]=16')
  return (
    <div className='lg:w-3/4'>
       <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 flex-wrap w-full'>
            {getProducts.data.data.map(product=> (
              <Product key={product.id} product={product} />
            ))}
       </div>
       <div className='flex justify-end'>
        <Link href='/products' className='btn btn-primary' >More Products</Link> 
       </div>
    </div>
  )
}
