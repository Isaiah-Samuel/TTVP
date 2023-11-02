import React from 'react';
import Image from 'next/image';
export default function Tiles() {
  return (
    <main className='md:flex xs:block items-center justify-center sm:flex-col md:flex-row xs:flex-col w-full'>
      <section className='md:px-6 xs:px-24 bg-dblue text-white p-8 flex flex-col md:mb-0 xs:mb-8 sm:mb-8 items-center md:h-auto md:h-98 w-full'>
        <Image className='h-16 w-16 mb-2' src='/assets/g.png' alt='' width={100}
              height={100} />
        <h1 className='text-xl font-bold ml-1 md:ml-2 mt-2 md:mt-0'>Adoption</h1>
      </section>

      <section className='md:px-6 xs:px-24 bg-dblue text-white p-8 flex flex-col items-center md:mb-0 xs:mb-8 sm:mb-8 xs:ml-0 xs:mr-0 md:ml-4 md:mr-2 w-full '>
        <Image className='h-16 w-16 mb-2' src='/assets/t.png' alt=''width={100}
              height={100} />
        <h1 className='text-xl font-bold ml-1 md:ml-2 mt-2 md:mt-0'>Sponsorship</h1>
      </section>
      
      <section className='md:px-6 xs:px-24 bg-dblue text-white p-8 flex flex-col items-center md:mb-0 xs:mb-8 sm:mb-8 md:ml-2 md:mr-4 w-full'>
        <Image className='h-16 w-16 mb-2' src='/assets/e.png' alt='' width={100}
              height={100}/>
        <h1 className='text-xl font-bold ml-1 md:ml-2 mt-2 md:mt-0'>Donation</h1>
      </section>

      <section className='md:px-6 xs:px-24 bg-dblue text-white p-8 flex flex-col items-center w-full'>
        <Image className='h-16 w-16 mb-2' src='/assets/s.png' alt='' width={100}
              height={100}/>
        <h1 className='text-xl font-bold ml-1 md:ml-2 mt-2 md:mt-0'>Partnership</h1>
      </section>
    </main>
  );
}
