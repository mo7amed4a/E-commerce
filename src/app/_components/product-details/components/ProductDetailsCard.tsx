import React from 'react'
import Card from '../../global/Card';
import IcrAndDec from './IcrAndDec';
import Rating from '../../Home/components/Rating';
import ProductImages from './ProductImages';
import Price from '../../Home/components/Price';

export default function ProductDetailsCard() {
  return (
    <Card className="border mt-5">
      <div className="card-body p-4">
        <div className="flex flex-col lg:flex-row gap-5">
          <ProductImages images={[{src:'/images/jacket-2.jpg', alt: 'kdl'},{src:'/images/jacket-4.jpg', alt: 'kdl'},{src:'/images/shoe-2_1.jpg', alt: 'kdl'},{src:'/images/watch-4.jpg', alt: 'watch'},{src:'/images/jacket-4.jpg', alt: 'kdl'}]}/>
          <main className="space-y-4">
            <div>
              <h2 className="text-lg font-bold">{'Huawei P30'}</h2>
              <p>
                <span>Brand: </span>
                <span className="link link-primary">Huawei</span>
              </p>
              <p>
                <span className="text-base-content/50">32 In Stock</span>
              </p>
            </div>
            <div>
              <Price price={45} size='lg' discount={4}/>
              <div className="space-x-2 flex items-center">
                <Rating rate={4.5} className="rating-sm"/>
                <span className="text-success">Free shopping</span>
              </div>
            </div>
            <div>
              <p className="md:w-3/4">Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.</p>
            </div>
            <IcrAndDec />
            <div className="flex space-x-2">
              <button className="btn btn-primary">Buy Now</button>
              <button className="btn btn-secondary">Add To Cart</button>
            </div>
            <p className="flex items-center space-x-2 w-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-base-content/40">
                <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Safe and Secure Payments. Easy returns.</span>
            </p>
          </main>
        </div>
      </div>
    </Card>
  )
}
