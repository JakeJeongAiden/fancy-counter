import CountButton from './CountButton'

export default function ButtonContainer ({ setNumber, locked }) {
  return (
    <div className='button-container'>
      <CountButton type='minus' setNumber={setNumber} locked={locked} />
      <CountButton type='plus' setNumber={setNumber} locked={locked} />
    </div>
  )
}
