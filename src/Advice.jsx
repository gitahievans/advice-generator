import React from 'react'

const Advice = ({advice}) => {
  return (
    <div>
    <p>ADVICE #{advice.id}</p>
    <div>
    <p>{advice.advice}</p>
    </div>
    </div>
  )
}

export default Advice