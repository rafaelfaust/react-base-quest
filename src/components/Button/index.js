import React from "react"

function Button(props) {
    const { label } = props
    
    function handleClick() {
      alert(`A label desse botão é ${label}`)
    }
    
    return <button onClick={handleClick}>{label}</button>

  }

  export default Button