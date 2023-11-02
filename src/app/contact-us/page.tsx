"use client";

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Card from "@/components/Card";
import MyForm from "@/components/MyForm";
import Navinav from "@/components/Navinav";
import Link from 'next/link'; 



export default function Contactus() {
  return (
    <main className="relative mb-20">
      <div className="w-full h-80 relative ">
        <Image
          src="/assets/contactus.jpg "
          alt=""
          className="blur-sm w-full h-full object-cover"
          width={500}
          height={500}
        />
        <div className="absolute inset-0 flex items-center justify-center px-8 py-4 text-white bg-black bg-opacity-50">
          <h1 className="md:text-6xl xs:text-4xl sm:text-4xl font-bold">
            <b className='pr-1'>CONTACT </b> <b className="text-sky-400 pl-1"> US</b>{" "}
          </h1>
        </div>
      </div>
      <Navinav />

      <div className="mt-16 lg:px-20 xs:px-8 sm:px-8 md:px-12 text-gray-800 text-4xl font-bold font-serif">
        <h1 className='mb-6 text-left'>Drop us a line</h1>
        <h6 className='text-gray-500 mb-6 text-lg'><b className='text-gray-800'>Click</b> to Chat or Place a call</h6>
      </div>
      <div className="flex lg:px-20 md:px-12 sm:px-8 xs:px-8 ">
        <Link href="tel:+234-803-530-3738"> 
            <button className='border p-2 mr-2 border-gray-800 hover:bg-gray-900 shadow-2xl rounded-lg'>
              <FontAwesomeIcon className='w-20 h-6' icon={faPhone} size="2xl" style={{ color: "#10d402" }} />
            </button>
        </Link>

        <div className='text-center justify-center content-center items-center  py-2'><h1 className='text-gray-800 lg:text-xl md:text-2xl xs:text-xl text-center font-serif font-bold'>OR</h1></div>
        <Link href="https://wa.link/m9fhcp"> 
          <button className='border p-2 ml-2 border-gray-800 hover:bg-gray-900 shadow-2xl rounded-lg'>
            <FontAwesomeIcon className='w-20 h-6' icon={faWhatsapp} size="2xl" style={{ color: "#10d402" }} />
          </button>
        </Link>
      </div>

      <div className="w-98 h-auto md:hidden sm:block xs:block">
        
      </div>

      <section className="flex w-full  lg:px-20 md:px-12 sm:px-8 xs:px-8 xs:mt-16 sm:mt-16 md:mt-28 relative">
        <div className="md:w-1/2 sm:w-full xs:w-full h-full">
          <MyForm />
        </div>

        <div className="w-1/2 h-full md:block sm:hidden xs:hidden">
          <Image className="object-contain" src='/assets/contact.jpg' width={500} height={500} alt="" />
        </div>
      </section>
      <article className="text-gray-900 text-center mt-36 xs:text-3xl sm:text-3xl md:text-4xl font-bold font-serif">
        <h1>How Can I Contribute?</h1>
      </article>
      <section className=" md:flex xs:block sm:block mt-36 justify-center   items-align lg:mx-20 md:mx-12 sm:mx-8 xs:mx-8 text-center">
        <Card
          imageSrc='/assets/adopt.jpg'
          title="Adopt a Child"
          mainText="Change a life Your support means access to education, healthcare, and a loving home for a less privileged child"
        />
        <Card
          imageSrc='/assets/money.jpg'
          title="Cash Supports"
          mainText="Your cash support fuels education. Help us provide quality schooling, healthcare, and nourishment for these children."
        />
        <Card
          imageSrc='/assets/books.jpg'
          title="School Materials"
          mainText="Equip a child for success. Your donation of school materials ensures they have the tools to excel academically."
        />
      </section>
    </main>
  );
}
