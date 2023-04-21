import React from "react";
import './styles.css'

function InputForm(props) {
    return (
        <div className='input-form'>
            <label>{props.label}</label>
            <input type={props.type}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
            />
            <span className="span-footer">{props.footer}</span>
        </div>
    )
}

export default InputForm;
