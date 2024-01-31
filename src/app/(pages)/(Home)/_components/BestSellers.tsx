import Image from 'next/image'
import React from 'react'
import Price from './Price'
import Rating from './Rating';
import Link from 'next/link';
import { BestSellersType } from '@/types';
import { bestSellersProducts } from '@/data/products';
import BestSellerProduct from './BestSellerProduct';

export default async function BestSellers() {
  let getBestSellersProducts: {data: BestSellersType} = await bestSellersProducts("products")
  return (
    <div className='space-y-2'>
            <h3 className='pt-2 text-lg font-bold uppercase'>{getBestSellersProducts.data.data.attributes.title}</h3>
            {getBestSellersProducts.data.data.attributes.products.data.map(product => ( 
              <BestSellerProduct key={product.id} product={product}/>
          ))}
    </div>
  )
}
