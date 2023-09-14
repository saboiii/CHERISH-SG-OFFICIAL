'use client';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { AiOutlineUser, AiOutlineLock, AiOutlineEye, AiOutlineEyeInvisible, AiOutlineGoogle } from 'react-icons/ai';


const Login = () => {
  const session = useSession();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
  };

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "authenticated") {
    router?.push("/dashboard")
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailValue = e.target[0].value;
    const passwordValue = e.target[1].value;

    setEmailError('');
    setPasswordError('');
    setLoginError('');

    if (!emailValue) {
      setEmailError('Email is required');
    } else {
      setEmailError('');
    }

    if (!passwordValue) {
      setPasswordError('Password is required.');
    } else {
      setPasswordError('');
    }

    if (emailValue && passwordValue) {
      const result = await signIn("credentials", {
        email: emailValue,
        password: passwordValue,
        redirect: false,
      });

      if (result.error) {
        setLoginError('Incorrect email or password.');
      }
    }
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-rose-400 to-purple-500">
      <form className="relative px-4" onSubmit={handleSubmit}>
        <h1 className="text-center text-5xl font-jetlabmedium mb-4">WELCOME</h1>
        <p className="text-xs md:text-sm text-[#f8e3ea] font-dmserifdisplay text-center mb-6">
          Only admins and members can be granted login access.
        </p>
        {loginError && <p className="text-red-900 text-xs ml-1 font-dmserifdisplay mb-1 absolute top-[88px] left-[15px]">{loginError}</p>}

        <div className={`relative mb-6 ${(emailError || loginError) ? 'animate-shake' : ''
          }`}>
          {emailError && <p className="text-red-900 font-dmserifdisplay text-xs mt-1 absolute left-0 top-[-22px]">{emailError}</p>}
          <div className="flex items-center absolute inset-y-0 left-0 pl-2">
            <AiOutlineUser className="text-white text-xl" />
          </div>
          <input
            type="text"
            className={`w-full py-2 px-8 rounded-full text-sm bg-white/20 text-[#f8e3ea] placeholder:text-[#f8e3ea] focus:outline-none font-lexend ${(emailError || loginError) ? 'border-[1.5px] border-red-900' : ''
              }`}
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>

        <div className={`relative mb-6 ${(passwordError || loginError) ? 'animate-shake' : ''
          }`}>
          {passwordError && <p className="text-red-900 font-dmserifdisplay text-xs mt-1 absolute left-0 top-[-22px]">{passwordError}</p>}
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <AiOutlineLock className="text-white text-xl" />
          </span>
          <input
            type={showPassword ? 'text' : 'password'}
            className={`w-full py-2 px-8 rounded-full text-sm bg-white/20 text-[#f8e3ea] placeholder:text-[#f8e3ea] focus:outline-none font-lexend ${(passwordError || loginError) ? 'border-[1.5px] border-red-900' : ''
              }`}
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
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
          SIGN IN
        </button>

        <div className="my-4 flex items-center justify-center">
          <div className="border-t border-gray-300 flex-grow"></div>
          <span className="mx-2 font-dmserifdisplay text-[#f8e3ea]">OR</span>
          <div className="border-t border-gray-300 flex-grow"></div>
        </div>

        <button onClick={() => signIn("google")} className="w-full py-2 px-4 rounded-full cursor-pointer text-[#f8e3ea] hover:bg-rose-300 transition ease-out duration-500 font-lexendbold text-sm list-none bg-gradient-to-r from-rose-200/50 to-blue-200/50 flex items-center justify-center">
          <AiOutlineGoogle className="text-[#f8e3ea] text-xl mr-2" /> SIGN IN WITH GOOGLE
        </button>

        {/*
        <Link className="flex justify-center pt-4 text-sm text-[#f8e3ea] font-dmserifdisplay text-center mb-4 hover:text-rose-300" href="/dashboard/register">
          Create new account?
        </Link>
        */}
      </form>

      <div className="absolute bottom-0 left-0 right-0 z-30 bg-gradient-to-t from-[#250024] to-transparent h-[10%]" />
    </div>
  )
}

export default Login