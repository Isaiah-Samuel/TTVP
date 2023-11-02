import Image from 'next/image';

import React from "react";
import Navinav from "@/components/Navinav";


export default function Give() {
  return (
    <main className="bg-white text-black">
      <div className="w-full h-80 relative ">
        <Image
          src='/assets/fot.png'
          alt=""
          className="w-full h-full object-cover " width={626}
          height={471}
        />
        <div className="absolute inset-0 flex items-center justify-center p-4 text-white bg-black bg-opacity-50">
        </div>
      </div>
      <Navinav/>
      <div className="text-black  bg-white xs:px-8 sm:px-8 md:px-12 lg:px-20 xl:px-24 py-24 justify-center items-center">
        <h1 className=" mb-8 lg:text-6xl md:text-5xl sm:text-5xl xs:text-5xl font-light text-dblue">
          <b>Our Financial Source?</b>
        </h1>
        <h3 className="md:pl-0 xs:pl-0 text-justify md:pr-48 xs:pr-0 text-xl  text-nblue sm:pb-0 xs:pb-4 pb-10">
          The school relies entirely on divine providence to cover its
          operational expenses and sustain its functions.
        </h3>
        <div className="xl:flex  xs:px-0 md:block lg:flex  w-full">
          <div className="w-full lg:border-r xs:border-none border-gray-600 py-16">
            <div className="bg-lred lg:hidden text-justify xl:hidden sm:block md:block mb-8 hover:rounded-lg  px-4 text-xl py-4 sm:rounded-br-xl md:rounded-br-xl rounded-br-full md:mr-4 xs:mr-0 xs:rounded-br-3xl md:mx-8 sm:mx-0 xs:mx-0 lg:mx-8">
              <h1 className="text-white">
                <b className="text-lred bg-white border-1 p-1 mr-1">
                  FUNDING:{" "}
                </b>
                We humbly solicit for funds from your kind and generous self for
                the continued development of this project. We need{" "}
                <i>
                  <b className="text-2xl">₦192 million</b>
                </i>{" "}
                to complete the first phase which are the basement containing 6
                classrooms, 4 offices, four toilets.
              </h1>
            </div>

            <ul>
              <div className="lg:pr-12 md:pr-12 sm:pr-0 xs:pr-0 text-justify ">
                {" "}
                <h3 className="leading-9 text-gray-700 text-xl pb-10">
                  <b className="text-lred">Charity:</b> We shall also
                  trust God to use men and corporate bodies
                </h3>
              </div>
              <div className="lg:pr-48 md:pr-48 sm:pr-0 xs:pr-0 text-justify">
                {" "}
                <h3 className="leading-9 text-xl pb-10 text-gray-700">
                  We trust to also draw from any State and{" "}
                  <b>
                    <i className="text-lred">international provisions</i>
                  </b>{" "}
                  for such establishments
                </h3>
              </div>
              <div className="lg:pr-48 md:pr-48 sm:pr-0 xs:pr-0 text-justify">
                {" "}
                <h3 className="leading-9 text-xl pb-10 text-gray-700">
                  Adopting one or more students for sponsorship
                </h3>
              </div>
            </ul>
            <div className="flex justify-between pr-48">
              <h1 className="animate-bounce  shadow-black bg-blend-darken shadow-2xl text-lred">
                GOD
              </h1>
              <h1 className="animate-bounce   shadow-black bg-blend-darken shadow-2xl text-lred">
                BLESS
              </h1>
              <h1 className="animate-bounce   shadow-black bg-blend-darken shadow-2xl text-lred">
                YOU
              </h1>
            </div>
          </div>
          <div className="w-full">
            <div className="bg-lred xs:hidden md:hidden sm:hidden lg:block xl:block mb-8 hover:rounded-lg  px-4 text-xl py-4 md:rounded-br-xl rounded-br-full mx-8">
              <h1 className="text-white pr-12">
                <b className="text-lred bg-white border-1 p-1 mr-1">
                  FUNDING:{" "}
                </b>
                We humbly solicit for funds from your kind and generous self for
                the continued development of this project. We need{" "}
                <i>
                  <b className="text-2xl">₦192 million</b>
                </i>{" "}
                to complete the first phase which are the basement containing 6
                classrooms, 4 offices, four toilets.
              </h1>
            </div>
            <div className="w-full text-center md:pl-8">
              <h2 className="pb-8 font-bold text-3xl">Account Details</h2>
              <p className="text-lred text-base pb-4">
                Pending the time that our Corporate Accounts shall be ready, the
                account details to use is{" "}
              </p>
              <div className="bank-info">
                <div className="flex text-xl font-bold justify-between  text-gray-700">
                  <h5>Name: </h5> <h5>OLUPONA STEPHEN KOLAWOLE</h5>
                </div>

                <hr></hr>
                <div className="flex text-xl font-bold justify-between text-gray-700">
                  <h5>Bank Name: </h5> <h5>WEMA BANK</h5>
                </div>
                <div className="flex text-xl font-bold justify-between text-gray-700">
                  <h5>Account No: </h5> <h5>0235151087</h5>
                </div>
                <h1 className="font-bold">OR</h1>

                <div className="flex text-xl font-bold justify-between text-gray-800">
                  <h5>Bank Name: </h5> <h5>Fidelity Bank</h5>
                </div>
                <div className="flex text-xl font-bold justify-between text-gray-800">
                  <h5>Account No: </h5> <h5>6013214961</h5>
                </div>

                <hr></hr>
                <div className="whatsapp  "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// -----------------------------------
