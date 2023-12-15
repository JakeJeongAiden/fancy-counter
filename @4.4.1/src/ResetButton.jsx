import { ResetIcon } from '@radix-ui/react-icons'

export default function ResetButton ({ setNumber }) {
  const handleClick = () => {
    setNumber(0)
  }

  return (
    <button className='reset-btn' onClick={handleClick}>
      <ResetIcon />
    </button>
  )
}
