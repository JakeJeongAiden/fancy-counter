import Count from './Count'
import ButtonContainer from './ButtonContainer'
import ResetButton from './ResetButton'
import Title from './Title'
import { useState } from 'react'

export default function Card () {
  const [number, setNumber] = useState(0)
  const locked = number === 5 ? true : false

  return (
    <div className={`card ${locked && 'card--limit'}`}>
      <Title />
      <Count number={number} />
      <ResetButton setNumber={setNumber} />
      <ButtonContainer setNumber={setNumber} locked={locked} />
    </div>
  )
}
