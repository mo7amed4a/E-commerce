import React from 'react'
import Card from '../../global/Card'
import Image from 'next/image'
import ProductRAP from './ProductRAP'
import Price from './Price'

export default function Product({num}: {num: number}) {
  return (
    <div className='group'>
        <Card className='border w-full rounded-t-box group-hover:rounded-b-none'>
            <figure className='relative md:h-64'>
                <div className='badge badge-success text-base-100 font-medium absolute top-2 end-2'>Over</div>
                <div className='badge badge-ghost font-medium absolute bottom-2 start-2 capitalize'>jacket</div>
                <a href="">
                <Image src={'/images/jacket-2.jpg'} width={400} height={100} alt='category' className='hidden group-hover:block duration-300' />
                <Image src={'/images/jacket-4.jpg'} width={400} height={100} alt='category' className='group-hover:hidden duration-300'/>
                </a>
                <button className='btn btn-ghost btn-circle absolute bottom-0 end-2'>Add</button>
            </figure>
            <Card.CardBody className='p-4 relative rounded-b-none'>
                <a href="#">
                    <div className="text-lg font-medium flex flex-col md:flex-row md:justify-between md:items-center capitalize">
                        <h2 className='line-clamp-2 w-full'>this is product okeff eoifio enfo nefon</h2>
                        <Price />
                    </div>
                    <ProductRAP num={num}/>
                    <p className='line-clamp-2'>If a dog chews shoes whose shoes does he choose?</p>
                </a>
                <div className="card-actions p-2 -mt-2 absolute left-0 z-20 top-full bg-base-100 w-full rounded-b-box hidden group-hover:block">
                    <button className="btn btn-sm btn-primary w-full">Buy Now</button>
                </div>
            </Card.CardBody>
        </Card>
    </div>
  )
}
