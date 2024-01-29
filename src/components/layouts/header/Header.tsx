import { UserButton } from "@clerk/nextjs"
import Link from "next/link"
import NextTopLoader from "nextjs-toploader"
import Links from "./Links"

export default async function Header() {
  return (
    <header className="border-b bg-base-100">
      <NextTopLoader color='var(--fallback-p,oklch(var(--p)/1))' />
      <div className="navbar container-m">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <Links />
            </ul>
          </div>
          <Link href='/' className="btn btn-ghost text-xl">E-commerce</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <Links />
          </ul>
        </div>
        <div className="navbar-end">
          <Link href='/cart' className="flex-none me-2">
            <button className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline-block w-5 h-5 stroke-current">
                <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
              </svg>
            </button>
          </Link>
          <UserButton afterSignOutUrl="/"/>
        </div>
      </div>
    </header>
  )
}
