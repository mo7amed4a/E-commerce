'use client'
import { addToCart, deleteFromCart } from '@/data/cart';
import { productType } from '@/types';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function AddToCart({product, idItemInCart}: {product: productType,idItemInCart: number|undefined}) {
  const {user} = useUser();
  const router = useRouter()
  
  function addItemToCart() {
    let data = {
      data : {
        userId: user?.primaryEmailAddress?.id,
        email: user?.primaryEmailAddress?.emailAddress,
        username: user?.fullName,
        products: [product.id]
      }
    }
    addToCart(data).then(res => {
      router.push('/cart')
      router.refresh()
    }).catch(err => {
      console.log("error",err);
    })
  }
  function deleteItemFromCart() {
    if (idItemInCart) {
      deleteFromCart(idItemInCart).then(res => {
        router.refresh()
      }).catch(err => {
        console.log("error",err);
      })
    }
}
  return (
    <div>
      {idItemInCart ? <button className='btn btn-error btn-circle btn-sm absolute bottom-0 end-2' onClick={deleteItemFromCart}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
          <path fillRule="evenodd" d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.133 2.845a.75.75 0 0 1 1.06 0l1.72 1.72 1.72-1.72a.75.75 0 1 1 1.06 1.06l-1.72 1.72 1.72 1.72a.75.75 0 1 1-1.06 1.06L12 15.685l-1.72 1.72a.75.75 0 1 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
        </svg>
      </button>:
      <button className='btn btn-primary btn-circle btn-sm absolute bottom-0 end-2' onClick={addItemToCart}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
        </svg>
      </button>}
    </div>
  )
}
