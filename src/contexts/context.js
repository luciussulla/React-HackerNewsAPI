import React, {createContext, useContext, useEffect, useReducer } from 'react'
import {SET_LOADING, SET_STORIES, REMOVE_STORY, HANDLE_PAGE, HANDLE_SEARCH,} from '../actions'
import reducer from '../reducers/reducer'
const API_ENDPOINT = 'http://hn.algolia.com/api/v1/search?'
const AppContext = createContext()

const initialState = {
  isLoading: true,
  hits:[],
  query:'react',
  page:0,
  nbPages:0,
}

const AppProvider = ({children})=> {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchData = async (url)=> {
    dispatch({type: SET_LOADING})
    try {
      const res = await fetch(url)
      const data = await res.json()
      console.log(data)

      dispatch({type: SET_STORIES, 
                payload: {hits: data.hits, nbPages: data.nbPages}
              })

    } catch(e) {
      console.log(e)
    }

  }
  /* HANDLERS WITH DISPATCH */ 

  const searchHandle = (query)=> {
    console.log(query)
    dispatch({type: HANDLE_SEARCH, payload: query}) 
  }

  const removeStory = (id)=> {
    console.log(id)
    dispatch({type: REMOVE_STORY, payload: id})
  }

  const handlePage = (value)=> {
    console.log(value, "value in handle Page")
    dispatch({type: HANDLE_PAGE, payload: value})
  }

  /* HANDLERS */ 

  useEffect(()=> {
    fetchData(`${API_ENDPOINT}query=${state.query}&page=${state.page}`)
  },[state.query, state.page])

  return (
    <AppContext.Provider value={{
      ...state, removeStory, searchHandle, handlePage
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = ()=> {
  return useContext(AppContext)
}

export {AppContext, AppProvider}
