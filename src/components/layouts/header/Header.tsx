import { UserButton } from "@clerk/nextjs"
import Link from "next/link"
import NextTopLoader from "nextjs-toploader"
import Links from "./Links"
import Logo from "./Logo"
import OpenSideNav from "./OpenSideNav"
import OpenMenuLinks from "./OpenMenuLinks"
import BestSellerProduct from "@/app/(pages)/(Home)/_components/BestSellerProduct"
import { BestSellersType } from "@/types"
import { bestSellersProducts } from "@/data/products"
import InputSearch from "./InputSearch"
import HiddenInput from "./HiddenInput"

export default async function Header() {
  let getBestSellersProduct: {data: BestSellersType} = await bestSellersProducts("product")
  return (
    <header className="border-b bg-base-100">
      <NextTopLoader color='var(--fallback-p,oklch(var(--p)/1))' />
      <div className="navbar container-m">
        <div className="navbar-start">
          <Logo />
        </div>
        <div className="navbar-center hidden lg:flex min-w-[40rem] max-w-6xl">
          <InputSearch />
        </div>
        <div className="navbar-end space-x-2">
          <HiddenInput >
            <InputSearch mobile={true}/>
          </HiddenInput>
          <UserButton userProfileUrl="/profile" userProfileMode="navigation" afterSignOutUrl="/"/>
        </div>
      </div>
      <div className="navbar justify-center hidden lg:flex">
        <div className="navbar-center">
          <ul className="menu menu-horizontal px-1 space-x-1">
            <Links />
          </ul>
        </div>
      </div>
      <div id="side-menu-links" className="flex flex-col">
        <ul className="menu menu-vertical flex-1">
          <Links />
        </ul>
        {getBestSellersProduct.data.data.attributes.product.data && <div className="flex-1 ">
          <h2 className="my-2 font-bold">{getBestSellersProduct.data.data.attributes.name}</h2>
          <BestSellerProduct product={getBestSellersProduct.data.data.attributes.product.data}/>
        </div>}
      </div>
      <div className="btm-nav z-40 lg:hidden">
        <Link href="/cart">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
          <span className="btm-nav-label">Cart</span>
        </Link>
        <Link href="/">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
          <span className="btm-nav-label">Home</span>
        </Link>
        <OpenSideNav />
        <OpenMenuLinks />
      </div>
    </header>
  )
}
