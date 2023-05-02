import React from "react"

/* Crie um componente Button com um evento de clique que
apresente um alerta informando a prop label do botão que
foi clicado, com a seguinte mensagem: "A label desse botão é
<insira a label aqui via JS>". */


function Button(props) {
    const { label } = props
    
    function handleClick() {
      alert(`A label desse botão é ${label}`)
    }
    
    return <button onClick={handleClick}>{label}</button>

  }

  export default Button