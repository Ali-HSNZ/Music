//! ====Swiper====>
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FreeMode , Navigation} from "swiper";
import "swiper/css/free-mode";
//! <====Swiper====

const MainSlider = () => {
     return (
          <section className='w-full  gap-x-6 '>
               {/* Promote Artist */}
               <Swiper 
                    className={"slider  mt-6 overflow-hidden"} 
                    freeMode={false} 
                    navigation={true} 
                    spaceBetween={16} 
                    modules={[ Navigation , ]}
                    slidesPerView={'auto'}
               >
                    {[
                         "https://cdnmrtehran.ir/media/imgtmp/640f2b0486667.jpg",
                         "https://cdnmrtehran.ir/media/imgtmp/6416fdfb59d02.jpg",
                         "https://cdnmrtehran.ir/media/imgtmp/641db0fadd11c.jpg",
                         "https://cdnmrtehran.ir/media/imgtmp/6415f59163d4d.jpg"].map((item,indx)=>(
                         <SwiperSlide key={indx}>
                              <div className="w-full relative">
                                   <svg className="w-6 h-6 absolute top-4 right-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
                                   </svg>
                                   <img className="cursor-pointer rounded-md w-full h-[250px] object-cover" src={item} />                                   
                              </div>
                         </SwiperSlide>
                    ))}

               </Swiper>
          </section>
     )
}
export default MainSlider