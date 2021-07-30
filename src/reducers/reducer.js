 import {SET_LOADING, SET_STORIES, REMOVE_STORY, HANDLE_PAGE, HANDLE_SEARCH,} from '../actions'

const reducer = (state, action)=> {
  console.log(action.payload, "payload in reducer")
  switch(action.type) {
    
    case SET_LOADING: 
      return {...state, isLoading: true}
    case SET_STORIES: 
      return {...state, isLoading: false, hits: action.payload.hits, nbPages: action.payload.nbPages}  
    default: 
      throw new Error(`No case matching ${action.type}`)
  }

}

export default reducer