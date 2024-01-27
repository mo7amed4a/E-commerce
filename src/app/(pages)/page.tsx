import Slider from '../_components/Home/sections/Slider';
import CategorySection from '../_components/Home/sections/CategorySection';
import SidebarMenu from '../_components/Home/sections/SidebarMenu';
import ProductsSection from '../_components/Home/sections/ProductsSection';
export default function page() {
  return (
    <main className="container-m mt-5 space-y-5 px-4">
      <Slider />
      <CategorySection />
      <section className='flex relative'>
        <SidebarMenu />
        <ProductsSection />
      </section>
    </main>
  )
}
