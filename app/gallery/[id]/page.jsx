import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation"

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound()
  }

  return res.json();
}

export async function generateMetadata({params}){
  const post = await getData(params.id)
  return{
    title: post.title,
    description: post.desc,
  };
}

const GalleryPost = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#250024] to-transparent text-white">
      <div className="relative h-[75vh] overflow-hidden">
        <Image
          src="/gallerydummypic.jpeg"
          alt="Gallery Image"
          width={500}
          height={500}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#250024] to-transparent" />

        <div className="absolute bottom-0 left-0 mx-24 z-10">
          <h1 className="text-6xl font-dmserifdisplay mb-4">{data.title}</h1>
          <p className="text-lg">Published on {data.date}</p>
          <hr className="border-t border-gray-300 my-8 w-48" />
        </div>
      </div>


      <div className="container mx-auto py-8 px-2">
        <div className="px-4 rose prose-sm font-lexendlight text-white text-left">
          <p>
            {data.content}
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
            adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore
            et dolore magnam aliquam quaerat voluptatem.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
            adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore
            et dolore magnam aliquam quaerat voluptatem.
          </p>

        </div>
      </div>
    </div>
  )
}

export default GalleryPost 