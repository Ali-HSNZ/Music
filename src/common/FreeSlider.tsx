//! ====Swiper====>
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FreeMode , Navigation} from "swiper";
import "swiper/css/free-mode";
//! <====Swiper====
import Link from 'next/link';
import { ISliderProps } from "@type/public.types";

type TTitle = string
const FreeSlider : React.FunctionComponent<ISliderProps> = ({sliders , title}) => {
      
     return (
          <section className='mt-6'>
               <div className="flex justify-between items-center">
                    <h3 className='text-mainColor text-2xl font-quicksand-bold'>{title}</h3>
                    <span className="cursor-pointer text-secondColor underline">See More</span>
               </div>
               <Swiper 
                    className={"slider  mt-6 overflow-hidden"} 
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
                              <svg className="w-6 h-6 absolute top-3 right-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                   <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
                              </svg>
                              <img className='w-full h-[180px] rounded-md  object-cover' src={item.img}/>
                         </Link>
                         <button className='mt-2 p-2 relative pl-9 flex items-center justify-start border group border-secondBg duration-150 hover:border-yellow h-auto rounded-md border-secondColor'>
                              <svg className="absolute left-3 w-6 h-6 group-hover:text-yellow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                   <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                              </svg>
                              <p className='w-[148px] truncate ml-2 text-secondColor text-left font-quicksand-medium'>{item.title}</p>
                         </button>
                    </div>
                  </SwiperSlide>
                ))}
             </Swiper>

          </section>
     )
}
export default FreeSlider