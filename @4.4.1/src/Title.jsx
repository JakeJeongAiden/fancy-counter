export default function Title ({ locked }) {
  return (
    <h1 className='title'>
      {locked ? (
        <span>
          Limit Reached! Buy <b>Pro</b> Version
        </span>
      ) : (
        <span>Counting</span>
      )}
    </h1>
  )
}
