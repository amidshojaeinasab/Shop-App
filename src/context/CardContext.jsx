import { Children, createContext, useReducer } from "react"

const initialstate ={}
const reducer = () =>{

}

const CartContext = createContext

function CartProvider({children}) {
    const [state , dispatch] = useReducer(reducer, initialstate)
  return <CartContext.provider value={state}>
        {children}
  </CartContext.provider>
}

export default CartProvider