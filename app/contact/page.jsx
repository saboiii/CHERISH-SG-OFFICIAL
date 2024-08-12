
import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import Contact from '@/components/contact/Contact'

export const metadata = {
  title: 'Cherish SG | Contacts',
  description: 'Reach out to us.',
}

const ContactPage = () => {
  return (
    <div className="bg-[#250024] text-white">
      <div className="relative min-h-screen pt-4">
        <Contact/>
        <div className="absolute bottom-0 left-0 right-0 z-30 bg-gradient-to-t from-[#250024] to-transparent h-[10%]" />
      </div>

      <div className="pt-10 pb-20 text-white">
        <div className="container mx-auto md:p-12">
          <h2 className='flex items-center justify-center mb-4 font-partsold'>FAQ</h2>
          <h1 className="text-center text-3xl mb-8">FREQUENTLY ASKED QUESTIONS</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg bg-gradient-to-r from-[#321931] to-[#3f1f3d] flex items-start space-x-4">
              <div className="w-[20px] h-[20px] p-[15px] flex items-center justify-center rounded-full bg-[#240c23] text-white font-bold text-sm">
                1
              </div>
              <div>
                <h3 className="text-white font-lexendbold text-sm">Are you a gummy bear?</h3>
                <p className="text-gray-300 font-lexendlight text-xs">
                  imagummybear imagummybear imagummybear imagummybear imagummybear
                  imagummybear imagummybear imagummybear imagummybear imagummybear
                </p>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-gradient-to-r from-[#321931] to-[#3f1f3d] flex items-start space-x-4">
              <div className="w-[20px] h-[20px] p-[15px] flex items-center justify-center rounded-full bg-[#240c23] text-white font-bold text-sm">
                2
              </div>
              <div>
                <h3 className="text-white font-lexendbold text-sm">Are you a gummy bear?</h3>
                <p className="text-gray-300 font-lexendlight text-xs">
                  imagummybear imagummybear imagummybear imagummybear imagummybear
                  imagummybear imagummybear imagummybear imagummybear imagummybear
                </p>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-gradient-to-r from-[#321931] to-[#3f1f3d] flex items-start space-x-4">
              <div className="w-[20px] h-[20px] p-[15px] flex items-center justify-center rounded-full bg-[#240c23] text-white font-bold text-sm">
                3
              </div>
              <div>
                <h3 className="text-white font-lexendbold text-sm">Are you a gummy bear?</h3>
                <p className="text-gray-300 font-lexendlight text-xs">
                  imagummybear imagummybear imagummybear imagummybear imagummybear
                  imagummybear imagummybear imagummybear imagummybear imagummybear
                </p>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-gradient-to-r from-[#321931] to-[#3f1f3d] flex items-start space-x-4">
              <div className="w-[20px] h-[20px] p-[15px] flex items-center justify-center rounded-full bg-[#240c23] text-white font-bold text-sm">
                4
              </div>
              <div>
                <h3 className="text-white font-lexendbold text-sm">Are you a gummy bear?</h3>
                <p className="text-gray-300 font-lexendlight text-xs">
                  imagummybear imagummybear imagummybear imagummybear imagummybear
                  imagummybear imagummybear imagummybear imagummybear imagummybear
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#250024] to-[#3b1129] py-8 text-white shadow-lg shadow-black">
        <div className="container mx-auto flex flex-col items-center">
          <div className="flex items-center justify-center mb-4">
            <div className='justify-center flex-col'>

              <h2 className="text-md md:text-5xl font-dmserifdisplay mb-2 md:mb-4">Looking for more resources?</h2>

              <p className="text-sm md:text-md font-lexendlight mb-4">
                <span className='font-lexendlight'>Gain valuable insights and educate yourself using</span>
                <span className='font-lexend'> our special edition CHERISH package.</span>
              </p>
              

            </div>

            <Link href='#' className='mr-8 cursor-pointer'>
              <Image
                src="/saba.jpeg"
                alt="PDF Package"
                width={250}
                height={250}
                className="object-cover ml-12"
              />
            </Link>
          </div>

        </div>
      </div>


    </div >
  );
};

export default ContactPage;
