import { categories } from "@/data/categories"
import { CategoryType } from "@/types"
import Link from "next/link"
import NextTopLoader from "nextjs-toploader"

export default async function Header() {
  let getCategories:{data: {data: CategoryType[]}} = await categories('sort=slug:DESC&pagination[start]=0&pagination[limit]=4')
  
  return (
    <header className="border-b bg-base-100">
      <NextTopLoader color='var(--tw-ring-color)' />
      <div className="navbar container-m">
        <div className="flex-1">
          <Link href='/' className="btn btn-ghost text-xl">E-commerce</Link>
        </div>
        <Link href='/cart' className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline-block w-5 h-5 stroke-current">
              <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
            </svg>
          </button>
        </Link>
      </div>
      <div className="border-t">
        <div className="container-m">
          <ul className="text-base-content/70 menu menu-horizontal flex-nowrap w-full overflow-x-hidden hover:flex-wrap duration-700">
            {getCategories.data.data.map(category => {
              return <li key={category.id}><a href="#">{category.attributes.name}</a></li>
            })}
          </ul>
        </div>
     </div>
    </header>
  )
}
