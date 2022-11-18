import React from 'react'

export default function Label(props) {
    const { 
        className = '', 
        processing,
        children} = props;

  return (
    <label 
        htmlFor = {props.for}
        className={
            `text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4
            ${className}`
        }
       
        >
       {children}
    </label>
  )
}
