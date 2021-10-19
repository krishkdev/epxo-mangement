import React from 'react'
import asset from '../assets/photo.jpg';

const Stall = (props) => {
    return (
        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl md:mt-16 mt-6 ml-4 mr-4 sm:m-auto">
        <div class="md:flex">
          <div class="md:flex-shrink-0">
            <img class="h-48 w-full object-cover md:h-full md:w-48" src={asset} alt="Man looking at item at a store" />
          </div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">stall no {props.id}</div>
            <div class="tracking-wide text-sm text-indigo-500 font-semibold"><i>By: {props.author}</i></div>
            <a href="/" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline mt-2">Stall name: {props.name}</a>
            <p class="mt-2 text-gray-500">{props.content}</p>
          </div>
        </div>
      </div>
    )
}

export default Stall
