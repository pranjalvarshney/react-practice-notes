import React, { useReducer } from "react"

const initialState = {
  counterOne: 0,
}

const reducer = (currentState, action) => {
  switch (action.type) {
    case "increment":
      return { counterOne: currentState.counterOne + action.value }
    case "decrement":
      return { counterOne: currentState.counterOne - action.value }
    case "reset":
      return initialState
    default:
      return currentState
  }
}

export const ComplexUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className='mainbody'>
      <div>
        <h4>Complex Count {state.counterOne}</h4>
        <div>
          <button
            onClick={() => {
              dispatch({ type: "increment", value: 5 })
            }}
          >
            Increment +5
          </button>
          <button
            onClick={() => {
              dispatch({ type: "increment", value: 1 })
            }}
          >
            Increment +1
          </button>
          <button
            onClick={() => {
              dispatch({ type: "reset" })
            }}
          >
            Reset
          </button>
          <button
            onClick={() => {
              dispatch({ type: "decrement", value: 1 })
            }}
          >
            Decrement -1
          </button>

          <button
            onClick={() => {
              dispatch({ type: "decrement", value: 5 })
            }}
          >
            Decrement -5
          </button>
        </div>
      </div>
    </div>
  )
}
