import Count from './Count'
import ButtonContainer from './ButtonContainer'
import ResetButton from './ResetButton'
import Title from './Title'
import { useState } from 'react'

export default function Card () {
  const [number, setNumber] = useState(0)
  return (
    <div className='card'>
      <Title />
      <Count number={number} />
      <ResetButton setNumber={setNumber} />
      <ButtonContainer setNumber={setNumber} />
    </div>
  )
}
