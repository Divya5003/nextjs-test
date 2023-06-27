import React from 'react'

const Button = ({ handleClick, text, className = "" }) => {
    return (
        <button onClick={handleClick} className={`p-2 bg-emerald-500 my-4 rounded-lg text-white ${className}`}>{text}</button>
    )
}

export default Button