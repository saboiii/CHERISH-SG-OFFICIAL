'use client';
import React from 'react'
import Link from 'next/link';
import Image from "next/image";
import { useEffect, useState } from 'react';

const About = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const memberStyles = {
    opacity: 0,
    transform: 'translateY(20px)',
    transition: 'opacity 0.5s, transform 0.5s',
  };

  if (scrollY > 100) {
    memberStyles.opacity = 1;
    memberStyles.transform = 'translateY(0)';
  }

  return (
    <div className="bg-[#250024]">
      <div className="h-screen py-[20%] mx-24 lg:mx-48 text-white text-center">
        <div className="container">
          <h1>OUR VISION</h1>
          <h2 className='font-partsold mb-4'>from the bottom of our hearts</h2>
          <p className="text-[#f8e3ea] font-lexendlight text-sm mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
          <p className="font-dmserifdisplay text-md">
            We are passionate about this project because...
          </p>

          <p className="text-[#f8e3ea] font-lexendlight text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>

        </div>
      </div>

      <div className="h-screen py-[25%] bg-gradient-to-t from-[#250024] to-transparent text-white text-center">
        <div className="container mx-auto">
          <h1 className="mb-8">MEMBERS</h1>
          <div className="flex flex-col items-center md:flex-row md:justify-center">

            <div className={`my-4 mx-12 ${
                scrollY > 100 ? 'member-fade-in' : ''
              }`}>
              <Image
                src="/anshika.jpeg"
                alt="Anshika"
                width={250}
                height={250}
                className="rounded-full object-cover"
              />
              <h1 className="text-lg mt-4">ANSHIKA SHISHIR</h1>
              <p className="font-lexendlight text-sm">die rn</p>
            </div>

            <div className={`my-4 mx-12 ${
                scrollY > 100 ? 'member-fade-in' : ''
              }`}>
              <Image
                src="/saba.jpeg"
                alt="Leader 1"
                width={250}
                height={250}
                className="rounded-full object-cover"
              />
              <h1 className="text-lg mt-4">SABA AZAD</h1>
              <p className="font-lexendlight text-sm">no</p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-screen py-[25%] text-white text-center relative">
        <div className="container mx-auto z-10 relative">
          <h1 >JOIN US</h1>
          <h2 className='font-partsold mb-4'>and be a part of the cause</h2>
          <p className="text-md mb-8 font-dmserifdisplay">
            Click the button below to fill out the registration form!
          </p>
          <Link href="" className="cursor-pointer text-[#f8e3ea] bg-rose-600 hover:bg-blue-600 transition ease-out duration-500 font-lexendbold text-xl list-none bg-gradient-to-r from-rose-400/50 to-blue-400/50 py-2 px-2 sm:px-4 md:px-8 rounded">
            REGISTER
          </Link>
        </div>

        <div className="absolute inset-0 bg-cover bg-center bg-[your-image-source]" />

      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(100px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .member-fade-in {
          animation: fadeIn 1s ease-in-out;
        }
      `}</style>

    </div>
  )
}

export default About 