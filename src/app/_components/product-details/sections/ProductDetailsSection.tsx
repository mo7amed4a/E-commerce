
import ProductDetailsCard from "../components/ProductDetailsCard";
import ProductDescriptionCard from "../components/ProductDescriptionCard";
import Recommended from "../components/Recommended";
import { productType } from "@/types";
import { productDetails } from "@/data/product-details";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { notFound } from "next/navigation";

async function getProductDetails(id: any) {
  try {
    const res  = await productDetails(id)
    return res
  } catch (error) {
    notFound()
  }
}

export default async function ProductDetailsSection({id}: {id: Params[string]}) {
  const product: {data: {data: productType}} | null = await getProductDetails(id)

  return product && (
    <section>
      <ProductDetailsCard product={product.data.data}/>
      <ProductDescriptionCard description={product.data.data.attributes.description}/>
      <Recommended />
    </section>
  )
}
