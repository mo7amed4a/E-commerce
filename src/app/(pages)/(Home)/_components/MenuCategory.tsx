import React from 'react'

export default function MenuCategory() {
  return (
    <div className='bg-base-100 border rounded-box shadow'>
        <h3 className='px-4 pt-2 text-lg font-bold uppercase'>Categories</h3>
        <ul className="menu w-full">
            <li>
            <details open>
                <summary>Parent</summary>
                <ul>
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
                <li><a>Submenu 2</a></li>
                </ul>
            </details>
            </li>
            <li><a>Item 3</a></li>
        </ul>
    </div>
  )
}
