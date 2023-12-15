import { ResetIcon } from '@radix-ui/react-icons'

export default function ResetButton ({ setNumber }) {
  return (
    <button
      className='reset-btn'
      onClick={() => {
        setNumber(0)
      }}
    >
      <ResetIcon />
    </button>
  )
}
