import InputSearch from '@/components/layouts/header/InputSearch'
import { searchProducts } from '@/data/products'
import { productType } from '@/types'
import Product from '../(Home)/_components/Product';
import { notFound } from 'next/navigation';

export default async function page({searchParams}: {searchParams : {title: string | undefined}}) {
  const title = searchParams?.title?.trimStart();
  if (title === undefined) {
    return notFound()
  }
  if (title?.length < 1) {
    return notFound()
  }
  let products: {data: { data: productType[]}} = await searchProducts(title || 'none')
  return (
    <div className='container-m my-4'>
        <div className='mb-8 lg:hidden'>
            <InputSearch />
        </div>
        {typeof title === "string" && title.length > 0 && (
          <div>
            {products.data.data.length > 0 ? <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-4 flex-wrap w-full'>
                {products.data.data.map(product=> (
                    <Product key={product.id} product={product} />
                ))}
            </div> : 
            <div className="h-[60vh] flex justify-center items-center">
                <h3 className="text-xl text-base-content/50 ">No product has this title</h3>
            </div>}
          </div>
        )}
    </div>
  )
}
