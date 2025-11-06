import { Link, useParams } from "react-router-dom"
import { useProductsDetailis } from "../context/ProducContext"
import Loader from "../components/Loader"
import styles from "./DetalisPage.module.css"

import { SiOpenproject } from "react-icons/si"
import { IoMdPricetag } from "react-icons/io"
import { FaArrowLeft } from "react-icons/fa"


function DetalisPage() {

  const {id} = useParams()
  const ProductsDetailis = useProductsDetailis(+id)
  if (!ProductsDetailis) return <Loader/>

  return (
    <div className={styles.container}>
      <img src={ProductsDetailis.image} alt={ProductsDetailis.title} />
      <div className={styles.information}>
        <h3 className={styles.title}>{ProductsDetailis.title}</h3>
        <p className={styles.description}>{ProductsDetailis.description}</p>
        <p className={styles.category}><SiOpenproject/>{ProductsDetailis.category}</p>
        <div>
          <span className={styles.price}>
            <IoMdPricetag/>{ProductsDetailis.price} $
          </span>
          <Link to={"/products"}>
          <FaArrowLeft/>
          <span>Back to shop</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DetalisPage