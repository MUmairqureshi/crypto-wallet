'use client'
import React, { useState } from "react";
import { Link } from "next/link";
// import '../styles/nav.css'
// import styles from '../styles/nav.css';
  function Nav() {
  const [opennave , setOpennav] = useState(false)
  const Opennavebar = ( ) => setOpennav(!opennave)
  
  return (
    // <nav classNameName={styles.nav}>
<div classNameName="       ">
    <nav className=" px-2 sm:px-2     fixed w-full z-20  bg-gray-800  left-0     ">
      <div className="container flex md:mt-0 mt-2 flex-wrap   items-center justify-between mx-auto">
        <p
          classNameName="text-5xl     text-blue-700 font-serif
"
        >
          NFT
        </p>
        <div className="flex md:order-2">
          {/* <button
            type="button"
            className="text-white justify-center  border-blue-700 border   p-2 lg:px-4 rounded-full   font-medium   text-sm       "
          >
            Get started
          </button> */}
          {/* <button onClick={Opennavebar}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6 text-white"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button> */}
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          // id="navbar-sticky"
        >
          <ul className="flex flex-col p-3   text-white       md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium md:border-0   dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="#"
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>










      </nav>



{/* 
 

      <div classNameName={opennave ? 'mt-5 fixed md:hidden left-0  w-[60%] h-full border-r border-r-gray-200 bg-gray-800   ' : '  fixed left-[-100%]' }> 
       <ul className="   p-4            
    justify-start	 h-full   text-start content-start
           dark:border-gray-700">
            <li classNameName=" border-b left-0 justify-start item-	content-start" >
              <Link
                href="#"
                className="block py-2 pl-3 pr-4 text-white   rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                aria-current="page"
              >
                Home
              </Link>
            </li>
           
            <li classNameName=" mt-4 border-b">
              <Link
                href="#"
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </Link>
            </li>
            <li classNameName=" mt-4 border-b">
              <Link
                href="#"
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </Link>
            </li>
            <li classNameName="h-full mt-4 border-b">
              <Link
                href="#"
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </Link>
            </li>
          </ul></div> */}

</div>  
  );
}

export default Nav