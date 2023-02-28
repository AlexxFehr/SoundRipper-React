import { useState } from 'react'

import InputCard from './InputCard'
import "bootstrap/dist/css/bootstrap.min.css"

import "./InputCard.css"



export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <InputCard />
    </div>
  )
}