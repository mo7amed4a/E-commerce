import React from 'react'
import Card from '../../global/Card'
import Image from 'next/image'
import Price from './Price'
import Rating from './Rating'
import Link from 'next/link'

export default function Product({num}: {num: number}) {
  return (
    <div className='group'>
        <Card className='border w-full rounded-t-box group-hover:rounded-b-none'>
            <figure className='relative md:h-64'>
                <div className='badge badge-success text-base-100 font-medium absolute top-2 end-2'>Over</div>
                <div className='badge badge-ghost font-medium absolute bottom-2 start-2 capitalize'>jacket</div>
                <Link href="/product-details/4">
                    <Image src={'/images/jacket-2.jpg'} width={400} height={100} alt='category' className='hidden group-hover:block duration-300' />
                    <Image src={'/images/jacket-4.jpg'} width={400} height={100} alt='category' className='group-hover:hidden duration-300'/>
                </Link>
                <button className='btn btn-ghost btn-circle absolute bottom-0 end-2'>Add</button>
            </figure>
            <div className='card-body p-4 relative rounded-b-none'>
                <Link href="/product-details/4">
                    <div className="text-lg font-medium capitalize">
                        <h2 className='line-clamp-2 w-full'>this is product okeff eoifio enfo nefon</h2>
                    </div>
                    <Price price={100} discount={10} />
                    <Rating rate={3.5} className='text-sm -ms-2'/>
                    <p className='line-clamp-2'>If a dog chews shoes whose shoes does he choose?</p>
                </Link>
                <div className="card-actions p-2 -mt-2 absolute left-0 right-0 z-20 top-full bg-base-100 border border-t-0 w-full rounded-b-box hidden group-hover:block">
                    <button className="btn btn-sm btn-primary w-full">Buy Now</button>
                </div>
            </div>
        </Card>
    </div>
  )
}
