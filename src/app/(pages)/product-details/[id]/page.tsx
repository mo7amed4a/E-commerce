import ProductDetailsSection from "@/app/_components/product-details/sections/ProductDetailsSection";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export default function page({params}: {params: Params}) {
  

  return (
    <main className="container-m">
        <ProductDetailsSection id={params.id}/>
    </main>
  )
}
