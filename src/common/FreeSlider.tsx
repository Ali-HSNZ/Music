//! ====Swiper====>
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FreeMode , Navigation} from "swiper";
import "swiper/css/free-mode";
//! <====Swiper====
import Link from 'next/link';
import { ETypes, ISliderProps } from "@type/public.types";
import {BsCollectionPlay} from 'react-icons/bs'

const FreeSlider : React.FunctionComponent<ISliderProps> = ({sliders , title , type}) => {
     return (
          <section className='mt-6'>
               <div className="flex justify-between items-center">
                    <h3 className='text-mainColor text-2xl font-quicksand-bold text-main'>{title}</h3>
                    <span className="cursor-pointer text-secondColor underline hover:no-underline text-second font-quicksand-medium">See More</span>
               </div>
               <Swiper 
                    className={"slider_freeMode  mt-6"} 
                    freeMode={true} 
                    navigation={true} 
                    spaceBetween={16} 
                    modules={[ Navigation , FreeMode]}
                    slidesPerView={'auto'}
               >
                {sliders.map((item,index) => (
                  <SwiperSlide key={index}>
                    <div className="relative max-w-[200px] min-w-[200px]">
                         <Link href={"#"} className='w-full relative'>
                              <img className='w-full h-[180px] rounded-md  object-cover' src={item.img}/>
                         </Link>

                         <Link href={'/singer'} className='my-3 w-fit relative pl-6 flex items-center justify-start'>
                              <svg className="absolute text-second left-0 w-6 h-6 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                   <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                              </svg>
                              <p className='w-full text-second underline underline-offset-2 hover:no-underline cursor-pointer truncate ml-2 text-secondColor text-left font-quicksand-medium'>Shayea</p>
                         </Link>

                         {type !== ETypes.SINGER  && (
                              <Link href={'/song'} className='bg-secondBg bg-opacity-25 mt-2 p-2 relative pl-9 flex items-center justify-start border group border-secondBg duration-150 hover:border-second h-auto rounded-md border-secondColor'>
                                   {type === ETypes.SONG || type === ETypes.POTCAST ? (
                                        <svg className="absolute text-second left-3 w-6 h-6 "  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                             <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
                                        </svg>
                                   ) : type === ETypes.PLAYLIST ? (
                                        <BsCollectionPlay className="absolute text-second left-3 w-6 h-6 "/>
                                        ) : <></>}
                                   <p className='w-[148px] text-main truncate ml-2 text-secondColor text-left font-quicksand-medium'>Injaneb</p>
                              </Link>
                         )}
                    </div>
                  </SwiperSlide>
                ))}
             </Swiper>

          </section>
     )
}
export default FreeSlider