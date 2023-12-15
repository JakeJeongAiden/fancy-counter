import Count from './Count'
import ButtonContainer from './ButtonContainer'
import ResetButton from './ResetButton'
import Title from './Title'
import { useState } from 'react'

export default function Card () {
  const [number, setNumber] = useState(0)
  //it's appealing to use useState but it's not necessary. We don't need additional state to determine if the card is locked or not. We can use the number state to determine that. If the number is 5, then the card is locked. If it's not 5, then the card is not locked. We can use this logic to determine the locked state of the card. We can use a ternary operator to determine the locked state of the card. If the number is 5, then the locked state is true. If the number is not 5, then the locked state is false. We can use this ternary operator to deter
  const locked = number === 5 ? true : false

  return (
    <div className={`card ${locked && 'card--limit'}`}>
      <Title locked={locked} />
      <Count number={number} />
      <ResetButton setNumber={setNumber} />
      <ButtonContainer setNumber={setNumber} locked={locked} />
    </div>
  )
}
