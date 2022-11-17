import React from 'react';
import GetLocationForm from './components/Forms/GetLocationForm'

function LocationPage () {
    return(
      <div className='container mx-auto'>


        {/* Page Heading section start */}
        <div className='mt-16'>
          <h1 className='text-4xl sm:text-5xl font-black tracking-wide text-center'>
          UserCurrent Location
          </h1>
          <div className='text-center text-2xl text-gray-700 sm:text-2xl p-4'>
         <p>We provides you the opportunity to save your current location on our Server </p> 
          <p >and you also get latest location save on our Server. </p>
          </div>
        </div>
        {/* Page Heading section end */}

        {/* Two column Container start */}
        <div className='flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto py-20 md:py-24'>

           {/* Left container to get latest saved location start */}
            <div className='relative lg:w-5/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left'>

                {/* Introduction to the get latest saved location Section start*/}
                <div className='text-justify'>
                  <h2 className='text-lg'>Use following form to get your latest location from server.</h2>
                  <p className='text-sm'> Enter your user id in following box and click get my location.</p>
                </div>
                {/* Introduction to the get latest saved location Section end*/}

                 {/* Form to get latest saved location Section start*/}
                 <div className=''>
                 <GetLocationForm />
                </div>
                {/* Form to the get latest saved location Section end*/}

              
            </div>                 
            {/* Left container to get latest saved location end */}

            {/* Right container to save location start */}
            <div className='relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end'>

                {/* Introduction to save location Section start*/}
                <div className='text-justify'>
                  <h2 className='text-lg'>Use following form to save your location on server.</h2>
                  <p className='text-sm'> For example, Washington DC has a latitude 38.8951 and longitude -77.0364. </p>
                </div>
                {/* Introduction to save location Section end*/}

                 {/* Form to save location Section start*/}
                 <div className=''>
                  i am the form
                </div>
                {/* Form to the get latest save location Section end*/}

              
            </div>                 
            {/* Right container to saved location end */}



        </div>
        {/* Two column Container end */}
        
      </div>
      
    );
}

export default LocationPage