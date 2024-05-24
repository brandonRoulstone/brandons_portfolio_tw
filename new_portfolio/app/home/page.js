"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const homePage = () => {
  return (
    <div className="hero-content flex-col lg:flex-row-reverse">
    <Image src="https://cdn-images.imagevenue.com/dd/3f/2d/ME18C3BP_o.jpg" width="550" height="550" className="rounded-lg min-[100vw] shadow-2xl lg:max-w-lg" />
    <div>
      <h1 className="text-3xl font-bold text-white lg:text-6xl">Lorem ipsum <span className="text-indigo-700">dolor!</span> </h1>
      <p className="py-3 lg:py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
  )
}

export default homePage
