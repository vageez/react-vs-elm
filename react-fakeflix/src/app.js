import React, { memo, useMemo } from 'react'
import { useContextProvider } from './context'

const Navigation = memo(() => {
  const [, dispatch] = useContextProvider()
  console.log(`Navigation Render`)
  return useMemo(
    () => (
      <div>
        {console.log(`Navigation useMemo Render`)}
        <button onClick={() => dispatch({ type: 'LATEST' })}>LATEST</button>
        <button onClick={() => dispatch({ type: 'TRENDING' })}>TRENDING</button>
        <button onClick={() => dispatch({ type: 'RECOMMENDED' })}>
          RECOMMENDED
        </button>
        <button onClick={() => dispatch({ type: 'MYLIST' })}>MY LIST</button>
      </div>
    ),
    [dispatch]
  )
})
const Latest = () => {
  const [{ latest }] = useContextProvider()
  console.log(`Latest Render`)
  // Wrapping JSX return in useMemo stops a rerender
  return useMemo(
    () => (
      <>
        {console.log(`useMemo Latest Render`)}
        <h3>Latest</h3>
        <div>
          {latest.map((r, i) => (
            <p key={i}>{r.name}</p>
          ))}
        </div>
      </>
    ),
    [latest]
  )
}
const Trending = () => {
  const [{ trending }] = useContextProvider()
  console.log(`Trending Render`)
  // Wrapping JSX return in useMemo stops a rerender
  return useMemo(
    () => (
      <>
        {console.log(`useMemo Trending Render`)}
        <h3>Trending</h3>
        <div>
          {trending.map((r, i) => (
            <p key={i}>{r.name}</p>
          ))}
        </div>
      </>
    ),
    [trending]
  )
}
const Recommended = () => {
  const [{ recommended }] = useContextProvider()
  console.log(`Recommended Render`)
  // Wrapping JSX return in useMemo stops a rerender
  return useMemo(
    () => (
      <>
        {console.log(`useMemo Recommended Render`)}
        <h3>Recommended</h3>
        <div>
          {recommended.map((r, i) => (
            <p key={i}>{r.name}</p>
          ))}
        </div>
      </>
    ),
    [recommended]
  )
}

const MyList = () => {
  const [{ mylist }] = useContextProvider()
  console.log(`MyList Render`)
  // Wrapping JSX return in useMemo stops a rerender
  return useMemo(
    () => (
      <>
        {console.log(`useMemo MyList Render`)}
        <h3>My List</h3>
        <div>
          {mylist.map((r, i) => (
            <p key={i}>{r.name}</p>
          ))}
        </div>
      </>
    ),
    [mylist]
  )
}

export default () => {
  const [{ view }] = useContextProvider()
  return (
    <>
      <h1>FakeFlix React</h1>
      <Navigation />
      {view.cata({
        RECOMMENDED: () => <Recommended />,
        TRENDING: () => <Trending />,
        LATEST: () => <Latest />,
        MYLIST: () => <MyList />
      })}
    </>
  )
}
