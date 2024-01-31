import Link from 'next/link'
import React from 'react'
import Price from './Price'
import Rating from './Rating'
import { productType } from '@/types'
import Image from 'next/image'

export default function BestSellerProduct({product}: {product: productType}) {
  return (
    <Link key={product.id} href={`/product-details/${product.id}`} className="card card-side mx-2 h-24 items-center shadow bg-base-100 border border-transparent hover:border-primary">
        <figure className='w-24 h-24 lg:w-0 lg:h-0 xl:w-24 xl:h-24 py-1'>
        <Image className='h-full w-full object-fill' width={200} height={200} src={product.attributes.banner.data[0].attributes.url} alt="Movie"/>
        </figure>
        <div className="card-body p-2 items-start -space-y-2 w-2/3">
            <h2 className="card-title text-base line-clamp-1">{product.attributes.title}</h2>
            <div className='w-full'>
                <Price price={product.attributes.price} discount={product.attributes.discount} />
            </div>
            <div className="card-actions w-full">
            <Rating rate={2.5} />
            </div>
        </div>
    </Link>
  )
}
