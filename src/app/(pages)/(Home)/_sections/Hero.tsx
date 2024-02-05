'use client'

import { useUser } from "@clerk/nextjs"
import Link from "next/link"

export default function Hero() {
  const {user} = useUser()
  return (
    <div className="hero min-h-96" style={{backgroundImage: 'url(/images/background.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="max-w-2xl">
            <h1 className="mb-5 text-5xl font-bold">Hello {user?.firstName}</h1>
            <p className="mb-5">Our store offers a wide range of high quality products and we strive to make your experience with us easy and enjoyable. Please feel free to browse the various sections of the store and discover a carefully curated selection of unique products.</p>
            <Link href="/products" className="btn btn-primary">Products</Link>
            </div>
        </div>
    </div>
  )
}
