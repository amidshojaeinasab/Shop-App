import { createContext, useEffect, useState } from "react"
import api from "../services/config"

const ProdutContext = createContext()
const [products , setProducts] = useState

function ProductsProvider({children}) {
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setProducts(await api.get("/products"))
            } catch (error) {
                console.log(error.message)
            }
        }
    fetchProducts()
    }, [])

  return (
    <ProdutContext.Provider value={products}>
        {children}
    </ProdutContext.Provider>
  )
}

export default ProductsProvider