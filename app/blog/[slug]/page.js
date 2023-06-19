"use client"
import React from 'react';
import { useEffect,useState } from 'react';


import { Client, Databases, ID, Query } from "appwrite";

const client = new Client();
client
.setEndpoint("https://cloud.appwrite.io/v1")
.setProject("648af04921252c69754d")


const BlogPage = ({params}) => {
  const { slug } = params;
  const [blogpost, setBlogpost] = useState()
  useEffect(() => {
    const databases = new Databases(client);

    let promise = databases.listDocuments(
        "648af2ae82457a9f8ffa",  "648af2b851b0ce934ef9",
        [
          Query.equal('slug', slug)
      ]
    );
    
    promise.then(function (response) {
        console.log(response);
        setBlogpost(response.documents[0])
    }, function (error) {
        console.log(error);
    });
  }, [])
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div className="mb-4">
      <img
        src={blogpost?.image}
        alt="Blog Image"
        width={800}
        height={500}
        objectFit="cover"
      />
    </div>
    <h1 className="text-3xl font-bold mb-4">{blogpost?.title}</h1>
    <div className="prose prose-lg">
      {/* Render the blog content */}
      {blogpost?.content}
    </div>
  </div>
  );
};

export default BlogPage;
