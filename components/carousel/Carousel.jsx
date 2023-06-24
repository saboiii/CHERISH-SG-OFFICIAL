'use client'
import React, { useState } from 'react';
import { AiFillCaretRight, AiFillCaretLeft } from 'react-icons/ai';

const Carousel = () => {
    const slides = [
        {
            title: "Blog Post 1",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
            title: "Blog Post 2",
            content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
            title: "Blog Post 3",
            content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
            title: "Blog Post 4",
            content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
            title: "Blog Post 5",
            content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
    ];

    const [curr, setCurr] = useState(0);

    const prev = () =>
        setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
    const next = () =>
        setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

    return (
        <div className="relative h-[50%] flex items-center justify-center">
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
                            <div className="bg-white rounded-md text-center p-8">
                                <h1 className="text-3xl text-rose-300">
                                    {slide.title}
                                </h1>
                                <p className="text-xs sm:text-sm font-lexendlight text-black px-[10%]">
                                    {slide.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-between mx-[10%]">
                <button
                    onClick={prev}
                    className="p-2 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
                >
                    <AiFillCaretLeft size={25} />
                </button>
                <button
                    onClick={next}
                    className="p-2 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
                >
                    <AiFillCaretRight size={25} />
                </button>
            </div>

            <div className="absolute top-[85%] left-[25%] right-[25%] px-[5%] sm:px-[10%] md:px-[12%] lg:px-[16%]">
                <div className="flex items-center justify-between">
                    {slides.map((_, i) => (
                        <div
                            key={i}
                            className={`transition-all w-6 h-1 bg-white rounded-full ${curr === i ? 'w-12' : 'bg-opacity-50'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
