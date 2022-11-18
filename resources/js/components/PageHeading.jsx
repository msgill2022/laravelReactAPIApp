import React from 'react';

export default function PageHeading(props) {
    const {heading, description} = props;
  return (
    <div>
        <h1 className='text-2xl sm:text-xl font-black tracking-wide text-center'>
              {heading}
        </h1>
        <div className='text-center text-2md text-gray-700 sm:text-2md p-4'>
           {description}
        </div>
    </div>
  )
}
