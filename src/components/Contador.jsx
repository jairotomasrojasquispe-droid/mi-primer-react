import React, { useState } from 'react'

export default function Contador() {
  const [valor, setValor] = useState(0)
  const incrementar = () => setValor(v => v + 1)
  const decrementar = () => setValor(v => v - 1)
  const reset = () => setValor(0)

  return (
    <div>
      <h2>Contador: {valor}</h2>
      <button onClick={incrementar}>+1</button>
      <button onClick={decrementar}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}
