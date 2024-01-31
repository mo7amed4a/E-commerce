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
        <Card className='border w-full rounded-box shadow'>
            <figure className='relative md:h-64'>
                {product.attributes.discount > 0 && <div className='badge badge-success badge-sm md:badge-md text-base-100 font-medium absolute top-2 start-2'>{product.attributes.discount}%</div>}
                {product.attributes.price === 0 && <div className='badge badge-success badge-sm md:badge-md text-base-100 font-medium absolute top-2 start-2'>Free</div>}
                {product.attributes?.category?.data?.attributes?.name && <div className='badge badge-ghost badge-sm md:badge-md font-medium absolute bottom-2 start-2 capitalize'>{product.attributes?.category?.data?.attributes?.name}</div>}
                {/* <Link href={`/product-details/${product.id}`}> */}
                    {/* <Image src={product.attributes.banner.data[1]?.attributes?.url ? product.attributes.banner.data[1].attributes.url : product.attributes.banner.data[0].attributes.url } width={400} height={100} alt={product.attributes.banner.data[0].attributes.alternativeText || 'this is alt'} className='hidden group-hover:block duration-300' /> */}
                    <Image src={product.attributes.banner.data[0].attributes.url} width={400} height={100} alt='category'/>
                {/* </Link> */}
                <div className='absolute top-6 end-0 flex flex-col space-y-1 translate-x-full group-hover:-translate-x-1 duration-300'>
                    <Link href={`/product-details/${product.id}`} className='btn btn-circle btn-sm '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </Link>
                    <AddToCart className='btn btn-circle btn-sm' product={product} idItemInCart={idItemInCart}/>
                </div>
            </figure>
            <div className='card-body p-4'>
                <Link href={`/product-details/${product.id}`}>
                    <div className="md:text-lg font-medium capitalize">
                        <h2 className='line-clamp-2 w-full'>{product.attributes.title}</h2>
                    </div>
                </Link>
                <Price price={product.attributes.price} discount={product.attributes.discount} />
                <Rating rate={3.5} className='text-sm -ms-2'/>
            </div>
        </Card>
    </div>
  )
}
