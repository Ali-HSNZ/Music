import logo from '@images/logo.png'
import Link from "next/link";
import React, { ReactElement } from "react";
// Icons
import { BsCollectionPlayFill } from 'react-icons/bs';
import { MdRadio } from 'react-icons/md';
import { RiUser3Fill } from 'react-icons/ri';
import { IoLogOut } from 'react-icons/io5';

const Layout = (props : ReactElement | any) : JSX.Element => {
     
     return (  
          <main className='w-full flex flex-col items-center'>
               
               {/* Header */}
               <header className='px-6 pt-6 w-full flex items-center max-w-[1600px]'>
                    <nav className='p-2 bg-secondBg rounded-full'>
                         <Link className="w-2" href={"/"}>
                             
                              <img src={logo.src} className=""/>
                         </Link>
                    </nav>
                    <section className='w-full ml-6 relative'>
                         <input type={'text'} placeholder="search..." className={'font-quicksand-light bg-transparent  focus:outline-none rounded-lg placeholder:text-second text-main pl-8 py-2 w-1/2'}/>
                         <svg className="w-5 h-5 text-second absolute left-0 top-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                              <path strokeLinecap="round" strokeLinejoin= "round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                         </svg>
                    </section>
               </header>
               
               {/* Main Content */}
               <main className='pl-6 mt-6 w-full flex items-start justify-start max-w-[1600px]'>
                    {/* Menu */}
                    <aside className='sticky top-6 h-screen'>
                         <div className="bg-black p-3 py-5 rounded-full">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                                   <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                              </svg>
                              <div className='mt-6 cursor-pointer'>
                                   <BsCollectionPlayFill className='text-second h-6 w-6'/>
                              </div>
                              <div className='mt-6 cursor-pointer'>
                                   <MdRadio className='text-second h-6 w-6'/>
                              </div>
                              <div className='mt-6 cursor-pointer'>
                                   <BsCollectionPlayFill className='text-second h-6 w-6'/>
                              </div>
                         </div>
                         <div className="bg-black mt-6 p-3 py-5 rounded-full">
                              <div className='cursor-pointer'>
                                   <RiUser3Fill className='text-second h-6 w-6'/>
                              </div>
                              <div className='mt-6 cursor-pointer'>
                                   <IoLogOut className='text-second h-6 w-6'/>
                              </div>
                         </div>
                    </aside>
                    {/* Main Content */}
                    <main className='w-full px-6  text-second h-[2000px]'>
                         {props.children}
                    </main>
               </main>

          </main>
     );
}
 
export default Layout;