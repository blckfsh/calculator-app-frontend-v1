import { useEffect, useContext } from 'react'
import { CalContext } from '../App'

function Result() {

  const { number, storedNumber } = useContext(CalContext)

  useEffect(() => {
    console.log("child render")
  })

  return (
    <>
      <div>{!number.length && !storedNumber ? '0': number || storedNumber}</div>
    </>

  )
}

export default Result
