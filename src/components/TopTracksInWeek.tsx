//! ====Swiper====>
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FreeMode , Navigation} from "swiper";
import "swiper/css/free-mode";
//! <====Swiper====

const TopWeekMusics = () => {
     return (  
          <section className='w-full overflow-hidden mt-8'>
                    <h3 className='text-mainColor text-2xl font-quicksand-bold'>Top Tracks In Week.</h3>

                    <section className="w-full">
                         <Swiper 
                              className={"slider_freeMode w-full mt-6 overflow-hidden"} 
                              freeMode={true} 
                              navigation={true} 
                              spaceBetween={0} 
                              modules={[ Navigation , FreeMode]}
                              slidesPerView={'auto'}
                         >
                              {["Su","Mo","Tu","We","Th","Fr","Sa"].map((item,index)=> (
                                   <SwiperSlide>
                                        <span className="font-quicksand-medium">{item}</span>
                                        <hr className="border-second mt-2"/>
                                        <div className="px-2 mt-4">
                                             <article className={`gap-x-4 full w-[200px] flex flex-col  border border-secondBg rounded-md p-2`}>
                                                  <div className="w-full flex items-center">
                                                       <img className="w-full h-[80px] object-cover rounded-lg" 
                                                            src={index === 0 ? "https://cdnmrtehran.ir/media/imgtmp/640f2b0486667.jpg" :
                                                                 index === 1 ? "https://cdnmrtehran.ir/media/imgtmp/6416fdfb59d02.jpg" :
                                                                 index === 2 ? "https://cdnmrtehran.ir/media/imgtmp/641db0fadd11c.jpg" :
                                                                 index === 3 ? "https://cdnmrtehran.ir/media/imgtmp/6415f59163d4d.jpg" :
                                                                 index === 4 ? "https://cdnmrtehran.ir/media/imgtmp/6416fdfb59d02.jpg" :
                                                                 index === 5 ? "https://cdnmrtehran.ir/media/imgtmp/641db0fadd11c.jpg" :
                                                                 index === 6 ? "https://cdnmrtehran.ir/media/imgtmp/6415f59163d4d.jpg" :
                                                                 "https://cdnmrtehran.ir/media/imgtmp/640f2b0486667.jpg" 
                                                       }
                                                            />
                                                  </div>
                                                  <div className='my-3 w-fit relative pl-6 flex items-center justify-start'>
                                                       <svg className="absolute text-second left-0 w-6 h-6 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                                       </svg>
                                                       <p className='w-full underline underline-offset-2 hover:no-underline cursor-pointer truncate ml-2 text-secondColor text-left font-quicksand-medium'>Reza Pishro</p>
                                                  </div>
                                                       <button className=' p-2 w-full relative pl-11 flex items-center justify-start border group border-secondBg duration-150 hover:border-second h-auto rounded-md '>
                                                            <svg className="absolute text-second left-3 w-6 h-6 "  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                                                 <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
                                                            </svg>
                                                            <p className="truncate font-quicksand-regular">{item} - gharare biad miad!</p>
                                                       </button>
                                             </article>
                                        </div>
                              </SwiperSlide>
                              ))}
                         </Swiper>
                    </section>
               

          </section>
     );
}
 
export default TopWeekMusics;