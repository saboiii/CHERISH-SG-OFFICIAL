'use client';
import { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import Contact from '@/components/contact/Contact'


export default function Home() {
  const backgroundRef = useRef(null);
  const midgroundRef = useRef(null);
  const titleRef = useRef(null);
  const prevScrollY = useRef(0);

  const [scrollValue, setScrollValue] = useState(0);
  

  useEffect(() => {

    const handleScroll = () => {
      const title = titleRef.current;
      const scrollValue = window.scrollY;
      const offset = scrollValue * 0.6;

      backgroundRef.current.style.transform = `translateY(${-scrollValue * 0.25}px)`;
      midgroundRef.current.style.transform = `translateY(${offset}px)`;
      titleRef.current.style.transform = `translateY(${offset}px)`;


      if (scrollValue > prevScrollY) {
        title.style.opacity = `${1 - scrollValue / 50}`;
      } else {
        title.style.opacity = `${1 - scrollValue / 100}`;
      }

      prevScrollY.current = scrollValue;
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <div className="bg-[#250024]">
      {/*main section*/}
      <div className="relative h-screen bg-[#250024]">
        <div className="fixed inset-0 z-0 background" ref={backgroundRef}>
          <Image
            src="/background.png"
            alt="background"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
              objectPosition: "center"
            }} />
        </div>


        <div className="absolute inset-0 z-10 overflow-hidden midground" ref={midgroundRef}>
          <div className="relative w-full h-full flex justify-center items-center">
            <div className="mx-[30%] scale-[1000%] translate-x-72 xs:sm:scale-[700%] sm:scale-[600%] md:scale-[200%] md:mx-0 md:translate-x-0 lg:scale-[150%] xl:scale-[125%]">
              <Image
                src="/midground.png"
                alt="midground"
                width={1920}
                height={1080}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "contain",
                  objectPosition: "center"
                }} />
            </div>
          </div>
        </div>

        <div className="absolute inset-0 z-20">
          <div className="h-full flex justify-center items-center">
            <Image
              src="/foreground.png"
              alt="foreground"
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
                objectPosition: "center"
              }} />
          </div>
          <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#250024]/30 to-transparent" />
        </div>

        <div className="absolute inset-0 z-30 flex title justify-center items-start" ref={titleRef}>
          <Image
            src="/title.png"
            alt="title"
            width={800}
            height={500}
            className="py-24 md:py-0 lg:py-0"
            style={{
              opacity: scrollValue > 100 ? 0 : 1,
              maxWidth: "100%",
              height: "auto",
              objectFit: "scale-down",
              objectPosition: "center"
            }} />
          <div className="absolute inset-0 z-30 title flex justify-center py-24 px-[30%] xs:px-[15%] sm:px-28 items-start mt-[40%] md:mt-[25%] md:px-[30%] lg:mt-[20%] lg:px-[30%] xl:mt-[16%] xl:px-[30%] ">
            <div className="text-xs md:text-sm text-[#f8e3ea] font-dmserifdisplay text-center">
            &#34;After its founding, Singapore became a melting pot of cultures, with thousands of immigrants
              from diverse backgrounds. Together, they laid the foundation for a thriving cosmopolitan port
              city...&#34;
            </div>
          </div>
        </div>
      </div>

      {/*about section*/}
      <div className="relative h-screen bg-[#250024]">
        <div className="absolute inset-0 z-10">
          <Image
            src="/aboutbg.png"
            alt="background"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
              objectPosition: "center"
            }} />
        </div>

        <div className="absolute inset-0 z-40 flex justify-start items-center mx-0 ">
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#250024] to-transparent h-[15%]" />
          <div className="h-screen w-screen py-40 p-12 sm:px-32 md:py-64 md:pr-[50%] lg:pl-[15%] lg:pr-[55%] xl:pl-[22%] bg-gradient-to-r from-[#250024] to-transparent">
            <h1>ABOUT US</h1>
            <p className="text-[#f8e3ea] mb-4">
              <span className="font-dmserifdisplay text-sm">CHERISH is a student-initiated passion project </span>
              <span className="font-lexendlight text-xs">
                that aims to raise awareness about the unaddressed societal issues
                faced by essential workers and promote empathy and understanding among the general public. By sharing their stories
                and experiences, we believe we can help combat existing stereotypes and prejudices, inspiring people to treat these
                workers with the respect and dignity they deserve.
              </span>
            </p>
            <div className="cursor-pointer">
              <Link href="/about" className=" text-[#f8e3ea] bg-rose-600 hover:bg-blue-600 transition ease-out duration-500 font-lexendbold text-sm list-none bg-gradient-to-r from-rose-400/50 to-blue-400/50 py-2 px-4 rounded">
                READ MORE
              </Link>
            </div>
          </div>

        </div>


        <div className="absolute inset-0 z-20 overflow-hidden">
          <div className="relative w-full h-full flex justify-center items-center">
            <div className="ml-[-10%] scale-[180%] sm:scale-[150%] md:scale-[120%] lg:scale-[100%] xl:scale-[80%]">
              <Image
                src="/aboutboat.png"
                alt="midground"
                width={1920}
                height={1080}
                className=""
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "contain",
                  objectPosition: "center"
                }} />
            </div>
          </div>
        </div>

        <div className="absolute inset-0 z-30">
          <Image
            src="/aboutfg.png"
            alt="about foreground"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
              objectPosition: "center"
            }} />
        </div>
      </div>

      {/*quote section*/}
      <div className="z-50 relative h-20 bg-[#250024]">
        <div className="inset-0 text-center px-[10%] bg-[#250024]">
          <div className="text-[#f8e3ea] text-md font-dmserifdisplay mb-2 italic">
          &#34;Singapore is a crossroads where every nation meets. Fifty shipping lines call there regularly...
            it harbours an immeasurable quantity of native craft of all sizes and descriptions.&#34;
          </div>
          <div className="text-[#776787] text-[10px] font-lexendlight pb-4">John H. MacCallum Scott, author of Eastern Journey (1939)</div>
        </div>
      </div>

      {/*additional section*/}
      <div className="z-40 relative h-20 md:h-8 bg-[#250024]" />

      {/* gallery section laptop */}
      <div className="z-40 relative h-screen flex bg-[#250024]">

        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#250024] to-transparent h-[32%]" />

        <div className="flex justify-center items-center group">
          <div className="lg:hidden group-hover:block z-[60] absolute top-[30%] right-[50%] translate-x-[50%] translate-y-[50%] md:px-20">
            <h1 className="text-5xl sm:text-8xl text-center">GALLERY</h1>
            <p className="text-white text-xs sm:text-sm text-center font-dmserifdisplay italic">
            &#34;Uncover new narratives at our special human library event,
              where the extraordinary efforts of essential workers are celebrated...&#34;
            </p>
            <div className="py-4 absolute top-[85%] right-[50%] translate-x-[50%] translate-y-[50%]">
              <Link href="/gallery" className="cursor-pointer text-[#f8e3ea] bg-rose-600 hover:bg-blue-600 transition ease-out duration-500 font-lexendbold text-sm list-none bg-gradient-to-r from-rose-400/50 to-blue-400/50 py-2 px-2 sm:px-4 md:px-8 rounded">
                READ MORE
              </Link>
            </div>

            <Link href="/">
            </Link>
          </div>
          <div className="h-full opacity-40 lg:opacity-100 group-hover:opacity-[40%] transition ease-out duration-500">
            <Image
              src="/gallerybg.gif"
              alt="Gallery Background"
              className="z-1 object-cover object-[85%] lg:object-contain lg:object-center"
              fill
              sizes="100vw" />

            <div className="z-3">
              <Image
                src="/hands.gif"
                alt="newsimage"
                className="z-3 object-cover object-[85%] lg:object-contain lg:object-center"
                fill
                sizes="100vw" />
              <Image
                src="/bottomgradient.png"
                alt="/"
                className="z-4 object-cover object-[85%] lg:object-contain lg:object-center"
                fill
                sizes="100vw" />
              <div className="absolute bottom-0 left-0 right-0 z-30 bg-gradient-to-t from-[#250024] to-transparent h-[10%]" />

            </div>


          </div>
        </div>
      </div>

      {/*quote section*/}
      <div className="z-50 relative h-20 bg-[#250024] py-4">
        <div className="inset-0 text-center px-[10%] bg-[#250024]">
          <div className="text-[#f8e3ea] xs:text-sm text-md font-dmserifdisplay mb-2 italic">
          &#34;Singapore is a crossroads where every nation meets. Fifty shipping lines call there regularly...
            it harbours an immeasurable quantity of native craft of all sizes and descriptions.&#34;
          </div>
          <div className="text-[#776787] text-[10px] font-lexendlight mb-24">John H. MacCallum Scott, author of Eastern Journey (1939)</div>
        </div>
      </div>

      {/*additional section*/}
      <div className="z-40 relative h-20 md:h-8 bg-[#250024]" />

      {/* contact section */}
      <div className="relative min-h-screen bg-[#250024]">
        <Contact/>
        <div className="absolute bottom-0 left-0 right-0 z-30 bg-gradient-to-t from-[#10000f] to-transparent h-[10%]" />
      </div>

    </div>
  );
}
