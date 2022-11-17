import React from 'react'

export default function Input(props) {
    const { 
        id ='',
        type='text',
        className ='', 
        value='',
        } = props;

  return (
    <input
        id={id} 
        type={type}
        value={value}
        className={
            `bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500`
            + className
        }
        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
    />
  )
}
