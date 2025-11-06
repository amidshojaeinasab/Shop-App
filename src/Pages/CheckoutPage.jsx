import BasketCard from "../components/BasketCard"
import { useCart } from "../context/CardContext"
import styles from "./CheckoutPage.module.css"

function CheckoutPage() {
  const [state, dispatch] = useCart()
  const clickHandler = (type, payload) => dispatch({type, payload})

  if (!state.itemsCounter){
    return(
      <div className={styles.container}>
        <p>Empty</p>
      </div>
    )
  }
  return (
    <div className={styles.container}>
      <BasketCard state={state} clickHandler={clickHandler}/>
      <div className={styles.products}>
        {state.selectedItems.map((product) =>(
          <BasketCard key={product.id} data={product} clickHandler={clickHandler} />
        ))}
      </div>
    </div>
  )
}

export default CheckoutPage