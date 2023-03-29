import React, { ReactElement } from "react";
import Header from "@layout/Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
//! NEW
import { useTheme } from '@mui/material/styles';
import Slider from '@mui/material/Slider';
//! NEW

import {FaPlay} from 'react-icons/fa'
import {GiNextButton , GiPreviousButton} from 'react-icons/gi'
import {TiArrowShuffle} from 'react-icons/ti'
import {RiRepeatOneLine} from 'react-icons/ri'

const Layout = (props : any) : JSX.Element => {
     const theme = useTheme();

     theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)';

     return (  
          <main className='w-full flex flex-col items-center justify-center'>
               {/* Header */}
               <Header/>

               <main className='mt-[81px] h-auto w-full grid grid-cols-9 gap-x-6 max-w-[1600px]'>
                    {/* Menu */}
                    <Sidebar/>
                    {/* Main Content */}
                    <main className='px-6 col-span-7 text-second h-auto'>
                         {props.children}
                    </main>
               </main>

               {/* Player */}
               <section className="fixed border-2 border-secondBg bottom-0 left-0 right-0 bg-secondBlackBg z-50 flex">
                    <div className="flex gap-x-4">
                         <img className="w-[100px] h-full object-cover" src="https://cdnmrtehran.ir/media/imgtmp/640f2b0486667.jpg"/>
                         <div className="h-auto flex flex-col gap-y-3">
                              <p className='w-[148px] mt-4 truncate text-secondColor text-left font-quicksand-medium text-main'>Qabil</p>
                              <div className=' relative pl-6 cursor-pointer flex items-center justify-start h-auto'>
                                   <svg className="absolute text-second left-0 w-5 h-5 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                   </svg>
                                   <p className='w-[148px] truncate ml-2 text-secondColor text-left font-quicksand-medium text-sm underline underline-offset-2 text-second'>Reza Pishro!</p>
                              </div>
                         </div>
                    </div>
                    <div className="w-full flex flex-col justify-between mt-4">
                         <div className="w-full flex gap-x-8 items-center text-second justify-center">
                              {/* Shuffle */}
                              <button><TiArrowShuffle size={25}/></button>
                              {/* Previous */}
                              <button className="border border-secondBg hover:border-second p-3 rounded-full">
                                   <GiPreviousButton size={16}/>
                              </button>
                              {/* Play */}
                              <button className="border border-secondBg hover:border-second p-3 rounded-full">
                                   <FaPlay size={16}/>
                              </button>
                              {/* Next */}
                              <button className="border border-secondBg hover:border-second p-3 rounded-full">
                                   <GiNextButton size={16}/>
                              </button>
                              {/* RepeatOne */}
                              <button><RiRepeatOneLine size={25}/></button>
                         </div>
                         <div className="px-6 mt-2">
                              <Slider
                                   aria-label="Volume"
                                   defaultValue={0}
                                   sx={{
                                        color: theme.palette.mode === 'dark' ? '#fff' : '#FACD66',
                                        '& .MuiSlider-track': {border: 'none',},
                                        '& .MuiSlider-thumb': {
                                             width: 16,
                                             height: 16,
                                             backgroundColor: '#fff',
                                             '&:before': {
                                                  boxShadow: '0 4px 8px rgba(1,0,0,0.4)',
                                             },
                                             '&:hover, &.Mui-focusVisible, &.Mui-active': {
                                                  boxShadow: 'none',
                                             },
                                        },
                                   }}
                              />
                         </div>
                    </div>
                    <div className="flex items-center px-4 gap-x-4">
                         <button className="text-second">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                   <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                              </svg>
                         </button>
                         <div className="w-[100px]">
                              <Slider
                                   aria-label="Volume"
                                   defaultValue={0}
                                   sx={{
                                        color: theme.palette.mode === 'dark' ? '#fff' : '#FACD66',
                                        '& .MuiSlider-track': {border: 'none',},
                                        '& .MuiSlider-thumb': {
                                             width: 0,
                                             height: 0,
                                             backgroundColor: '#fff',
                                             '&:before': {
                                                  boxShadow: '0 4px 8px rgba(1,0,0,0.4)',
                                             },
                                             '&:hover, &.Mui-focusVisible, &.Mui-active': {
                                                  boxShadow: 'none',
                                             },
                                        },
                                   }}
                              />
                         </div>
                    </div>
               </section>
               <Footer/>
          </main>
     );
}
 
export default Layout;