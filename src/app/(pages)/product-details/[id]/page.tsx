import { productDetails } from "@/data/products";
import { productType } from "@/types";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { notFound } from "next/navigation";
import ProductDetailsCard from "./_components/ProductDetailsCard";
import Recommended from "./_components/Recommended";




async function getProductDetails(id: any) {
  try {
    const res  = await productDetails(id)
    return res
  } catch (error) {
    notFound()
  }
}

export default async function page({params}: {params: Params}) {
  const product: {data: {data: productType}} | null = await getProductDetails(params.id)

    return product && (
      <div className="container-m">
        <section>
          <ProductDetailsCard product={product.data.data}/>
          <Recommended category={product.data.data.attributes.category.data}/>
        </section>
      </div>
    )
}
