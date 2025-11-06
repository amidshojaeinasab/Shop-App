import { PiShoppingCartSimpleBold } from "react-icons/pi"
import { Link, Links } from "react-router-dom"
import { useCart } from "../context/CardContext"
import styles from "./Layout.module.css"
function Layout({children}) {
    const [state] = useCart()
  return (
    <>
    <header className={styles.header}>
        <Link to="/products">Shope</Link>
        <Link to="/checkout">
        <div>
            <PiShoppingCartSimpleBold/>
            {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
        </div>
        </Link>
    </header>
    {children}
    <footer className={styles.footer}>
        <p>text</p>
    </footer>
    </>
  )
}

export default Layout