import { useGlobalContext } from "../contexts/context"
import React, {useContext} from 'react'

function SearchForm() {
  const {query, searchHandle} = useGlobalContext()

  return (
    <div>
      <form className="form">
        <input type="text" 
                className="form-field" 
                placeholder="search article"
                onChange={(e)=>searchHandle(e.target.value)}
                value = {query}
        />
      </form>
      
    </div>
  )
}

export default SearchForm
