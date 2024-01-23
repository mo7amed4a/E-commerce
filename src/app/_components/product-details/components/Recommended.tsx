import React from 'react'
import Card from '../../global/Card'
import Product from '../../Home/components/Product'

export default function Recommended() {
  return (
    <div>
      <h1 className='text-lg font-medium mt-4'>Recommended Products</h1>
      <Card className="border mt-2">
        <div className="card-body p-4 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
         <Product num={4}/>
         <Product num={4}/>
         <Product num={4}/>
         <Product num={4}/>
         <Product num={4}/>
         <Product num={4}/>
         <Product num={4}/>
         <Product num={4}/>
         <Product num={4}/>
         <Product num={4}/>
        </div>
      </Card>
    </div>
  )
}
