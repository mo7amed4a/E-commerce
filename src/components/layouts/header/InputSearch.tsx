'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function InputSearch({mobile}: {mobile?:boolean}) {
    const [title, setTitle] = useState<string>('')
    const router = useRouter()
    function toSearch(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        router.push(`/search?title=${title}`)
        router.refresh()
    }
  return (
    <form onSubmit={toSearch} className={`form-control ${mobile ? "lg:hidden":"w-full"}`} >
        <input type="text" onChange={e => setTitle(e.target.value)} placeholder="Search" className={`input input-bordered ${mobile ? "w-24 md:w-full" : "w-full"}`} />
    </form>
  )
}
