import Image from 'next/image'
import React from 'react'
import Price from './Price'
import Rating from './Rating';
import Link from 'next/link';
import { BestSellersType } from '@/types';
import { bestSellersProducts } from '@/data/products';

export default async function BestSellers() {
  let getBestSellersProducts: {data: BestSellersType} = await bestSellersProducts("products")
  return (
    <div className='space-y-2'>
            <h3 className='pt-2 text-lg font-bold uppercase'>{getBestSellersProducts.data.data.attributes.title}</h3>
            {getBestSellersProducts.data.data.attributes.products.data.map(product => ( 
              <Link key={product.id} href={`/product-details/${product.id}`} className="card card-side mx-2 h-24 items-center shadow bg-base-100">
                  <figure className='w-0 h-0 xl:w-24 xl:h-24'>
                    <Image className='h-full w-full object-fill' width={200} height={200} src={product.attributes.banner.data[0].attributes.url} alt="Movie"/>
                  </figure>
                  <div className="card-body p-2 items-start -space-y-2 w-2/3">
                      <h2 className="card-title text-base line-clamp-1">{product.attributes.title}</h2>
                      <div className='w-full'>
                          <Price price={product.attributes.price} discount={product.attributes.discount}/>
                      </div>
                      <div className="card-actions w-full">
                        <Rating rate={2.5} />
                      </div>
                  </div>
              </Link>
          ))}
    </div>
  )
}
