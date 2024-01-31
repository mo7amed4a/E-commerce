import Product from '@/app/(pages)/(Home)/_components/Product'
import Card from '@/components/global/Card'
import { productsByCategory } from '@/data/products'
import { CategoryType, productType } from '@/types'
import React from 'react'

export default async function Recommended({category}:{category:CategoryType}) {
  let getProducts: {data: {data: productType[]}} = await productsByCategory(category?.attributes?.slug || "all")
  if (getProducts.data.data.length === 0) {
    

    return <div>
      f
    </div>
  }
  return (
    <div>
      <h1 className='text-lg font-medium mt-4'>Recommended Products</h1>
      <Card className="mt-2">
          {getProducts.data.data.length > 0 ? <div className='card-body p-4 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5'>
                {getProducts.data.data.slice(-5).map(product=> (
                    <Product key={product.id} product={product} />
                ))}
            </div> : 
            <div className="h-[60vh] flex justify-center items-center">
                <h3 className="text-xl text-base-content/50 ">No product of category name</h3>
            </div>}
         {/* <Product num={4}/>
         <Product num={4}/>
         <Product num={4}/>
         <Product num={4}/>
         <Product num={4}/>
         <Product num={4}/>
         <Product num={4}/>
         <Product num={4}/>
         <Product num={4}/>
         <Product num={4}/> */}
      </Card>
    </div>
  )
}
