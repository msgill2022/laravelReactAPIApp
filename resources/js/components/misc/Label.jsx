import React from 'react'

export default function Label(props) {
    const { 
        className = '', 
        processing,
        children} = props;

  return (
    <label 
        for = {props.for}
        className={
            `block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4
            ${className}`
        }
        disabled={processing}
        >
       {}
    </label>
  )
}
