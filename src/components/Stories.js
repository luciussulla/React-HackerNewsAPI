import React from 'react'
import { useGlobalContext } from '../contexts/context'

export default function Stories() {
  const {isLoading, hits, removeStory} = useGlobalContext()

  console.log(isLoading)

  if(isLoading) {
    return <div className="loading">
      <p>this is loading</p>
    </div>
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
