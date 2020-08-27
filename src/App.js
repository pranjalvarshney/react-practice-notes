import React from "react"
import { SimpleUseReducer } from "./SimpleUseReducer"
import { ComplexUseReducer } from "./ComplexUseReducer"

export const App = () => {
  return (
    <div>
      <SimpleUseReducer />
      <ComplexUseReducer />
    </div>
  )
}
