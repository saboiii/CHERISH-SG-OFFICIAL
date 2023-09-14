'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineUser, AiOutlineLock, AiOutlineEye, AiOutlineEyeInvisible, AiOutlineMail } from 'react-icons/ai';
import { useRouter } from 'next/navigation';

const Register = () => {
  const [err, setErr] = useState(false)
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    const name = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value

    try{
      const res = await fetch("/api/auth/register", {
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      res.status === 201 && router.push("/dashboard/login?success=Account has been created")
    }catch(err){
      setErr(true);
    }
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-rose-400 to-purple-500">
      <form className="px-4" onSubmit={handleSubmit}>
        <h1 className="text-center text-5xl font-jetlabmedium mb-4">REGISTER</h1>
        <p className="text-xs md:text-sm text-[#f8e3ea] font-dmserifdisplay text-center mb-4">
          Please enter your information below.
        </p>

        {/* Username Input */}
        <div className="relative mb-4">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <AiOutlineUser className="text-white text-xl" />
          </span>
          <input
            type="text"
            className="w-full py-2 px-8 rounded-full text-sm bg-white/20 text-[#f8e3ea] placeholder:text-[#f8e3ea] focus:outline-none font-lexend"
            placeholder="Username"
            required
          />
        </div>

        {/* Email Input */}
        <div className="relative mb-4">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <AiOutlineMail className="text-white text-xl" />
          </span>
          <input
            type="text"
            className="w-full py-2 px-8 rounded-full text-sm bg-white/20 text-[#f8e3ea] placeholder:text-[#f8e3ea] focus:outline-none font-lexend"
            placeholder="Email"
            required
          />
        </div>

        {/* Password Input */}
        <div className="relative mb-4">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <AiOutlineLock className="text-white text-xl" />
          </span>
          <input
            type={showPassword ? 'text' : 'password'}
            className="w-full py-2 px-8 rounded-full text-sm bg-white/20 text-[#f8e3ea] placeholder:text-[#f8e3ea] focus:outline-none font-lexend"
            placeholder="Password"
            required
          />
          <span
            className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <AiOutlineEyeInvisible className="text-white text-xl" />
            ) : (
              <AiOutlineEye className="text-white text-xl" />
            )}
          </span>
        </div>

        <button className="w-full py-2 px-4 rounded-full cursor-pointer text-[#f8e3ea] hover:bg-rose-300 transition ease-out duration-500 font-lexendbold text-sm list-none bg-gradient-to-r from-rose-200/50 to-blue-200/50">
          REGISTER
        </button>

        <div className="my-4 flex items-center justify-center">
          <div className="border-t border-gray-300 flex-grow"></div>
          <span className="mx-2 font-dmserifdisplay text-[#f8e3ea]">OR</span>
          <div className="border-t border-gray-300 flex-grow"></div>
        </div>

        <Link href="/dashboard/login" className='flex text-sm font-dmserifdisplay text-[#f8e3ea] justify-center items-center hover:text-[#fcb7ce]'>
          Login with existing account?
        </Link>
      </form>
      {err && "Something went wrong."}
      

      <div className="absolute bottom-0 left-0 right-0 z-30 bg-gradient-to-t from-[#250024] to-transparent h-[10%]" />

    </div>
  )
}

export default Register