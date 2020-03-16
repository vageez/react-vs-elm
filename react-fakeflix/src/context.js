import React, { createContext, useReducer, useContext, useMemo } from 'react'
import { taggedSum } from 'daggy'

const VIEW = taggedSum('VIEW', {
  RECOMMENDED: [],
  LATEST: [],
  TRENDING: [],
  MYLIST: []
})

const INITIAL_STATE = {
  view: VIEW.LATEST,
  recommended: [
    { name: 'Back to the Future' },
    { name: 'The Matrix' },
    { name: 'Star Trek' }
  ],
  latest: [
    { name: 'Ready Player One' },
    { name: 'Jurrasic World' },
    { name: 'Star Wars The Last Jedi' }
  ],
  trending: [
    { name: 'Alf' },
    { name: 'Letterkenny' },
    { name: 'McGyver' },
    { name: 'The Simpsons Movie' }
  ],
  mylist: [
    { name: 'The Running Man' },
    { name: 'Water World' },
    { name: 'The Watchmen' }
  ]
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'LATEST':
      return {
        ...state,
        view: VIEW.LATEST
      }
    case 'TRENDING':
      return {
        ...state,
        view: VIEW.TRENDING
      }
    case 'RECOMMENDED':
      return {
        ...state,
        view: VIEW.RECOMMENDED
      }
    case 'MYLIST':
      return {
        ...state,
        view: VIEW.MYLIST
      }
    default:
      throw new Error()
  }
}

export const Context = createContext(undefined)

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  )
}

export const useContextProvider = () => {
  const [state, dispatch] = useContext(Context)

  return useMemo(() => [state, dispatch], [state, dispatch])
}
