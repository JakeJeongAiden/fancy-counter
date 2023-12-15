import { MinusIcon, PlusIcon } from '@radix-ui/react-icons'

export default function CountButton ({ type, setNumber }) {
  const handleClick = () => {
    //count + 1 but count is not defined, so we use prev. This is second way of using setNumber.
    setNumber(prev => {
      if (type === 'minus') {
        //Prevents count from going below 0
        const newCount = prev - 1
        if (newCount < 0) {
          return 0
        }
        return newCount
      } else {
        const newCount = prev + 1
        if (newCount > 5) {
          return 5
        }
        return newCount
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
