import Count from './Count'
import CountButtons from './CountButtons'
import ResetButton from './ResetButton'
import Title from './Title'
import { useState } from 'react'

export default function Card () {
  const [number, setNumber] = useState(5)
  return (
    <div className='card'>
      <Title />
      <Count number={number} />
      <ResetButton setNumber={setNumber} />
      <CountButtons setNumber={setNumber} />
    </div>
  )
}
