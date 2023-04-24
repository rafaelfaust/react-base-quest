import React from 'react';

const TextTransform = (props) => {
  const { text, color } = props;
  const styles = {
    color: color,
    textTransform: 'uppercase',
  }
  return (
    <p style={styles}>{text}</p>
  );
}

export default TextTransform;