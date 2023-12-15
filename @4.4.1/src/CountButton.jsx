import { MinusIcon, PlusIcon } from '@radix-ui/react-icons'

export default function CountButton ({ type, setNumber }) {
  const handleClick = () => {
    //count + 1 but count is not defined, so we use prev. This is second way of using setNumber.
    setNumber(prev => {
      if (type === 'minus') {
        return prev - 1
      } else {
        return prev + 1
      }
    })
  }

  return (
    <button onClick={handleClick} className='count-btn'>
      {type === 'minus' ? (
        <MinusIcon className='count-btn-icon' />
      ) : (
        <PlusIcon className='count-btn-icon' />
      )}
      {/* <MinusIcon className='count-btn-icon' /> */}
    </button>
  )
}