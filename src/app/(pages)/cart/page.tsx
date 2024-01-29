'use client'
import { getCartItems } from '@/data/cart'
import { CartType } from '@/types';
import { useUser } from '@clerk/nextjs';
import React, { useEffect, useState } from 'react'
import { disCountFun } from '../(Home)/_components/Price';
import Product from '../(Home)/_components/Product';
import Link from 'next/link';

export type CartItemsType = {data: {data: CartType[]}}

export function totalPrice(cartItems : CartItemsType){
  if (cartItems && cartItems?.data.data.length > 0) {
    const total =  cartItems.data.data.reduce((accumulator, currentValue) => {
      const price = currentValue.attributes.products.data[0].attributes.price;
      const disCount = currentValue.attributes.products.data[0].attributes.discount;
      const returns = accumulator + disCountFun(price, disCount)
      return returns
    }, 0)
    return total
  }
}

export default function cart() {
  const {user} = useUser();
  const [cartItems, setCartItems] = useState<CartItemsType | null>(null)
  const [refreshItems, setRefreshItems] = useState<boolean>(false)
  async function getItems() {
    if (user) {
      const cartItems: CartItemsType = await getCartItems(user?.primaryEmailAddress?.emailAddress || 'mo7ame66d@gmail.com')
      setCartItems(cartItems)      
    }
  }
  
  useEffect(() => {
    getItems();
  }, [user, refreshItems])
  
  return (
    <div className="container-m">
      <section>
          <h1 className="text-lg md:text-xl font-bold mt-4">Cart</h1>
          <div className='flex justify-between my-4'>
           {cartItems && <div>
              <div className='flex space-x-2 items-center'>
                <span>Total :</span>
                <span className='text-lg font-bold text-success'>{totalPrice(cartItems) != undefined ? '$'+totalPrice(cartItems) : 'No products'}</span>
              </div>
              <div className='flex space-x-2 items-center'>
                <span>Count :</span>
                <span>{cartItems.data.data.length} Product</span>
              </div>
            </div>}
            <Link href={`/checkout`} className='btn btn-primary'>Checkout</Link>
          </div>
          <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-4 flex-wrap w-full'>
            {cartItems ? cartItems.data.data.length > 0 ? cartItems.data.data.map(item=> (
              <div key={item.id}>
                <Product key={item.attributes.products.data[0].id} product={item.attributes.products.data[0]} idItemInCart={item.id} setRefreshItems={setRefreshItems}/>
              </div>
            )) : 
            <div className="h-[60vh] flex justify-center items-center col-span-full">
                <h3 className="text-xl text-base-content/50 ">No product in cart yet!</h3>
            </div>
            :
            <>
              {[4,3,2,5,6,7,8,0,9,1].map(e => <div key={e} className="h-80 skeleton"></div>)}
            </>
            }
          </div> 
        </section>
    </div>
  )
}
