'use client'
import React from 'react'

export default function error({error,
    reset,
  }: {
    error: Error & { digest?: string }
    reset: () => void
  }) {
  return (
    <div>
        <h2 className='text-xl'>Something went wrong!</h2>
        Error : {error.message}
        <button className='bg-blue-500 p-3 rounded mx-4 text-white'
        onClick={
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}
