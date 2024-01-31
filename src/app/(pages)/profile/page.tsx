import { UserProfile } from '@clerk/nextjs'
import React from 'react'

export default function page() {
  return (
    <div className='container-m flex justify-center my-4'>
        <UserProfile  />
    </div>
  )
}
