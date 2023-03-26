import songer from '@images/Pexels Photo by Eric Esma.png'
import vector from '@images/Vector.png'

const TopChart_and_promoteArtist = () => {
     return (
          <section className='w-full flex justify-between gap-x-6 '>
               {/* Promote Artist */}
               <div className='select-none w-full h-auto py-8 flex flex-col justify-between overflow-hidden bg-[#488292] rounded-2xl relative'>
                    <img src={songer.src} className=" max-h-[290px] absolute z-10 right-10 bottom-0 object-cover"/>
                    <img src={vector.src} className="absolute top-0 right-0 z-0"/>
                    <h5 className=' ml-8  font-quicksand-light text-blue-50'>Promote Artist</h5>
                    <div>
                         <h3 className='font-quicksand-bold  ml-8 text-2xl text-blue-50'>R & B Hits</h3>
                         <h6 className='w-1/3 mt-2 font-quicksand-light text-blue-50 ml-8 '>All mine, Lie again, call me everyday,Out of time, No love, Bad habit,and so much more</h6>
                    </div>
                    <div className='flex gap-x-4 mt-6 ml-8 '>
                         <div className='flex -space-x-2 overflow-hidden'>
                              <img className='inline-block h-6 w-6 rounded-full ring-2 ring-white' src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'/>
                              <img className='inline-block h-6 w-6 rounded-full ring-2 ring-white' src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'/>
                              <img className='inline-block h-6 w-6 rounded-full ring-2 ring-white' src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'/>
                              <img className='inline-block h-6 w-6 rounded-full ring-2 ring-white' src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'/>
                              <img className='inline-block h-6 w-6 rounded-full ring-2 ring-white' src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'/>
                         </div>
                         <div className='text-white font-quicksand-light flex gap-x-1'>
                              <svg className="w-6 h-6 " xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                   <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                              </svg>
                              33K
                         </div>
                    </div>
               </div>
               {/* Top Chart */}
               <div className='w-full'>
                    <h2 className='text-mainColor text-2xl font-quicksand-medium'>Top Chart.</h2>
                    <div className='w-full mt-2 flex flex-col gap-y-2'>
                         {[1,2,3].map(() => (
                              <article className='flex p-4 rounded-lg justify-between bg-black items-center'>
                                   <div className='flex gap-x-4'>
                                        <img className='w-auto h-[70px] ' src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'/>
                                        <div>
                                             <h4 className='font-quicksand-regular text-mainColor'>Golden age of 80s</h4>
                                             <h5 className='font-quicksand-regular text-secondColor'>Sean swadder</h5>
                                             <h6 className='font-quicksand-regular text-mainColor'>02:34:45</h6>
                                        </div>
                                   </div>
                                   <button className='p-2 border-2 border-secondBg h-fit rounded-full border-secondColor'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow">
                                             <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                        </svg>
                                   </button>
                              </article>
                         ))}
                    </div>
               </div>
          </section>
     )
}
export default TopChart_and_promoteArtist