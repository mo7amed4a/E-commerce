import { productsByCategory } from "@/data/products";
import { productType } from "@/types";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Product from "../../(Home)/_components/Product";

export default async function page({params}: {params: Params}) {
    let getProductsByCategory:{data: {data: productType[]}} = await productsByCategory(params.slug)
  return (
    <div className="container-m">
        <section>
            <h1 className="text-lg md:text-xl font-bold my-4">Products related to category {decodeURIComponent(params.slug)}</h1>
            {getProductsByCategory.data.data.length > 0 ? <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-4 flex-wrap w-full'>
                {getProductsByCategory.data.data.map(product=> (
                    <Product key={product.id} product={product} />
                ))}
            </div> : 
            <div className="h-[60vh] flex justify-center items-center">
                <h3 className="text-xl text-base-content/50 ">No product of category name</h3>
            </div>}
        </section>
    </div>
  )
}
