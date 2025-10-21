import { useEffect, useState } from "react"
import Card from "../components/Card"
import Loader from "../components/Loader"
import { useProducts } from "../context/ProducContext"
import Styles from "./ProductsPage.module.css"


import {filterProducs, getInitialQuery, searchProducts } from "../helper/helper"
import { useSearchParams } from "react-router-dom"
import SearchBox from "../components/SearchBox"
import Sidebar from "../components/Sidebar"

function ProductsPage() {
  
  const products = useProducts()
  const [displayed, setDisplayed] = useState([])
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState({})

  const [searchParams, setSearchParams] = useSearchParams()
  
  useEffect(() => {
    setDisplayed(products)

    setQuery(getInitialQuery(searchParams))
  }, [products])

  useEffect(() =>{
    setSearchParams(query)
    setSearch(query.search || "")
    let finalProducts = searchProducts(products, query.search)
    finalProducts = filterProducs(finalProducts, query.category)  

    setDisplayed(finalProducts)
  },[query]) 



 

  return ( 
    <>
  <SearchBox search={search} setSearch={setSearch} setQuery={setQuery}/>
    <div className={Styles.container}>
      <div className={Styles.products}>
        {!displayed.length && <Loader/>}
        {displayed.map((p) =>(
          <Card key={p.id} data={p}/>
        ))}
      </div>
      <Sidebar setQuery={setQuery}/>
    </div>
    </>
  )
}

export default ProductsPage