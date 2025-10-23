import { Navigate, Route, Routes } from "react-router-dom"

import ProductsPage from "./Pages/ProductsPage"
import DetalisPage from "./Pages/DetalisPage"
import CheckoutPage from "./Pages/CheckoutPage"
import PageNotFound from "./Pages/404"
import ProductsProvider from "./context/ProducContext"
import CartProvider from "./context/CardContext"

function App() {
 

  return (
    <CartProvider>
      <ProductsProvider>
        <Routes>
          <Route index element={<Navigate to="/products" replace />} />
          <Route path="/products" element={<ProductsPage/>} />
          <Route path="/products/:id" element={<DetalisPage/>} />
          <Route path="/checkout" element={<CheckoutPage/>} />
          <Route path="/*" element={<PageNotFound/>} />
        </Routes>
      </ProductsProvider>
    </CartProvider>
  )
}

export default App
