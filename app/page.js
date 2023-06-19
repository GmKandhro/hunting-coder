"use client"  
import Navbar from './components/Navbar';
import Link from 'next/link';
import { useEffect,useState } from 'react';


import { Client, Databases, ID } from "appwrite";
import Slider from './components/Slider';

const client = new Client();
client
.setEndpoint("https://cloud.appwrite.io/v1")
.setProject("648af04921252c69754d")

export default function Home() {

  const [blogpost, setBlogpost] = useState([])
  useEffect(() => {
    const databases = new Databases(client);

    let promise = databases.listDocuments(
        "648af2ae82457a9f8ffa",  "648af2b851b0ce934ef9",
    );
    
    promise.then(function (response) {
        console.log(response);
        setBlogpost(response.documents)
    }, function (error) {
        console.log(error);
    });
  }, [])
  return (
    <>
    <Slider />
      <div className="grid grid-cols-1 md:grid-cols-2 mt-[390px] lg:grid-cols-3 gap-4 px-20">
      {blogpost.map((post) => (
        <div key={post.title} className="bg-white p-4 rounded-md shadow-md">
          <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-t-md" />
          <h2 className="text-xl font-semibold mt-4">{post.title}</h2>
          <p className="mt-2">{post.metadesc}...</p>
          <Link href={`/blog/${post.slug}`} className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Read More
          </Link>
        </div>

      ))}
    </div>
    </>
  )
}
