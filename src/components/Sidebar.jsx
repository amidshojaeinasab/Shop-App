import { creatQueryObject } from "../helper/helper"
import { FaListUl } from "react-icons/fa"

function Sidebar({setQuery}) {

const categoryHandler = (event) =>{
    const {tagName} = event.target
    const category = event.target.innerText.toLocaleLowerCase()
    if (tagName !== "LI") return
    setQuery((query) => creatQueryObject(query, {category}))
  }

  return (
    <div>
        <div>
          <FaListUl/>
        </div>
        <ul onClick={categoryHandler}>
          <li>All</li>
          <li>Electronics</li>
          <li>Jewelery</li>
          <li>Men's Clothing</li>
          <li>Women's Clothing</li>
        </ul>
      </div>
  )
}

export default Sidebar