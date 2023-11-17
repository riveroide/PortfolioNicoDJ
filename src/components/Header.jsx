import React from 'react'
import logoNico from "../assets/logoNico.png"
const Header = () => {
  return (
    <header className='bg-gray-900'>
    <div className="mx-auto max-w-screen-xl px-2 py-2 sm:px-6 sm:py-12 lg:px-4">
      <div className="sm:flex sm:items-center sm:justify-between ">
            <div className='items-center border-red-500 border-2 sm:border-0'>
            <img src={logoNico} alt="logo" className='w-28 flex justify-center'/>
            </div>
           
           
        
  
        <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
          <button
            className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 px-5 py-3 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring"
            type="button"
          >
            <span className="text-sm font-medium"> Instagram </span>
  
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </button>
  
          <button
            className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
            type="button"
          >
            Send Email
          </button>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header