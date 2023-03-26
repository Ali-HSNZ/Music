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
          <section className='w-full overflow-hidden mt-8'>
               <div className="flex justify-between items-center">
                    <h3 className='text-mainColor text-2xl font-quicksand-bold'>New Musics.</h3>
                    <span className="cursor-pointer text-secondColor underline">See More</span>
               </div>
               <Swiper 
                    className={"slider  mt-6 overflow-hidden"} 
                    freeMode={true} 
                    navigation={true} 
                    spaceBetween={24} 
                    modules={[ Navigation , FreeMode]}
                    slidesPerView={'auto'}
               >
                {[1,2,3,4,5,6,7,8,9,10,11,12].map(item => (
                  <SwiperSlide>
                    <Link href={"#"} className='w-auto'>
                      <img className='w-[180px] rounded-[30px] h-[180px] object-cover' src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'/>
                      <p className='mt-2 text-secondColor font-quicksand-medium'>Music Title</p>
                    </Link>
                  </SwiperSlide>
                ))}
             </Swiper>

          </section>
     )
}
export default NewMusics