import React from 'react'
import { useGlobalContext } from '../contexts/context'

export default function Stories() {
  const {isLoading, hits} = useGlobalContext()

  console.log(isLoading)

  if(isLoading) {
    return <div className="loading">
      <p>this is loading</p>
    </div>
  } 
  return (
    <div className="stories">
      {hits.map(story => {
        console.log(story)
      })
      }
    </div>
  )
}
