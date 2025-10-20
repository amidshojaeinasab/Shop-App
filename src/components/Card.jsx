import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb"
import { shotenText } from "../helper/helper"

import styles from "./Card.module.css"
import { Link } from "react-router-dom"

function Card({data}) {
    const {id, title, image, price} = data
  return (
    <div className={styles.card}>
         <img src={image} alt={title} />
         <h3>{shotenText(title)}</h3>
         <p>{price} $</p>
         <div className={styles.actions}>
            <Link to={`/products/${id}`} ><TbListDetails/></Link>
            <button><TbShoppingBagCheck/></button>
         </div>
    </div>
  )
}

export default Card

