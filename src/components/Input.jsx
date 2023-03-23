import React from 'react'

const Input = ({Text,Result}) => {
  return (
    <div className="display-screen">
        <div className="result">
            <h1>{Result}</h1>
        </div>
        <div className="text">
            <h3>{Text}</h3>

        </div>
    </div>
  )
}

export default Input