const TopTracksInMonth = () => {
     return (  
          <section className='mt-6'>
               <div className="flex justify-between items-center">
                    <h3 className='text-mainColor text-2xl font-quicksand-bold'>Top Tracks In Month.</h3>
                    <span className="cursor-pointer text-secondColor underline">See More</span>
               </div>
               <section className="w-full mt-6 h-auto grid grid-cols-3 gap-4">
                    {["https://cdnmrtehran.ir/media/imgtmp/640f2b0486667.jpg",
                      "https://cdnmrtehran.ir/media/imgtmp/6416fdfb59d02.jpg",
                      "https://cdnmrtehran.ir/media/imgtmp/641db0fadd11c.jpg",
                      "https://cdnmrtehran.ir/media/imgtmp/640f2b0486667.jpg",
                      "https://cdnmrtehran.ir/media/imgtmp/6416fdfb59d02.jpg",
                      "https://cdnmrtehran.ir/media/imgtmp/641db0fadd11c.jpg",
                      "https://cdnmrtehran.ir/media/imgtmp/640f2b0486667.jpg",
                      "https://cdnmrtehran.ir/media/imgtmp/6416fdfb59d02.jpg",
                      "https://cdnmrtehran.ir/media/imgtmp/641db0fadd11c.jpg"].map((imgSrc) => (
                         <article className="w-full cursor-pointer h-auto border border-secondBg rounded-md p-2 flex items-center justify-between gap-x-2">
                              <div className="flex">
                                   <img className='w-[80px] h-[70px] rounded-md  object-cover' src={imgSrc}/>
                                   <div className="w-fit  flex flex-col gap-y-2 justify-center h-auto rounded-md ">
                                        {/* Singer */}
                                        <div className=' w-fit relative pl-9 flex items-center justify-start'>
                                             <svg className="absolute text-second left-3 w-6 h-6 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                             </svg>
                                             <p className='w-[125px]  truncate ml-2 text-secondColor text-left font-quicksand-medium'>Reza Pishro</p>
                                        </div>
                                        {/* Track */}
                                        <div className=' w-fit relative pl-9 flex items-center justify-start   '>
                                             <svg className="absolute text-second left-3 w-6 h-6 "  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
                                             </svg>
                                             <p className='w-[125px] truncate ml-2 text-secondColor text-left font-quicksand-medium'>ghabil</p>
                                        </div>
                                   </div>
                              </div>
                              <button className="p-3 gruop border rounded-full border-secondBg hover:border-second duration-150 flex h-fit items-center">
                                   <svg className="w-5 h-5 text-second " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                                   </svg>
                              </button>
                         </article>
                    ))}
               </section>
          </section>
     );
}
 
export default TopTracksInMonth;