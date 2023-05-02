import React from "react"
import TextTransform from "../components/TextTransform" //- Dê um bom nome ao seu componente
import Button from "../components/Button" // - Dê um bom nome ao seu componente
import { Contanier } from "./styles"


function App() {
  return (
    <Contanier>
      <TextTransform text="Olá, Mundo" color="#FF5733" />
      <Button label="Clique aqui"/>
    </Contanier>
  )
}

export default App;
