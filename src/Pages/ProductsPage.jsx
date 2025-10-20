import Card from "../components/Card"
import Loader from "../components/Loader"
import { useProducts } from "../context/ProducContext"
import Styles from "./ProductsPage.module.css"

function ProductsPage() {
  const products = useProducts()
  return ( 
    <div className={Styles.container}>
      <div className={Styles.products}>
        {!products.length && <Loader/>}
        {products.map((p) =>(
          <Card key={p.id} data={p}/>
        ))}
      </div>
      <div>sidebar</div>
    </div>
  )
}

export default ProductsPage