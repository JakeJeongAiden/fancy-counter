import CountButton from './CountButton'

export default function ButtonContainer ({ setNumber }) {
  return (
    <div className='button-container'>
      <CountButton type='minus' setNumber={setNumber} />
      <CountButton type='plus' setNumber={setNumber} />
    </div>
  )
}
