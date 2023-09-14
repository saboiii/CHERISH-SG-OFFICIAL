'use client';
import React from 'react';
import { useSession, signOut } from 'next-auth/react'
import useSWR from 'swr'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineClose } from 'react-icons/ai';


const Dashboard = () => {
  const session = useSession();
  const router = useRouter();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const image = e.target[2].value;
    const content = e.target[3].value;
    const date = e.target[4].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          image,
          content,
          date,
          username: session.data.user.name,
        }),
      });
      mutate();
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (err) {
      console.log(err);
    }
  };

  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  console.log(data)

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login")
  }

  if (session.status === "authenticated") {
    return (
      <div>
        <div className="relative h-[45vh] bg-[#250024] z-10 shadow-lg shadow-black/20">
          <div className='absolute bottom-0 left-0 p-10 lg:p-20 overflow-hidden w-screen'>
            <h1 className='text-5xl text-rose-200 font-lexend'>Welcome back, {session.data.user.name}.</h1>
            <p className='font-lexend text-sm text-[#7d5872]'> You can create new gallery posts and follow up on old posts here.</p>
            <div
              className="flex justify-center px-4 py-1 text-sm mt-6 border border-rose-200 rounded-full w-[20vh] hover:text-rose-300 hover:border-rose-300 transition ease-out duration-500 text-rose-200 font-lexendbold"
              onClick={() => {
                signOut();
              }}>
              LOGOUT NOW
            </div>

          </div>
          
          <div className='absolute bottom-0 overflow-hidden w-screen'>
            <Image
              src="/anshika.jpeg"
              alt="Anshika"
              width={180}
              height={180}
              className="hidden md:flex ml-auto m-12 rounded-full object-cover"
            />
          </div>

        </div>

        <div className='relative min-h-screen w-screen bg-[#e3d1d8] py-4 px-8 overflow-hidden'>
          <div className='grid lg:grid-cols-3 gap-8 p-8 h-full'>

            <div className='lg:col-span-2 col-span-1 flex justify-between w-full bg-[#fdf3f3] rounded-2xl md:h-full'>
              <div className='w-full flex flex-col p-8'>
                <h1 className='text-2xl text-[#250024]'>NEW DRAFT</h1>
                <div className='border-t-2 w-full border-[#cbb3bc]' />
                <form onSubmit={handleSubmit}>
                  <h1 className='text-[#876686] text-lg font-lexendbold mt-4'> TITLE</h1>
                  <input type='text' placeholder='Enter title.' className='font-lexend focus:outline-none text-[#250024] w-full placeholder:text-[#a085a0] px-4 py-2 rounded-lg bg-[#e3d1d8] focus:bg-[#d4c0c9] transition ease-out duration-200'>
                  </input>
                  <h1 className='text-[#876686] text-lg font-lexendbold mt-4'> DESCRIPTION</h1>
                  <input type='text' placeholder='Enter a short description.' className='font-lexend focus:outline-none text-[#250024] w-full placeholder:text-[#a085a0] px-4 py-2 rounded-lg bg-[#e3d1d8] focus:bg-[#d4c0c9] transition ease-out duration-200'>
                  </input>
                  <h1 className='text-[#876686] text-lg font-lexendbold mt-4'> IMAGE</h1>
                  <input type='text' placeholder='Add link to image.' className='font-lexend focus:outline-none text-[#250024] w-full placeholder:text-[#a085a0] px-4 py-2 rounded-lg bg-[#e3d1d8] focus:bg-[#d4c0c9] transition ease-out duration-200'>
                  </input>
                  <h1 className='text-[#876686] text-lg font-lexendbold mt-4'> CONTENT</h1>
                  <textarea placeholder='Enter the content.' rows={4} className='font-lexend flex focus:outline-none text-[#250024] w-full placeholder:text-[#a085a0] px-4 py-2 h-20 rounded-lg bg-[#e3d1d8] focus:bg-[#d4c0c9] transition ease-out duration-200'>
                  </textarea>
                  <h1 className='text-[#876686] text-lg font-lexendbold mt-4'> DATE</h1>
                  <input type='text' placeholder='Enter the date' className='font-lexend flex focus:outline-none text-[#250024] w-full placeholder:text-[#a085a0] px-4 py-2 rounded-lg bg-[#e3d1d8] focus:bg-[#d4c0c9] transition ease-out duration-200'>
                  </input>
                  <button className="cursor-pointer text-[#f8e3ea] bg-rose-600 hover:bg-blue-600 transition ease-out duration-500 font-lexendbold text-sm list-none bg-gradient-to-r from-rose-400/50 to-blue-400/50 py-2 px-2 sm:px-4 md:px-8 mt-4 rounded">
                    Save
                  </button>
                </form>
              </div>
            </div>

            <div className='col-span-1 relative overflow-scroll w-full bg-[#fdf3f3] rounded-2xl md:h-full'>
              <div className='w-full flex px-8 pt-8'>
                <h1 className='text-2xl text-[#250024]'>ALL POSTS</h1>
              </div>
              <ul>
                {isLoading
                  ? "loading"
                  : data?.map((post) => (
                    <Link href={`/gallery/${post._id}`}>
                      <li className='bg-[#e3d1d8] hover:scale-[101%] transition ease-out duration-200 mx-4 mb-4 rounded-lg p-4 flex items-center cursor-pointer' key={post._id}>
                        <Image
                          src={post.image}
                          alt="Thumbnail for post."
                          width={100}
                          height={100}
                          className="object-cover h-24 w-24 rounded-lg"
                        />
                        <div className='w-[50%]'>
                          <h1 className='text-lg text-[#826d75] mx-3 mb-0 uppercase'> {post.title} </h1>
                          <p className='text-xs text-[#b0929e] mx-3 font-lexend truncate'> {post.desc} </p>
                        </div>
                        <span className='ml-auto z-10' onClick={() => handleDelete(post._id)}>
                          <AiOutlineClose className='text-[#3d273c] hover:text-[#ac8aab]' />
                        </span>
                      </li>
                    </Link>

                  ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard