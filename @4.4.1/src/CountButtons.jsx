import { MinusIcon, PlusIcon } from '@radix-ui/react-icons'

export default function CountButtons ({ setNumber }) {
  return (
    <div className='button-container'>
      <button
        onClick={() => {
          //count + 1 but count is not defined, so we use prev. This is second way of using setNumber.
          setNumber(prev => prev - 1)
        }}
        className='count-btn'
      >
        <MinusIcon className='count-btn-icon' />
      </button>
      <button
        className='count-btn'
        onClick={() => {
          setNumber(prev => prev + 1)
        }}
      >
        <PlusIcon className='count-btn-icon' />
      </button>
    </div>
  )
}
