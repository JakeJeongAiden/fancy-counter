import { MinusIcon, PlusIcon } from '@radix-ui/react-icons'

export default function CountButton ({ type, setNumber, locked }) {
  const handleClick = event => {
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
        //set Upper limit to 5
        const newCount = prev + 1
        if (newCount > 5) {
          return 5
        }
        return newCount
      }
    })
    event.currentTarget.blur()
  }

  return (
    <button disabled={locked} onClick={handleClick} className='count-btn'>
      {type === 'minus' ? (
        <MinusIcon className='count-btn-icon' />
      ) : (
        <PlusIcon className='count-btn-icon' />
      )}
      {/* <MinusIcon className='count-btn-icon' /> */}
    </button>
  )
}
