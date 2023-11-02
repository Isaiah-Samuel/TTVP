import Image from 'next/image';
import Tiles from "@/components/Tiles";
import Card from "@/components/Card";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import children  from '/public/assets/children.jpg';

import React from "react";
import Navinav from "@/components/Navinav";
import Link from 'next/link';

export default function Home() {
  
  return (
    <main className="w-full h-full bg-white">
     
      <div className="w-full scroll-auto ">
        <video className="w-full h-90" autoPlay loop muted playsInline>
          <source src="assets/iframe_vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        
        <div className="absolute lg:px-20 md:px-12 sm:px-8 xs:px-8 xs:top-48 xxs:mb-48 sm:top-64 md:top-80 lg:top-96  w-full text-center snap-y ">
          <div className="">
            <p className="text-dblue justify-center items-center lg:text-6xl font-extrabold  bg-clip-text md:text-4xl sm:mt-0 xs:mb-2 sm:pb-4 xs:pb-0 sm:text-3xl xs:text-2xl">
              EMPOWERING THE FUTURE
            </p>
          </div>

          <div className="flex justify-center mt-4 items-center">
            <button className="border-2 bg-lred border-lred  hover:border-lblue   hover:text-gray-400 text-white lg:text-xl xs:text-sm font-medium lg:px-14 lg:py-5 mr-2 m-0 rounded-md md:px-8 md:py-4 sm:px-4 sm:py-4 xs:px-2 xs:py-2 ">
              SPONSORSHIP
            </button>
            <button className="border-2 bg-lred  border-lred  hover:border-lblue  hover:text-gray-400 text-white lg:text-xl xs:text-sm font-medium lg:px-14 lg:py-5 mr-2 rounded-md md:px-8 md:py-4 sm:px-4 sm:py-4 xs:px-2 xs:py-2">
              PARTNERSHIP
            </button>
            <button className="border-2 bg-lred       border-lred  hover:border-lblue  hover:text-gray-400 text-white lg:text-xl xs:text-sm font-medium lg:px-14 lg:py-5 rounded-md md:px-8 md:py-4 sm:px-8 sm:py-4 xs:px-8 xs:py-2">
              ADOPT
            </button>
          </div>
        </div>
      </div>
      <Navinav/>
      <div className="w-full lg:px-20 md:px-12 sm:px-8 xs:px-8 text-center lg:h-96 md:h-96 mt-14 flex-col justify-center items-center snap-y">
        <div className="text-center  w-full mb-16 ">
          <h1 className="text-black md:text-3xl sm:text-2xl xs:text-2xl font-bold ">Welcome to</h1>
          <h1 className="text-dblue md:text-3xl md:font-bold md:mt-2 ">
            The True Vine Education Project
          </h1>
          <div className="flex justify-center items-center ">
            <hr className="text-center bg-dblue h-2 w-48 my-8" />
          </div>

          <h3 className="text-gray-700 mt-3 lg:text-24 text-justify">
            <b>THE TRUE VINE PROJECT:</b> A kingdom project aiming at provides free education to instill values, knowledge,
             and righteousness in students, fostering their role as catalysts for societal transformation in alignment
              with God&apos;s mandate.
          </h3>
        </div>

        <div className="w-full mt-4 ">
          <Tiles />
         
        </div>
      </div>

      <div className="h-96 bg-white"></div>

      <div className="h-96 bg-slate-800 relative">
        <Image
          className="w-full h-full absolute inset-0"
          src='/assets/children.jpg'
          alt=""
          width={500}
              height={500}
        />
        <div className="text-red-300 absolute inset-0 flex justify-center items-center bg-blend-darken xs:px-8 sm:px-8 lg:px-12">
          <div className="text-center px-8  ">
            <h1 className="text-white font-bold text-4xl mb-4">
              We Need Your Support!
            </h1>
            <h3 className="text-white font-light text-xl">
            Your support transforms lives. Join us in providing quality education to less privileged children, 
            making dreams come true, one child at a time.
            </h3>
            <Link href="Give"><button className="bg-lred mx-auto mt-4 font-bold px-4 py-2 text-white hover:bg-red-400 text-2xl block">
              Donate
            </button></Link>
          </div>
        </div>
      </div>
    </main>
  );
}
