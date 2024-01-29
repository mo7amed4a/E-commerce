import { products } from "@/data/products";
import { productType } from "@/types";
import Product from "../(Home)/_components/Product";

export default async function page() {
    let getProducts:{data: {data: productType[]}} = await products()
  return (
    <div className="container-m">
        <section>
            <h1 className="text-lg md:text-xl font-bold my-4">Products</h1>
            {getProducts.data.data.length > 0 ? <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-4 flex-wrap w-full'>
                {getProducts.data.data.map(product=> (
                    <Product key={product.id} product={product} />
                ))}
            </div> : 
            <div className="h-[60vh] flex justify-center items-center">
                <h3 className="text-xl text-base-content/50 ">No product yet</h3>
            </div>}
        </section>
    </div>
  )
}
