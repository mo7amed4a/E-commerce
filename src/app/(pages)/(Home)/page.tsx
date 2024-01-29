import Hero from './_sections/Hero';
import CategorySection from './_sections/CategorySection';
import SidebarMenu from './_sections/SidebarMenu';
import ProductsSection from './_sections/ProductsSection';
export default function page() {
  return (
    <div className="container-m mt-5 space-y-5 px-4">
      <Hero />
      <CategorySection />
      <section className='flex relative'>
        <SidebarMenu />
        <ProductsSection />
      </section>
    </div>
  )
}
