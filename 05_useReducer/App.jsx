// 创建“外壳”组件(RFC)
import React, { useReducer } from 'react'

const myReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1
      }
    case "decrement":
      return {
        ...state,
        count: state.count - 1
      }
    default:
      break;
  }
}

export default function App() {
    const [state, dispatch] = useReducer(myReducer, { count: 0 })

    return (
      <>
          <button onClick={() => dispatch({type: "increment"})}>Increment</button>
          <button onClick={() => dispatch({type: "decrement"})}>Decrement</button>
          <h2>{state.count}</h2>
      </>       
    )
}
