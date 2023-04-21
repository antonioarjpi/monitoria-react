import React from "react";
import './styles.css'

function Button(props) {
  return (
    <button {...props}>
      {props.label}
      <i className={props.icon} />
    </button>
  )
}

export default Button;
