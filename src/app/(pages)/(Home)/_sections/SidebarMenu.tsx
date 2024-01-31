import React from 'react'
import MenuCategory from '../_components/MenuCategory'
import BestSellers from '../_components/BestSellers';

export default function SidebarMenu() {
  return (
    <header className='h-full w-1/4 top-0 left-0 -40 p-2 space-y-4 hidden lg:block lg:sticky'>
        <MenuCategory />
        <BestSellers />
    </header>
  )
}
