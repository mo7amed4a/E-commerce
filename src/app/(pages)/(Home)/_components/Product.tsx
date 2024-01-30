import React from 'react'
import Image from 'next/image'
import Price from './Price'
import Rating from './Rating'
import Link from 'next/link'
import { productType } from '@/types'
import AddToCart from './AddToCart'
import Card from '@/components/global/Card'

export default function Product({product, idItemInCart}: {product: productType, idItemInCart?: number}) {
  return (
    <div className='group'>
        <Card className='border w-full rounded-t-box group-hover:rounded-b-none'>
            <figure className='relative md:h-64'>
                {product.attributes.discount > 0 && <div className='badge badge-success text-base-100 font-medium absolute top-2 end-2'>{product.attributes.discount}%</div>}
                {product.attributes.price === 0 && <div className='badge badge-success text-base-100 font-medium absolute top-2 end-2'>Free</div>}
                {product.attributes?.category?.data?.attributes?.name && <div className='badge badge-ghost font-medium absolute bottom-2 start-2 capitalize'>{product.attributes?.category?.data?.attributes?.name}</div>}
                <Link href={`/product-details/${product.id}`}>
                    <Image src={product.attributes.banner.data[1]?.attributes?.url ? product.attributes.banner.data[1].attributes.url : product.attributes.banner.data[0].attributes.url } width={400} height={100} alt={product.attributes.banner.data[0].attributes.alternativeText || 'this is alt'} className='hidden group-hover:block duration-300' />
                    <Image src={product.attributes.banner.data[0].attributes.url} width={400} height={100} alt='category' className='group-hover:hidden duration-300'/>
                </Link>
                <AddToCart product={product} idItemInCart={idItemInCart}/>
            </figure>
            <div className='card-body p-4 relative rounded-b-none'>
                <Link href={`/product-details/${product.id}`}>
                    <div className="text-lg font-medium capitalize">
                        <h2 className='line-clamp-2 w-full'>{product.attributes.title}</h2>
                    </div>
                    <Price price={product.attributes.price} discount={product.attributes.discount} />
                    <Rating rate={3.5} className='text-sm -ms-2'/>
                    <p className='line-clamp-2'>{product.attributes.description}</p>
                </Link>
                <div className="card-actions p-2 -mt-2 absolute left-0 right-0 z-20 top-full bg-base-100 border border-t-0 w-full rounded-b-box hidden group-hover:block">
                    <button className="btn btn-sm btn-primary w-full">Buy Now</button>
                </div>
            </div>
        </Card>
    </div>
  )
}
