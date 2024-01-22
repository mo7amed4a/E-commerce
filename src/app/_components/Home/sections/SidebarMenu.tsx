import React from 'react'
import ProductBestSeller from '../components/ProductBestSeller'
import MenuCategory from '../components/MenuCategory'

export default function SidebarMenu() {
  return (
    <header className='h-full w-1/4 top-0 left-0 -40 p-2 space-y-4 hidden lg:block lg:sticky'>
        <MenuCategory />
        <div className='space-y-2'>
            <h3 className='pt-2 text-lg font-bold uppercase'>Best Sellers</h3>
            {[1,2,3,4].map(e => (
              <ProductBestSeller key={e} image={e}/>
            ))}
        </div>
    </header>
  )
}
