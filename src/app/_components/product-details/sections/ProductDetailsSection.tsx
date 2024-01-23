
import ProductDetailsCard from "../components/ProductDetailsCard";
import ProductDescriptionCard from "../components/ProductDescriptionCard";
import Recommended from "../components/Recommended";

export default function ProductDetailsSection() {
  return (
    <section>
      <ProductDetailsCard />
      <ProductDescriptionCard />
      <Recommended />
    </section>
  )
}
