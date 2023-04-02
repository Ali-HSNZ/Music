import MiniSongItem from "@common/MiniSongItem";

const TopTracksInMonth = () => {
     return (  
          <section className='mt-6'>
               <div className="flex justify-between items-center">
                    <h3 className='text-mainColor text-2xl font-quicksand-bold text-main'>Top Tracks In Month.</h3>
                    <span className="cursor-pointer text-secondColor underline">See More</span>
               </div>
               <section className="w-full mt-6 h-auto grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-4">
                    {[   "https://cdnmrtehran.ir/media/imgtmp/640f2b0486667.jpg",
                         "https://cdnmrtehran.ir/media/imgtmp/6416fdfb59d02.jpg",
                         "https://cdnmrtehran.ir/media/imgtmp/641db0fadd11c.jpg",
                         "https://cdnmrtehran.ir/media/imgtmp/640f2b0486667.jpg",
                         "https://cdnmrtehran.ir/media/imgtmp/6416fdfb59d02.jpg",
                         "https://cdnmrtehran.ir/media/imgtmp/641db0fadd11c.jpg",
                         "https://cdnmrtehran.ir/media/imgtmp/640f2b0486667.jpg",
                         "https://cdnmrtehran.ir/media/imgtmp/6416fdfb59d02.jpg",
                         "https://cdnmrtehran.ir/media/imgtmp/641db0fadd11c.jpg"]
                         .map((imgSrc,index) => (
                              <MiniSongItem imgSrc={imgSrc} singer={"Reza Pishro"} key={index} title={"Qabil"}/>)
                         )
                    }
               </section>
          </section>
     );
}
 
export default TopTracksInMonth;