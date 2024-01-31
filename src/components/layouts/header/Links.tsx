import { auth } from '@clerk/nextjs/server';
import Link from 'next/link'
import React from 'react'

export default function Links() {
    const {userId} = auth()    
  return (
    <>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/products'>Products</Link></li>
        <li><Link href='/about'>About</Link></li>
        <li><Link href='/cart'>Cart</Link></li>
        {userId ? <>
          <li><Link href='/profile'>Profile</Link></li>
        </> : <>
          <li><Link href='/sign-in'>Sign In</Link></li>
          <li><Link href='/sign-up'>Sign Up</Link></li>
        </>}
    </>
  )
}
