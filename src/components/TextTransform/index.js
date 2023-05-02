import React from 'react'

const TextTransform = (props) => {
  const { text, color } = props; // Utilize props para passar o texto e a cor de texto desejada para dentro do componente (a cor pode ser uma palavra, como 'red', ou um hexadecimal);
  const styles = {
    color: color,
    textTransform: 'uppercase',
  }
  return <p style={styles}>{text}</p> // 2 - Faça o componente renderizar na tela um parágrafo colorido e com todas as letras maiúsculas usando JS; 
  //4 - Pode utilizar o style inline para colorir o componente da forma que foi mostrado nas aulas;

}

export default TextTransform;