import React from 'react'

const Form = () => {
    return (
        <form className="text-center text-md my-10">
         <div class="md:p-8">
        <div class="bg-white flex items-center rounded-full shadow-xl">
            <input class="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none " id="search" type="text" placeholder="Search"/>
            
            <div class="p-4">
            <button class="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
            🔍
            </button>
            </div>
            </div>
        </div>
        </form>
    )
}

export default Form
