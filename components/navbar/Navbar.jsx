"use client"
import React from 'react'
import Link from "next/link"
import Image from "next/image"
import { useState } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import { signOut, useSession } from 'next-auth/react';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const session = useSession();

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div>
            <div className="fixed w-full h-20 z-[100] bg-gradient-to-b from-[#250024] to-transparent">


                <div className={nav ? "md:hidden fixed left-0 w-full h-screen bg-black/70 ease-in duration-300" : ""}>
                    <div className={nav ? "fixed left-0 top-0 w-[65%] sm:w-[50%] md:w-[45%] h-screen bg-gradient-to-b from-[#250024] to-[#10000f] backdrop-blur-md p-6 ease-in-out duration-300 shadow-xl shadow-black/50" :
                        "fixed left-[-100%] top-0 w-[65%] sm:w-[50%] md:w-[45%] h-screen bg-gradient-to-b from-[#250024] to-[#10000f] backdrop-blur-md p-6 ease-in-out duration-300 shadow-xl shadow-black/50"}>

                        <div className="flex w-full items-center justify-end py-0 my-2">
                            <div onClick={handleNav} className="cursor-pointer hover:scale-105 pr-1">
                                <IoMdClose size={25} />
                            </div>
                        </div>
                        {session?.data?.user ? (
                            <div className="flex items-center justify-between bg-[#2d182c] p-4 rounded-xl shadow-lg shadow-[#10080f]/50">
                                <div className="flex items-center space-x-4 ">
                                    <Image
                                        src="/anshika.jpeg"
                                        alt="Profile Picture"
                                        width={200}
                                        height={200}
                                        className="w-20 h-20 rounded-full shadow-lg shadow-[#250024]/50"
                                    />
                                    <div className="flex flex-col">
                                        <span className="text-pink-200 text-2xl font-lexendbold">
                                            {session.data.user.name}
                                        </span>
                                        <span className="text-pink-100 font-lexendlight text-sm">
                                            {session.data.user.email}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ) : null}
                        <div>
                            <div className="flex flex-col justify-center align-middle border-rose-200 ">
                                <ul>
                                    <Link href="/"> <div className="py-2 my-4 border-x-2 rounded bg-gradient-to-r from-rose-400/25 to-blue-400/25 hover:scale-[102%] transition ease-out duration-500 "><li className="text-lg text-center uppercase text-pink-100 font-lexendbold">Home</li></div> </Link>
                                    <Link href="/about"> <div className="py-2 my-4 border-x-2 rounded bg-gradient-to-r from-rose-400/50 to-blue-400/25 hover:scale-[102%] transition ease-out duration-500 "><li className="text-lg text-center uppercase text-pink-100 font-lexendbold">About</li></div> </Link>
                                    <Link href="/contact"> <div className="py-2 my-4 border-x-2 rounded bg-gradient-to-r from-rose-400/75 to-blue-400/25 hover:scale-[102%] transition ease-out duration-500 "><li className="text-lg text-center uppercase text-pink-100 font-lexendbold">Contact</li></div> </Link>
                                    <Link href="/gallery"> <div className="py-2 my-4 border-x-2 rounded bg-gradient-to-r from-rose-400/50 to-blue-400/25 hover:scale-[102%] transition ease-out duration-500 "><li className="text-lg text-center uppercase text-pink-100 font-lexendbold">Gallery</li></div> </Link>
                                    <Link href="/dashboard/login"> <div className="py-2 my-4 border-x-2 rounded bg-gradient-to-r from-rose-400/25 to-blue-400/25 hover:scale-[102%] transition ease-out duration-500 "><li className="text-lg text-center uppercase text-pink-100 font-lexendbold">{session.status === "authenticated" ? "Dashboard" : "Login"}</li></div> </Link>
                                    {session.status === "authenticated" && (
                                        <div
                                            className="py-2 my-4 border-x-2 rounded bg-gradient-to-r from-green-400/50 to-blue-400/50 hover:scale-[102%] transition ease-out duration-500 text-lg text-center uppercase text-pink-100 font-lexendbold"
                                            onClick={() => {
                                                signOut();
                                            }}>
                                            Logout
                                        </div>
                                    )}
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
                                    <Image
                                        src="/mainlogo.png"
                                        alt="Logo"
                                        width={200}
                                        height={200}
                                        className="hover:scale-110"
                                    />
                                </div>
                            </Link>
                        </li>
                        <Link href="/gallery"> <li className="md:mx-12 lg:mx-20 text-s uppercase hover:text-rose-300 transition ease-out duration-500  text-[#fdf3f3] font-lexendbold">Gallery</li> </Link>
                        <Link href="/dashboard/login"> <li className="md:mx-12 lg:mx-20 text-s uppercase hover:text-rose-300 transition ease-out duration-500  text-[#fdf3f3] font-lexendbold">{session.status === "authenticated" ? "Dashboard" : "Login"}</li> </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar