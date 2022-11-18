import React from 'react'

export default function Input(props) {
    const { 
        id ='',
        type='text',
        className ='', 
        value='',
        onChange,
        innerref,
        name=''
        } = props;

  return (
    <input
        id={id} 
        type={type}
        value={value}
        name={name}
        className={
            `bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full 
              py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white
               focus:border-purple-500`
            + className
        }
        onChange={onChange}
        ref={innerref}
        {...props}
    />
  )
}
