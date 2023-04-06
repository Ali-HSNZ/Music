import Layout from "@layout/Layout";


import { ETypes, TSlider } from "@type/public.types";
import FreeSlider from "@common/FreeSlider";
import MiniSongItem from "@common/MiniSongItem";
import {BsFillShareFill} from 'react-icons/bs'
import Link from "next/link";



const SingerPage = () => {


     const data : TSlider[] = [
          {title : "Aleki" , img : "https://cdnmrtehran.ir/media/imgtmp/640f2b0486667.jpg"},
          {title : "Aleki" , img : "https://cdnmrtehran.ir/media/imgtmp/6416fdfb59d02.jpg"},
          {title : "Aleki" , img : "https://cdnmrtehran.ir/media/imgtmp/641db0fadd11c.jpg"},
          {title : "Aleki" , img : "https://cdnmrtehran.ir/media/imgtmp/6415f59163d4d.jpg"},
          {title : "Aleki" , img : "https://cdnmrtehran.ir/media/imgtmp/640f2b0486667.jpg"},
          {title : "Aleki" , img : "https://cdnmrtehran.ir/media/imgtmp/6416fdfb59d02.jpg"},
          {title : "Aleki" , img : "https://cdnmrtehran.ir/media/imgtmp/641db0fadd11c.jpg"},
          {title : "Aleki" , img : "https://cdnmrtehran.ir/media/imgtmp/6415f59163d4d.jpg"},
     ]



     return (  
          <Layout>
               <>
                    {/* Background Image */}
                    <div className={`w-full h-full hidden md:block absolute top-0 left-0 right-0 bg-no-repeat bg-cover brightness-50 contrast-150 saturate-50 bg-[linear-gradient(to_bottom,transparent,#7D7C7C),url('https://cdnmrtehran.ir/media/artists/63ee0761e2be4.jpg')] bg-top `}></div>
                    
                    {/* Content */}
                    <section className="z-10 relative">
                         <div className="w-full flex flex-col items-end md:flex-row gap-x-6">
                              <img className="w-full sm:w-1/2 md:w-[270px] h-auto md:max-h-[270px]  object-cover rounded-lg" src="https://cdnmrtehran.ir/media/artists/63ee0761e2be4.jpg"/>
                              <div className="w-full flex flex-col justify-end">
                                   {/* Artist */}
                                   <h1 className="text-3xl mt-6 md:mt-0 font-quicksand-bold text-yellow">Shayea</h1>

                                   {/* Song Count Detials*/}
                                   <div className="rounded-md gap-4 flex flex-wrap w-full mt-4 ">
                                        {/* Plays */}
                                        <div className="flex items-center gap-x-1 w-fit ">
                                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-second">
                                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                                             </svg>
                                             <span className="font-quicksand-regular text-sm text-second">2255 Plays</span>
                                        </div>
                                        {/* Likes Count */}
                                        <div className="flex items-center gap-x-1 w-fit ">
                                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-second">
                                                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                             </svg>
                                             <span className="font-quicksand-regular text-sm text-second">2621 Subscribers</span>
                                        </div>
                                   </div>
                                   
                                   {/* Buttons - Play - download - like - ... */}
                                   <div className="rounded-md gap-4 flex flex-wrap w-full mt-4 ">
                                        {/* Play Now Button */}
                                        <button className="bg-secondBg bg-opacity-50 duration-150 flex items-center gap-x-1 w-fit border rounded-md py-1 px-2 border-second hover:border-main">
                                             <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff80" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-main">
                                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                                             </svg>
                                             <span className="font-quicksand-bold text-sm text-second ">Play All</span>
                                        </button>
                                        <button className="bg-secondBg bg-opacity-50 duration-150 flex items-center gap-x-1 w-fit border rounded-md py-1 px-2 border-second hover:border-main">
                                             <span className="font-quicksand-bold text-sm text-second">Subscribe</span>
                                        </button>
                                        {/* Download Button */}
                                        <button className="bg-secondBg bg-opacity-50 duration-150 flex items-center gap-x-2 w-fit border rounded-md py-1 px-2 border-second hover:border-main">
                                             <BsFillShareFill size={16} className="text-second"/>
                                             <span className="font-quicksand-bold text-sm text-second">Share</span>
                                        </button>
                                   </div>
                              </div>
                         </div>
                         {/* Biography */}
                         <h3 className='text-mainColor text-2xl font-quicksand-bold text-main mt-6'>Biography</h3>
                         <section className="flex flex-col gap-y-2 mt-2">
                              <p className="text-second font-quicksand-regular">
                                   <strong>Born:</strong> August 8, 1988 (age 34 years), Tehran
                              </p>
                              <p className="text-second font-quicksand-regular">
                                   <strong>Height:</strong> 1.74 m
                              </p>
                              <p className="text-second font-quicksand-regular">
                                   <strong>Genre:</strong> Indian Film Pop, Hip-Hop/Rap, Korean Hip-Hop/Rap
                              </p>
                              <p className="text-second font-quicksand-regular">
                                   <strong>Record labels:</strong> C2ink, RADIO JAVAN
                              </p>
                         </section>
                         
                         {/* Recently Tracks */}
                         <h3 className='text-mainColor text-2xl font-quicksand-bold text-main mt-6'>Recently Tracks</h3>
                         <section className="w-full mt-4 h-auto flex flex-col gap-y-4 gap-4">
                         {data.slice(0,3).map((item,index) => (
                                   <article key={index} className="w-full select-none flex justify-between bg-secondBg bg-opacity-25 border border-secondBg  rounded-md  p-2">
                                        <div className="w-full grid grid-cols-4">
                                             <div className="flex w-full gap-x-6">
                                                  <img className="w-[50px] cursor-pointer object-cover h-[50px] rounded-md" src={item.img}/>
                                                  <button className="p-1 group">
                                                       <svg className="w-6 h-6 text-second group-hover:text-main " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                                                       </svg>
                                                  </button>
                                                  <button className="p-1 group">
                                                       <svg className="w-6 h-6 text-second group-hover:text-main " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                                       </svg>
                                                  </button>
                                             </div>
                                             <Link href="/song" className="text-second w-fit my-auto pr-6 font-quicksand-medium  cursor-pointer items-center  underline truncate">Qabil</Link>
                                             <span className={`text-second w-fit ${index < 1 && "underline cursor-pointer" } my-auto pr-6 truncate font-quicksand-medium  items-center `}>{index < 1 ? "Shakhe ghermez" :'solo'}</span>
                                             <span className="text-second w-fit font-quicksand-medium flex items-center ">04:12</span>
                                        </div>
                                        <button>
                                             <svg className="w-6 h-6 text-yellow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                             </svg>
                                        </button>
                                   </article>
                              ))
                         }
                         </section>
                         
                         {/* All Playlists */}
                         <h3 className='text-mainColor text-2xl font-quicksand-bold text-main mt-6'>All Playlists</h3>
                         <section className="w-full mt-6 h-auto grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-4">
                         {data.slice(0,4).map((item,index) => (
                              <MiniSongItem imgSrc={item.img} singer={"Reza Pishro"} key={index} title={"Qabil"}/>

                         ))}
                         </section>
                         
                         {/* All Songs */}
                         <h3 className='text-mainColor text-2xl font-quicksand-bold text-main mt-6'>All Songs</h3>
                         <section className="w-full mt-6 h-auto grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-4">
                         {data.map((item,index) => (
                              <MiniSongItem imgSrc={item.img} singer={"Reza Pishro"} key={index} title={"Qabil"}/>

                         ))}
                         </section>


                    </section>
               </>
          </Layout>
     );
}
 
export default SingerPage;