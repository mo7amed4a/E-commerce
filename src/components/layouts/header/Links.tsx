import { auth } from '@clerk/nextjs/server';
import Link from 'next/link'
import React from 'react'

export default function Links() {
    const {userId} = auth()    
  return (
    <>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/products'>Products</Link></li>
        {!userId && <>
            <li><Link href='/auth/sign-in'>Sign In</Link></li>
            <li><Link href='/auth/sign-up'>Sign Up</Link></li>
        </>}
    </>
  )
}
