import React from 'react'

export default function Counter(props) {

  const { value, onIncrement, onDecrement } = props

  return (
    <>
      <h2>{value}</h2>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
    </> 
  )
}
