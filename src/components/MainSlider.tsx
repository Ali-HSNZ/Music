//! ====Swiper====>
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation} from "swiper";
import "swiper/css/free-mode";
//! <====Swiper====

const MainSlider = () => {
     return (
          <section className='w-full  gap-x-6 '>
               {/* Promote Artist */}
               <Swiper 
                    className={"overflow-hidden"} 
                    freeMode={false} 
                    navigation={true} 
                    spaceBetween={16} 
                    modules={[ Navigation]}
                    // slidesPerView={4}
                    breakpoints= {{
                         0: {
                             slidesPerView: 1,
                         },
                         1000: {
                             slidesPerView: 2,
                         }
                     }}
               >
                    {[
                         "https://cdnmrtehran.ir/media/imgtmp/640f2b0486667.jpg",
                         "https://cdnmrtehran.ir/media/imgtmp/6416fdfb59d02.jpg",
                         "https://cdnmrtehran.ir/media/imgtmp/6416fdfb59d02.jpg",
                         "https://cdnmrtehran.ir/media/imgtmp/641db0fadd11c.jpg",
                         "https://cdnmrtehran.ir/media/imgtmp/6415f59163d4d.jpg"].map((item,idx)=>(
                         <SwiperSlide key={idx}>
                              <div className="w-auto">
                                   <img className="cursor-pointer rounded-md w-full h-[250px]  object-cover" src={item} />                                   
                              </div>
                         </SwiperSlide>
                    ))}

               </Swiper>
          </section>
     )
}
export default MainSlider