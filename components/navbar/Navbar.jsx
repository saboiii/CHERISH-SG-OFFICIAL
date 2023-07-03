"use client"
import React from 'react'
import Link from "next/link"
import Image from "next/legacy/image"
import { useState } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div>
            <div className="fixed w-full h-20 z-[100] bg-gradient-to-b from-[#250024] to-transparent">
                <div className={nav ? "md:hidden fixed left-0 w-full h-screen bg-black/70 ease-in duration-300" : ""}>
                    <div className={nav ? "fixed left-0 top-0 w-[65%] sm:w-[50%] md:w-[45%] h-screen bg-[#ff859b]/25 backdrop-blur-md p-6 ease-in duration-300 shadow-xl shadow-[#30191b]" :
                        "fixed left-[-100%] top-0 w-[65%] sm:w-[50%] md:w-[45%] h-screen bg-[#ff859b]/25 p-6 ease-in duration-300 shadow-xl shadow-[#30191b]"}>
                        <div className="flex w-full items-center justify-end py-0 my-2">
                            <div onClick={handleNav} className="cursor-pointer hover:scale-105 pr-1">
                                <IoMdClose size={25} />
                            </div>
                        </div>
                        <div className="">
                            <div className="flex flex-col justify-center align-middle border-rose-200 ">
                                <ul>
                                    <Link href="/"> <div className="py-2 my-4 border-x-2 rounded bg-gradient-to-r from-rose-400/25 to-blue-400/25 hover:scale-[102%] transition ease-out duration-500 "><li className="text-lg text-center uppercase text-pink-100 font-lexendbold">Home</li></div> </Link>
                                    <Link href="/about"> <div className="py-2 my-4 border-x-2 rounded bg-gradient-to-r from-rose-400/50 to-blue-400/25 hover:scale-[102%] transition ease-out duration-500 "><li className="text-lg text-center uppercase text-pink-100 font-lexendbold">About</li></div> </Link>
                                    <Link href="/contact"> <div className="py-2 my-4 border-x-2 rounded bg-gradient-to-r from-rose-400/75 to-blue-400/25 hover:scale-[102%] transition ease-out duration-500 "><li className="text-lg text-center uppercase text-pink-100 font-lexendbold">Contact</li></div> </Link>
                                    <Link href="/gallery"> <div className="py-2 my-4 border-x-2 rounded bg-gradient-to-r from-rose-400/50 to-blue-400/25 hover:scale-[102%] transition ease-out duration-500 "><li className="text-lg text-center uppercase text-pink-100 font-lexendbold">Gallery</li></div> </Link>
                                    <Link href="/dashboard"> <div className="py-2 my-4 border-x-2 rounded bg-gradient-to-r from-rose-400/25 to-blue-400/25 hover:scale-[102%] transition ease-out duration-500 "><li className="text-lg text-center uppercase text-pink-100 font-lexendbold">Dashboard</li></div> </Link>
                                    {/*
                                        <div className="border-t border-dashed border-rose-200">
                                            <div className="py-4 my-4 border-x-4 rounded bg-gradient-to-r from-blue-400/75 to-green-400/75 hover:scale-105 text-lg text-center uppercase text-pink-100 font-jetlabmedium">
                                                <button onClick={()=>{console.log("Logged out.")}}>Logout</button>
                                            </div>
                                        </div>
                                    */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div onClick={handleNav} className="md:hidden flex justify-end w-full h-full px-6 z-10 items-center cursor-pointer">
                    <HiOutlineMenu size={30} />
                </div>

                <div className="flex justify-center w-full h-full px-10 2xl:px-16 z-10">
                    <ul className="hidden md:flex items-center">
                        <Link href="/about"> <li className="md:mx-16 lg:mx-20 text-s uppercase hover:text-rose-300 transition ease-out duration-500  text-[#fdf3f3] font-lexendbold">About</li> </Link>
                        <Link href="/contact"> <li className="md:mx-16 lg:mx-20 text-s uppercase hover:text-rose-300 transition ease-out duration-500  text-[#fdf3f3] font-lexendbold">Contact</li> </Link>
                        <li className="flex">
                            <Link href="/">
                                <div className="md:mx-6 lg:mx-14 w-9 h-9 ">
                                    <Image src="/mainlogo.png" alt="Logo" layout="responsive" width={100} height={100} objectFit="contain" className="hover:scale-110" />
                                </div>
                            </Link>
                        </li>
                        <Link href="/gallery"> <li className="md:mx-12 lg:mx-20 text-s uppercase hover:text-rose-300 transition ease-out duration-500  text-[#fdf3f3] font-lexendbold">Gallery</li> </Link>
                        <Link href="/dashboard"> <li className="md:mx-12 lg:mx-20 text-s uppercase hover:text-rose-300 transition ease-out duration-500  text-[#fdf3f3] font-lexendbold">Dashboard</li> </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar