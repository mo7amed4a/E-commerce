'use client'
import React from 'react'

export default function error({error,
    reset,
  }: {
    error: Error & { digest?: string }
    reset: () => void
  }) {
  return (
    <div className='min-h-[65vh] flex justify-center items-center text-base-content/50'>
        <div className='flex flex-col items-center space-y-2'>
          <p className='text-3xl'>Something went wrong!</p>
          <p className='text-xl'>Error : {error.message}</p>
          <button className='btn btn-primary' onClick={() => reset()}>
            Try again
          </button>
        </div>
    </div>
  )
}
