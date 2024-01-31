import type { Metadata } from 'next'
import './globals.css'
import Header from '../components/layouts/header/Header'
import Footer from '../components/layouts/footer/Footer'
import { ClerkProvider } from '@clerk/nextjs'
import { useState } from 'react'
 
export const metadata: Metadata = {
  title: 'App',
  description: 'App',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className='bg-base-200/50s'>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
   </ClerkProvider>
  )
}

