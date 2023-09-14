'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AiFillCaretRight, AiFillCaretLeft } from 'react-icons/ai';

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

const Carousel = () => {
  const [slides, setSlides] = useState([]);
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData();
        setSlides(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="relative h-[50%] flex items-center justify-center">

      {/* next and previous buttons */}
      <div className="absolute inset-0 flex items-center justify-between mx-[10%]">
        <button
          onClick={prev}
          className="p-2 z-40 rounded-full shadow-sm shadow-gray-500/60 bg-rose-300/80 text-gray-800 hover:bg-rose-300 transition ease-in duration-200"
        >
          <AiFillCaretLeft size={25} className='text-[#250024] pr-1' />
        </button>
        <button
          onClick={next}
          className="p-2 z-40 rounded-full shadow-sm shadow-gray-500/60 bg-rose-300/80 text-gray-800 hover:bg-rose-300 transition ease-in duration-200"
        >
          <AiFillCaretRight size={25} className='text-[#250024] pl-1' />
        </button>
      </div>

      {/* mapping data */}
      <div className="h-full w-full max-w-screen-lg overflow-hidden py-[15%] px-2 md:px-[20%]">
        <div
          className="flex transition-transform ease-out duration-500 py-4"
          style={{
            transform: `translateX(-${curr * (100 / slides.length)}%)`,
            width: `${slides.length * 100}%`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 p-4"
              style={{ width: `${100 / slides.length}%` }}
            >
              <div className="bg-gradient-to-r from-white to-[#fceff3] rounded-tl-3xl rounded-br-3xl text-center p-20">

                <h1 className="text-3xl text-rose-400">
                  {slide.title}
                </h1>
                <p className="text-xs sm:text-sm font-lexend text-[#250024] px-[10%] mb-8">
                  {slide.desc}
                </p>
                <Link href={`/gallery/${slide._id}`} className='cursor-pointer text-[#f8e3ea] bg-rose-600 hover:bg-blue-600 transition ease-out duration-500 font-lexendbold text-sm list-none bg-gradient-to-r from-rose-400/50 to-blue-400/50 py-2 px-2 sm:px-4 md:px-8 rounded'>
                  READ MORE
                </Link>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* mapping slides */}
      <div className="absolute top-[85%] left-[25%] right-[25%] px-[5%] sm:px-[10%] md:px-[12%] lg:px-[16%]">
        <div className="flex items-center justify-center">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`transition-all h-1 mx-1 bg-white rounded-full ${curr === i ? 'w-8' : 'w-4'
                }`}
            />
          ))}
        </div>
      </div>

    </div>
  );
};

export default Carousel;
