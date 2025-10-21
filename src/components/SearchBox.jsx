import { ImSearch } from "react-icons/im"
import { creatQueryObject } from "../helper/helper"

function SearchBox({search, setSearch, setQuery}) {

const searchHandler = () =>{
    setQuery((query) => creatQueryObject(query, {search}))
}

  return (
     <div>
         <input type="text" placeholder="Search...." value={search} onChange={e => setSearch(e.target.value.toLocaleLowerCase().trim())}  />
         <button onClick={searchHandler}><ImSearch/></button>
       </div>
  )
}

export default SearchBox