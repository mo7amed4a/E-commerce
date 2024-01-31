'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function OpenMenuLinks() {
    const pathName = usePathname()
    function toggle() {
        const sideNav = document.querySelector("#side-menu-links")
        const closeAside = document.querySelector("#close-aside-menu")
        if (sideNav?.classList.contains('active')) {
            sideNav?.classList.remove('active')
            closeAside?.classList.add('hidden')
        }
        else {
            sideNav?.classList.add('active')
            closeAside?.classList.remove('hidden')
        }
    }
    
  return (
    <button onClick={toggle}>
        <div className='fixed top-0 left-0 bg-base-content opacity-75 w-screen h-screen z-30 hidden' id='close-aside-menu'></div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        <span className="btm-nav-label">Pages</span>
    </button>
  )
}
