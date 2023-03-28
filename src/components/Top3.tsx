const Top3 = () => {
     return (  
          <section className='grid grid-cols-2 gap-x-6'>
                    <div className='w-full mt-6 '>
                         <h2 className='text-mainColor text-2xl font-quicksand-medium'>Top 3 Musics.</h2>
                         <div className='w-full mt-4 flex flex-col gap-y-4 select-none'>
                              {[1,2,3].map(() => (
                                   <article className='flex cursor-pointer relative p-4 rounded-lg justify-between bg-blackBg items-end'>
                                        <div className='flex gap-x-4 '>
                                             <svg className="w-5 h-5 absolute top-3 right-3 text-secondBg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
                                             </svg>
                                             <img className='w-auto h-[70px] ' src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'/>
                                             <div>
                                                  <h4 className='font-quicksand-regular text-mainColor'>Golden age of 80s</h4>
                                                  <h5 className='font-quicksand-regular text-secondColor'>Sean swadder</h5>
                                                  <h6 className='font-quicksand-regular text-mainColor'>02:34:45</h6>
                                             </div>
                                        </div>
                                        <button className='py-2 px-6 border-2 group border-secondBg duration-150 hover:border-yellow h-auto rounded-md border-secondColor'>
                                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 group-hover:text-yellow">
                                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                                             </svg>
                                        </button>
                                   </article>
                              ))}
                         </div>
                    </div>
                    <div className='w-full mt-6'>
                         <h2 className='text-mainColor text-2xl font-quicksand-medium'>Top 3 Padcasts.</h2>
                         <div className='w-full mt-4 flex flex-col gap-y-4 select-none'>
                              {[1,2,3].map(() => (
                                   <article className='flex cursor-pointer relative  p-4 rounded-lg justify-between bg-black items-end'>
                                        <div className='flex gap-x-4'>
                                             <svg className="w-5 h-5 absolute top-3 right-3 text-secondBg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                                             </svg>

                                             <img className='w-auto h-[70px] ' src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'/>
                                             <div>
                                                  <h4 className='font-quicksand-regular text-mainColor'>Golden age of 80s</h4>
                                                  <h5 className='font-quicksand-regular text-secondColor'>Sean swadder</h5>
                                                  <h6 className='font-quicksand-regular text-mainColor'>02:34:45</h6>
                                             </div>
                                        </div>
                                        <button className='py-2 px-6 border-2 group border-secondBg duration-150 hover:border-yellow h-auto rounded-md border-secondColor'>
                                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 group-hover:text-yellow">
                                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                                             </svg>
                                        </button>
                                   </article>
                              ))}
                         </div>
                    </div>
               </section>
     );
}
 
export default Top3;