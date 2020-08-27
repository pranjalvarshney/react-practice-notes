import React, { useReducer } from "react"

const initialState = 0

const reducer = (currentState, action) => {
  switch (action) {
    case "increment":
      return currentState + 1
    case "decrement":
      return currentState - 1
    case "reset":
      return initialState
    default:
      return currentState
  }
}

export const SimpleUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className='mainbody'>
      <div>
        <h4>Simple Count {state}</h4>
        <div>
          <button
            onClick={() => {
              dispatch("increment")
            }}
          >
            Increment +1
          </button>
          <button
            onClick={() => {
              dispatch("reset")
            }}
          >
            Reset
          </button>
          <button
            onClick={() => {
              dispatch("decrement")
            }}
          >
            Decrement -1
          </button>
        </div>
      </div>
    </div>
  )
}
