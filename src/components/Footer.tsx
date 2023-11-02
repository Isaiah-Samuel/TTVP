import React from "react";
import Image from 'next/image';
import Link from 'next/link';


export default function Footer() {
  return (
    <main className="w-full h-80 ">
      <section className="flex justify-center items-center mb-16">
        <div className="flex mt-8 space-x-5">
          <Link href="">
            <Image
              className="w-12 rounded-full border-2 hover:bg-slate-700 border-slate-900 h-12 p-2 bg-white"
              src='/assets/instagram.svg'
              alt=""
              width={100}
              height={100}
            />
          </Link>
          <Link href="">
            <Image
              className="w-12 rounded-full border-2 hover:bg-slate-700 border-slate-900 h-12 p-2 bg-white"
              src='/assets/facebook.svg'
              alt=""
              width={100}
              height={100}
            />
          </Link>
          <Link href="">
            <Image
              className="w-12 rounded-full border-2 hover:bg-slate-700 border-slate-900 h-12 p-2 bg-white"
              src='/assets/linkedin.svg'
              alt=""
              width={100}
              height={100}
            />
          </Link>
          <Link href="">
            <Image
              className="w-12 rounded-full border-2 hover:bg-slate-700 border-slate-900 h-12 p-2 bg-white"
              src='/assets/twitter.svg'
              alt=""
              width={100}
              height={100}
            />
          </Link>
        </div>
      </section>
      <div className="flex justify-center items-center mb-16">
        <h1 className="text-center">Follow us on Social Media</h1>
      </div>

      <section className="md:flex sm:block  justify-center mx-20 text-center items-center">
        <section className="md:w-1/2 md:mb-0 sm:mb-24 xs:mb-20 px-6  sm:w-full  text-center">
          <h1 className="text-lred font-bold">SCHOOL ADDRESS</h1>
          <br />
          <h3 className="mb-4">
            The TRUE VINE PROJECT <br /> Camp Manuel, Oke-Esi, Off Irese Road,
            Irese via Akure.
          </h3>
          <Link
            className="font-semibold text-md mt-8 hover:border-b border-black"
            href="https://wa.link/m9fhcp"
          >
            +234-803-530-3738
          </Link>
        </section>

        <section className="md:w-1/2 px-6 sm:w-full">
          <h1 className="text-lred font-bold">HOME ADDRESS</h1>
          <br />
          <h3 className="mb-4">
            Visit us at <br /> Camp Manuel, Oke-Esi, Off Irese Road, Irese via
            Akure.
          </h3>
          <Link
            className="font-semibold text-md  mt-8 hover:border-b border-black"
            href="https://wa.link/m9fhcp"
          >
            +234-803-530-3738
          </Link>
        </section>
      </section>

      <div className="flex justify-center items-center mt-24">
        <h2 className="text-xs text-black font-bold">
          Developed by <b className="text-slate-900 mb-24">Rhoda & Samuel</b>
        </h2>
      </div>
    </main>
  );
}
