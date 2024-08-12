'use client'
import React, { useState } from 'react';
import Image from "next/image";
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter, AiOutlineMail } from 'react-icons/ai';
import { FaTiktok, FaPinterest } from 'react-icons/fa';

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
        setNameError('');
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailError('');
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
        setMessageError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const nameValue = name;
        const emailValue = email;
        const messageValue = message;

        setNameError('');
        setEmailError('');
        setMessageError('');
        let formIsValid = true;

        if (!nameValue) {
            setNameError('*');
            formIsValid = false;
        } else {
            setNameError('');
        }

        if (!emailValue) {
            setEmailError('*');
            formIsValid = false;
        } else {
            setEmailError('');
        }

        if (!messageValue) {
            setMessageError('*');
            formIsValid = false;
        } else {
            setMessageError('');
        }

        if (formIsValid) {
            setIsLoading(true);

            const data = {
                name: nameValue,
                email: emailValue,
                message: messageValue,
            };

            console.log('Data to be sent:', data);

            try {

                await fetch("/api/contact", {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                setName('');
                setEmail('');
                setMessage('');

                setSuccessMessage('Message sent successfully!');
                setTimeout(() => {
                    setSuccessMessage('');
                }, 5000);
                e.target.reset();
                setIsLoading(false);
            } catch (err) {
                console.log(err);
                setIsLoading(false);
            }
        } else{
            return;
        }


    };

    return (
        <div>
            <div className="absolute inset-0 z-5 bg-gradient-to-b from-[#250024] to-transparent h-[6%]" />
            <div className="inset-0 z-40 flex justify-between items-center">
                <div className="h-full w-screen py-20 px-10 md:px-16">
                    <div className="absolute top-0 left-0 right-0 z-30 bg-gradient-to-b from-[#250024] to-transparent h-[10%]" />

                    <Image
                        src="/contactbg.png"
                        alt="contact background"
                        className="relative z-0"
                        fill
                        sizes="100vw"
                        style={{
                            objectFit: "cover",
                            objectPosition: "center"
                        }} />

                    <div className="absolute inset-0 z-10 bg-gradient-to-b md:bg-gradient-to-r from-[#250024]/75 md:from-[#250024] to-transparent"></div>

                    <Image
                        src="/contactfg.png"
                        alt="contact foreground"
                        className="hidden md:flex relative z-30 pt-[150%] sm:pt-[75%] md:pt-0 object-right scale-100"
                        fill
                        sizes="100vw"
                        style={{
                            pointerEvents: "none",
                            objectFit: "cover"
                        }} />

                    <div className="relative flex flex-col md:flex-row z-20">
                        <div className="md:w-1/2 pr-0 md:px-12 py-20">
                            <h1 className="mb-4 sm:text-4xl">CONTACT US</h1>
                            <div className="text-[#f8e3ea] text-xs mb-4 md:text-sm md:mb-8">
                                <span className="font-dmserifdisplay">
                                    We invite you to join us on this journey of empathy and understanding
                                </span>
                                <span className="font-lexendlight">
                                    . Connect with us to share your stories, memories, and experiences. Let us know how essential workers have touched your life and how we can collectively
                                    show appreciation for their tireless efforts. Together, we can create a more inclusive and compassionate
                                    society, cherishing the invaluable contributions of essential workers.
                                </span>
                            </div>
                            <div className="md:flex md:justify-between items-start">
                                <div className="flex flex-col justify-between">
                                    <div className="flex flex-wrap items-center">
                                        <a href="#" className="mr-2 hover:scale-105 transition-colors ease-out duration-500">
                                            <FaTiktok size={25} />
                                        </a>
                                        <a href="#" className="mx-2 hover:scale-105 transition-colors ease-out duration-500">
                                            <AiOutlineInstagram size={25} />
                                        </a>
                                        <a href="#" className="mx-2 hover:scale-105 transition-colors ease-out duration-500">
                                            <FaPinterest size={25} />
                                        </a>
                                        <a href="#" className="mx-2 hover:scale-105 transition-colors ease-out duration-500">
                                            <AiOutlineFacebook size={25} />
                                        </a>
                                        <a href="#" className="mx-2 hover:scale-105 transition-colors ease-out duration-500">
                                            <AiOutlineTwitter size={25} />
                                        </a>
                                        <a href="#" className="ml-2 hover:scale-105 transition-colors ease-out duration-500">
                                            <AiOutlineMail size={25} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="md:w-[50%] h-[50%] bg-gradient-to-l from-[#ffd7e4] to-[#ffc8d5] rounded-xl overflow-y-auto">
                            <div className="h-full py-8 px-8 md:px-12">
                                <form className="mb-8" onSubmit={handleSubmit}>

                                    <h3 className="text-md md:text-2xl font-bold text-[#9c0137] mb-2 font-lexendbold">GET IN TOUCH</h3>

                                    <div className="mb-4">
                                        <div className='flex'>
                                            <label className="text-[#b53964] text-xs md:text-sm font-lexendbold mb-1">Name</label>
                                            {nameError && <p className="text-[#b53964] font-lexendbold text-sm ml-1 mr-auto">{nameError}</p>}
                                        </div>
                                        <input
                                            type="text"
                                            name='name'
                                            className={`bg-gradient-to-r from-[#db396f] to-[#db5b7b] text-xs md:text-sm rounded-xl w-full py-2 px-4 text-[#ffeaf4] font-lexend focus:outline-none focus:bg-[#ff67b5] transition ease-out duration-500 placeholder-[#ffedf6] placeholder-opacity-50 ${(nameError) ? 'border-2 border-purple-700 animate-shake' : ''
                                                }`}
                                            placeholder="Your name..."
                                            value={name}
                                            onChange={handleNameChange}
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <div className='flex'>
                                            <label className="text-[#b53964] text-xs md:text-sm font-lexendbold mb-1">Email</label>
                                            {emailError && <p className="text-[#b53964] font-lexendbold text-sm ml-1 mr-auto">{emailError}</p>}
                                        </div>
                                        <input
                                            type="email"
                                            name='email'
                                            className={`bg-gradient-to-r from-[#db396f] to-[#db5b7b] text-xs md:text-sm rounded-xl w-full py-2 px-4 text-[#ffeaf4] font-lexend focus:outline-none focus:bg-[#ff67b5] transition ease-out duration-500 placeholder-[#ffedf6] placeholder-opacity-50 ${(emailError) ? 'border-2 border-purple-700 animate-shake' : ''
                                                }`}
                                            placeholder="Your email address..."
                                            value={email}
                                            onChange={handleEmailChange}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <div className='flex'>
                                            <label className="text-[#b53964] text-xs md:text-sm font-lexendbold mb-1">Message</label>
                                            {messageError && <p className="text-[#b53964] font-lexendbold text-sm ml-1 mr-auto">{messageError}</p>}
                                        </div>
                                        <textarea
                                            name='message'
                                            className={`bg-gradient-to-r from-[#db396f] to-[#db5b7b] text-xs md:text-sm rounded-xl w-full py-2 px-4 text-[#ffeaf4] font-lexend focus:outline-none focus:bg-[#ff67b5] transition ease-out duration-500 placeholder-[#ffedf6] placeholder-opacity-50 ${(messageError) ? 'border-2 border-purple-700 animate-shake' : ''
                                                }`}
                                            placeholder="Your message."
                                            rows={4}
                                            value={message}
                                            onChange={handleMessageChange}
                                        ></textarea>
                                    </div>
                                    <div className="text-green-800 text-xs font-lexend mb-4">
                                        {successMessage && <p>{successMessage}</p>}
                                    </div>
                                    <button
                                        className={`text-[#f8e3ea] bg-rose-600 hover:bg-blue-600 transition ease-out duration-500 font-lexendbold text-sm list-none bg-gradient-to-r from-rose-400/50 to-blue-400/50 py-2 px-8 rounded ${isLoading ? 'cursor-not-allowed' : ''
                                            }`}
                                        disabled={isLoading}
                                    >
                                        {isLoading ? 'PROCESSING' : 'SUBMIT'}
                                        {isLoading && (
                                            <svg aria-hidden="true" class="inline w-4 h-4 ml-2 mb-1 animate-spin text-[#f3afc1] fill-rose-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                            </svg>
                                        )}
                                    </button>
                                </form>
                            </div>

                        </div>

                    </div>
                    

                </div>

            </div>
        </div>
    )
}

export default Contact