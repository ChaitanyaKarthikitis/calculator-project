import React from 'react'

const Button = (input) => {
  return (
    <div >
        <button onClick={()=>input.handleClick(input.Symbol)} className={input.btnType ? 'clearbutton' : 'btn'} style={{backgroundColor:input.color}}>{input.Symbol}</button>
    </div>
  )
}

export default Button