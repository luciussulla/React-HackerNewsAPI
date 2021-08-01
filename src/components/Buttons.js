import React from 'react'
import {useGlobalContext} from '../contexts/context'

function Buttons() {

  const {isLoading, page, nbPages, handlePage} = useGlobalContext()

  return (
    <div className="btn-container">
      <button className="num-btn" 
              disabled={isLoading}
              onClick={()=>handlePage('dec')}      
      >
        Prev
      </button>
      <p className="page-display">
        {page +1} of {nbPages}
      </p>
      <button className="num-btn" 
              disabled={isLoading}
              onClick={()=>handlePage('inc')}
      >
        Next
      </button>
    </div>
  )
}

export default Buttons