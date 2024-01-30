import React from 'react'
import Cart from './_components/Cart'
import { CartType } from '@/types'
import { getCartItems } from '@/data/cart'
import { currentUser } from '@clerk/nextjs'

export type CartItemsType = {data: {data: CartType[]}}

export default async function page() {
  const userId = await currentUser()
  if (userId) {
    const cartItems: CartItemsType = await getCartItems(userId.primaryEmailAddressId || '')
    return <div>
      <Cart cartItemsData={cartItems}/>
    </div>
  }
  return (
    <div>No user</div>
  )
}
