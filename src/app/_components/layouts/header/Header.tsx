
export default function Header() {
  return (
    <header className="border-b bg-base-100">
      <div className="navbar container-m">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">E-commerce</a>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline-block w-5 h-5 stroke-current">
              <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
      <div className="border-t">
        <div className="container-m">
          <ul className="text-base-content/70 menu menu-horizontal">
            <li><a href="#">All Category</a></li>
            <li><a href="#">Mobile Phones</a></li>
            <li><a href="#">Laptops & Desktops</a></li>
            <li><a href="#">PC Games</a></li>
            <li><a href="#">Home & Furnitures</a></li>
          </ul>
        </div>
     </div>
    </header>
  )
}
