 import {SET_LOADING, SET_STORIES, REMOVE_STORY, HANDLE_PAGE, HANDLE_SEARCH,} from '../actions'

const reducer = (state, action)=> {
  console.log(action.payload, "payload in reducer")
  switch(action.type) {
    
    case SET_LOADING: 
      return {...state, isLoading: true}
    case SET_STORIES: 
      return {...state, isLoading: false, hits: action.payload.hits, nbPages: action.payload.nbPages}  
    case REMOVE_STORY:
      return {...state, hits: state.hits.filter(story=> {
        if (story.objectID !== action.payload) {
          return story
        }
      })}
    case HANDLE_PAGE:   
      if(action.payload === 'inc') {
        console.log("inc pressed")
        if(state.page<50) {
          return {...state, page: state.page+1}
        } else {
          console.log("no more pages")
          return {...state, page: 0}
        }
      }  else if (action.payload==='dec') {
        console.log('dec pressed')
        if(state.page>0) {
            return {...state, page: state.page-1} 
         } else {      
           return {...state, page: 49}
         }        
      }
    case HANDLE_SEARCH: 
      return {...state, query: action.payload, page: 0}
    default: 
    throw new Error(`No case matching ${action.type}`)
  }

}

export default reducer