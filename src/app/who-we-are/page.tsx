import Image from 'next/image';
import React from 'react';
import Navinav from '@/components/Navinav';
import Link from 'next/link';


const Whoweare = () => {
  return (
    <main className='text-black mb-36'>
      <div className="w-full h-full relative ">
        <Image src='/assets/teachers.jpeg' alt="" width={500}
              height={500} className="w-full h-full object-cover " />
        <div className="absolute inset-0 flex items-center justify-center p-4 text-white bg-black bg-opacity-50">
        </div>
      </div>
      <Navinav/>

    <div className='lg:mx-20 md:mx-8 sm:mx-8 xs:mx-8 pt-8 '>
      <div className='flex text-gray-600  text-sm'>
        <a className='mx-1 hover:border-black hover:border-b-2' href="#">HOME</a>  <i className='px-1'> {'>'}</i> <h6 className='px-1 text-black'>WHO WE ARE</h6>
      </div>

      <div className=''>
        <div className='text-black bg-white xs:px-0 sm:px-0 lg:px-0 py-24'>
          <h1 className='mb-10 md:text-4xl sm:text-3xl xs:text-3xl font-serif'><b>WHO WE ARE</b></h1>

            <div className='lg:flex xs:block justify-between'>
             
             <article className='lg:w-3/4 xs:w-full lg:mr-8 md:mr-8 sm:mr-0 xs:mr-0 lg:mb-0 xs:mb-8 sm:mb-8 '>
                <h5 className='text-gray-900 md:text-3xl sm:text-2xl xs:2xl pb-4  font-semibold'>Learning without walls</h5>
                <h3 className='text-gray-800 mb-12 text-justify'>The True Vine Project (TTVP) is a secondary school with a mandate of admitting and training not less than 25 students every year, free 
                  tuition, free accommodation, free feeding and free uniforms in her full strength.
                  In year 2000, God burdened my heart with this vision amongst others, as a way to carry out His divine mandate.
                  The TRUE VINE PROJECT is therefore a kingdom project to both recruit and equip candidates for the
                  - All time kingdom mandate of righteousness and salvation for men
                  - Hauling men out of sinfulness unto being a living stone for the earth&apos;s transformation and ultimately the kingdom of God.
                  It is the educational aspect of International Christ&apos;s Mandate Ministries(ICMM).
                </h3>
                <div className='border-l-4 lead border-orange-600 md:pl-8 sm:pl-4 xs:pl-4 text-slate-600 text-justify'>
                  <p><b className='text-2xl '>TTVP Mission Statement: </b>Empowering through education, TTVP offers free 
                  comprehensive learning to cultivate values, knowledge, and righteousness in students. Aligned with the divine mandate of ICMM,
                   we nurture individuals to become catalysts for societal transformation and the advancement of God&apos;s kingdom</p> 
                </div>
              </article>
              <Image className='rounded-full lg:h-full md:h-96 md:w-96  sm:h-80 sm:w-80 xs:h-80 xs:w-80 lg:mt-0 xs:mt-12' src='/assets/round.jpg' alt="" width={500}
              height={500}/>
            </div>
        </div>
      </div>

      <section className='text-white font-bold text-xl '>
        <h3 className='text-3xl font-serif font-bold text-black'>Discover More</h3>
        <section className='md:flex xs:block mt-10 '>

          <div className='relative rounded object-contain shadow-2xl'>
            <Image className='rounded hover:blur-sm' src='/assets/progress.jpg' alt="" width={500}
              height={500}/> 
            <h1 className='absolute bottom-3 px-8'>Project Progress</h1>
            <h5></h5>
          </div>


          <div className='relative rounded object-contain md:mx-8 xs:mx-0 xs:my-8 sm:my-8 md:my-0 shadow-2xl '>
            <Image className='rounded hover:blur-sm' src='/assets/modals.jpg' alt="" width={500}
              height={500} />
            <h1 className='absolute bottom-3 px-8'>School Modalities</h1>
            <h5></h5>
          </div>


          <div className='relative rounded object-contain shadow-2xl '>
            <Image className='rounded hover:blur-sm' src='/assets/curriculum.jpg' alt="" width={500}
              height={500}/>
            <h1 className='absolute bottom-3 px-8'>Curriculum</h1>
            <h5></h5>
            </div>
        </section>

        

      </section>

    </div>
    </main>
  );
};

export default Whoweare;
