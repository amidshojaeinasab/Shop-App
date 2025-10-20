import { createContext, useContext, useEffect, useState } from "react"
import api from "../services/config"

const ProdutContext = createContext()


function ProductsProvider({children}) {
    const [products , setProducts] = useState([])
    
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

const useProducts = () => {
    const products = useContext(ProdutContext)
    return products
}

export default ProductsProvider
export {useProducts}