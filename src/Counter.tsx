import React, { useState } from 'react'

const Counter = () => {
  const [count, setcount] = useState(0)
  const [val, seval] = useState(0)
  console.log('hell world')
 const name = "john"
  return (
    <div>
      <button onClick={() => setcount((val) => val - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setcount((val) => val + 1)}>+</button>
    </div>
  )
}

export default Counter
