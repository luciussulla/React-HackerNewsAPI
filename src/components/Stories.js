import React from 'react'
import { useGlobalContext } from '../contexts/context'
import Spinner from './Spinner'

export default function Stories() {
  const {isLoading, hits, removeStory} = useGlobalContext()

  // console.log(isLoading)

  if(isLoading) {
    return <Spinner/>
  } 

  return (
    <div className="stories">
      {hits.map(story => {
        // console.log(story)
        const {objectID, title, num_comments, url, points, author} = story
        return <article key={objectID} className="single-story">
          <h4 className="article-heading">{title}</h4>
          <p className="info">{points} points by <span>{author} | </span> 
            {num_comments} comments
          </p>
          <div>
            <a className="read-link" href={url} target="_blank" rel='noopener noreferrer'> Read more</a>
            <button className="btn-remove" onClick={()=>removeStory(objectID)}>Remove</button>
          </div>
        </article>
       })
      }
    </div>
  )

}
