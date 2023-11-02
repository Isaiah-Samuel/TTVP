import React from "react";
import Image, { StaticImageData } from 'next/image';

interface CardProps {
  imageSrc: string | StaticImageData;
  title: string;
  mainText: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, mainText }) => {
  const imageUrl = typeof imageSrc === 'string' ? imageSrc : imageSrc.src;

  return (
    <div className=" text-center md:mt-0 xs:mt-10 sm:mt-10 shadow-2xl rounded-lg overflow-hidden md:mx-8 sm:mx-0 xs:mx-0  content">
      <div className="flex justify-center">
        <div className="w-1/3">
          {typeof imageSrc === 'string' ? (
            <Image src={imageSrc} alt={title} width={100} height={100} className="w-full h-auto" />
          ) : (
            <Image src={imageUrl} alt={title} width={100} height={100} className="w-full h-auto" />
          )}
        </div>
      </div>
      <div className="w-full md:p-4 sm:p-12 xs:p-12">
        <h2 className="text-xl text-gray-800 text-center font-semibold">{title}</h2>
        <p className="text-gray-600 ">{mainText}</p>
      </div>
    </div>
  );
};

export default Card;
