import React from 'react'

const InputError = ({message, type}) => {
  return (
    <div>
      <span className={`text-${type} small`}>{message}!</span>
    </div>
  );
}

export default InputError