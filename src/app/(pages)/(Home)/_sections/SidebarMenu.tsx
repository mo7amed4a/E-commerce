import React from 'react'
import MenuCategory from '../_components/MenuCategory'
import BestSellers from '../_components/BestSellers';

export default function SidebarMenu() {
  return (
    <aside id='sideNav'>
      <MenuCategory />
      <BestSellers />
    </aside>
  )
}
