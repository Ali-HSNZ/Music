//! ====Swiper====>
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FreeMode , Navigation} from "swiper";
import "swiper/css/free-mode";
//! <====Swiper====
import Link from 'next/link';

const NewMusics = () => {
     return (
          <section className='mt-6'>
               <div className="flex justify-between items-center">
                    <h3 className='text-mainColor text-2xl font-quicksand-bold'>New Musics.</h3>
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
                {[1,2,3,4,5,6,7,8,9,10,11,12].map(item => (
                  <SwiperSlide>
                    <section  className="bg-white rounded-md w-full h-full min-w-[200px] p-4 flex flex-col sm:items-center">
                         <div className="flex flex-row sm:flex-col sm:items-center">
                              <section className="w-40 lg:w-36 flex justify-center pt-4 relative  ">
                                   <img src=""  alt={`تصویر `} className="w-full h-auto font-sans text-sm"/>
                              </section>
                              {/* Product Title */}
                              <p className="font-sans text-xs text-right w-full sm:mt-4 text-gray-700  leading-7">producttitle</p>
                         </div>
                         <div className="h-full flex  flex-row justify-between items-end w-full mt-4  sm:gap-y-2">
                              <h6 className="font-sans whitespace-nowrap text-xs text-gray-500">در 5 فروشگاه</h6>
                         </div>
                    </section>
                  </SwiperSlide>
                ))}
             </Swiper>

          </section>
     )
}
export default NewMusics