import React from 'react'
import "../Button/Button.css"
const Button = ({change}) => {
  
  
  return (
    <button className='button__change'>
      <span onClick={change}><i class="fa-solid fa-rotate-right"></i></span>
    </button>
  )
}

export default Button;
