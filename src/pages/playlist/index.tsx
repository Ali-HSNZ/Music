import Layout from "@layout/Layout";

//! ====Swiper====>
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FreeMode , Navigation} from "swiper";
import "swiper/css/free-mode";
//! <====Swiper====


import { ETypes, TSlider } from "@type/public.types";
import FreeSlider from "@common/FreeSlider";
import MiniSongItem from "@common/MiniSongItem";
import ModalCommon from "@common/Modal";
import { useState } from "react";
import { TCollection } from "@type/song.types";
import Link from "next/link";
import SongItemCommon from "@common/SongItem";



// Literal - collection Modal Type
type TCollectionModalType = "CREATE" | "SELECT"

const SongPage = () => {
     const [isShowAddToCollection , setIsShowAddToCollection] = useState<boolean>(false)
     const [collectionInfo , setColectionInfo] = useState<TCollection>({
          collections : [],
          songId : 1
     })


     const [collectionModalType , setCollectionModalType] = useState<TCollectionModalType>('SELECT') 

     const data : TSlider[]= [
          {title : "Aleki" , img : "https://cdnmrtehran.ir/media/imgtmp/640f2b0486667.jpg"},
          {title : "Aleki" , img : "https://cdnmrtehran.ir/media/imgtmp/6416fdfb59d02.jpg"},
          {title : "Aleki" , img : "https://cdnmrtehran.ir/media/imgtmp/641db0fadd11c.jpg"},
          {title : "Aleki" , img : "https://cdnmrtehran.ir/media/imgtmp/6415f59163d4d.jpg"},
          {title : "Aleki" , img : "https://cdnmrtehran.ir/media/imgtmp/640f2b0486667.jpg"},
          {title : "Aleki" , img : "https://cdnmrtehran.ir/media/imgtmp/6416fdfb59d02.jpg"},
          {title : "Aleki" , img : "https://cdnmrtehran.ir/media/imgtmp/641db0fadd11c.jpg"},
          {title : "Aleki" , img : "https://cdnmrtehran.ir/media/imgtmp/6415f59163d4d.jpg"},
     ]

     const collectionHandler = (id : number) => {
          if(collectionInfo.collections.includes(id)){
               const newCollection = collectionInfo.collections.filter((itemId:number) => itemId !== id )
               setColectionInfo({songId : 1 , collections : newCollection })
          }else{
               setColectionInfo({songId : 1 , collections : [...collectionInfo.collections , id] })
          }
     }
     const isCollection = (id : number) : boolean => {
          return collectionInfo.collections.includes(id)
     }

     return (  
          <Layout>
               <>
                    <ModalCommon 
                         open={isShowAddToCollection} 
                         setOpen={setIsShowAddToCollection} 
                         title={'Add To Collections'}
                    >
                         <section className="w-full  flex flex-col justify-between h-full ">
                                   <div>
                                        <div className="flex w-full justify-between items-center">
                                             <p className="text-main font-quicksand-medium">Select or Create New Collection</p>
                                             <div className="border border-second flex  rounded-md overflow-hidden">
                                                  <button onClick={() => setCollectionModalType("SELECT")} className={`${collectionModalType === 'SELECT' && "bg-mainBg hover:bg-secondBlackBg"} py-1.5 px-2 group`}>
                                                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-second group-hover:text-main duration-150">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                                                       </svg>                                             </button>
                                                  <button onClick={() => setCollectionModalType("CREATE")} className={`${collectionModalType === 'CREATE' && "bg-mainBg hover:bg-secondBlackBg"} group py-1.5 px-2`}>
                                                       <svg className="w-5 h-5 text-second group-hover:text-main duration-150" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                       </svg>
                                                  </button>
                                             </div>
                                        </div>
                                        {collectionModalType === "SELECT" ? (
                                             <div className="grid grid-cols-2 gap-4 pr-4 mt-4 w-full overflow-y-auto h-[180px] ">
                                                  {[
                                                       {id : 1 , title : "Asli" , count : 4},
                                                       {id : 2 , title : "Shad" , count : 13},
                                                       {id : 3 , title : "Ghamgin" , count : 5},
                                                       {id : 4 , title : "Harchi" , count : 14},
                                                       {id : 4234 , title : "Harchi" , count : 14},
                                                       {id : 3464 , title : "Harchi" , count : 14},
                                                       {id : 424 , title : "Harchi" , count : 14},
                                                       {id : 544 , title : "Harchi" , count : 14},
                                                       {id : 4234 , title : "Harchi" , count : 14},
                                                       {id : 6544 , title : "Harchi" , count : 14},
                                                       {id : 42345 , title : "Harchi" , count : 14},
                                                       {id : 12124 , title : "Harchi" , count : 14},
                                                       {id : 43325 , title : "Harchi" , count : 14},
                                                       {id : 1242644 , title : "Harchi" , count : 14},
                                                  ].map((song) => (
                                                       <div onClick={()=>collectionHandler(song.id)} key={song.id} className={`select-none cursor-pointer w-full border ${isCollection(song.id) ? "border-main" : "border-second hover:border-main"} rounded-md p-2 flex justify-between`}>
                                                            <div>
                                                                 <h5 className="text-main font-quicksand-bold">{song.title}</h5>
                                                                 <h6 className="text-second font-quicksand-regular mt-1">{song.count} Tracks</h6>
                                                            </div>
                                                            {isCollection(song.id) ? (
                                                                 <svg className="w-6 h-6 text-main" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                                                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                                 </svg>
                                                            ) : (
                                                                 <svg className="w-6 h-6 text-main" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                                                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                                                                 </svg>
                                                            )}

                                                       </div>
                                                  ))}
                                             </div>
                                        ) : (
                                             <section className="flex flex-col w-full mt-4">
                                                  <div>
                                                       <h6 className="font-quicksand-medium text-second">Collection Name :</h6>
                                                       <input type={'text'} placeholder="Enter Colletion Name..." className={`w-full placeholder:text-sm  rounded-sm py-1.5 px-4 mt-2 bg-second text-secondBlackBg placeholder:text-secondBlackBg font-quicksand-medium focus:outline-none`} />
                                                  </div>
                                                  <div className="mt-4">
                                                       <p className="font-quicksand-regular text-[#8A8989]">
                                                            After creating the collection, the song you want will be added to the collection.
                                                       </p>
                                                       <p className="font-quicksand-regular text-[#8A8989] mt-2">
                                                            You can also add another song/playlist to this collection
                                                       </p>
                                                  </div>
                                             </section>
                                        )}
                                   </div>
                                   <button className=" rounded-sm w-full p-2 text-mainBlackBg bg-second duration-150 hover:bg-main font-quicksand-bold">Submit</button>
                              </section>
                    </ModalCommon>
                    {/* Background Image */}
                    <div className={`w-full h-full hidden md:block absolute top-0 left-0 right-0 bg-no-repeat bg-cover brightness-50 contrast-150 saturate-50 bg-[linear-gradient(to_bottom,transparent,#7D7C7C),url('https://up.faz2music.ir/view/3150683/%D8%B4%D8%A7%DB%8C%D8%B9-%D9%87%DB%8C%D8%AF%D9%86-%D9%85%D8%B5%D8%B1.jpg')] bg-top `}></div>
                    
                    {/* Content */}
                    <section className="z-10 relative">
                         <div className="w-full flex flex-col items-center md:items-end md:flex-row gap-x-6">
                              <img className="w-full sm:w-1/2 md:w-[270px] h-auto md:max-h-[270px]  object-cover rounded-lg" src="https://up.faz2music.ir/view/3150683/%D8%B4%D8%A7%DB%8C%D8%B9-%D9%87%DB%8C%D8%AF%D9%86-%D9%85%D8%B5%D8%B1.jpg"/>
                              <div className="w-full flex flex-col justify-end">
                                   <h1 className="text-3xl mt-4 md:mt-0 font-quicksand-bold text-yellow">Injaneb</h1>
                                   {/* Artist */}
                                   <div className='mt-4 w-fit relative pl-6 flex items-center justify-start'>
                                        <svg className="absolute text-second left-0 w-6 h-6 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                             <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                        </svg>
                                        <Link href={'/singer'} className='w-full text-second underline underline-offset-2 hover:no-underline cursor-pointer truncate ml-2 text-secondColor text-left font-quicksand-medium'>Shayea</Link>
                                   </div>
                                   {/* Song Count Detials*/}
                                   <div className="rounded-md gap-4 flex flex-wrap w-full mt-4">
                                        {/* Plays */}
                                        <div className="flex items-center gap-x-1 w-fit ">
                                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-second">
                                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                                             </svg>
                                             <span className="font-quicksand-regular text-sm text-second">2255 Plays</span>
                                        </div>
                                        {/* Release Date */}
                                        <div className="flex items-center gap-x-1 w-fit ">
                                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-second">
                                                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                             </svg>
                                             <span className="font-quicksand-regular text-sm text-second">2023/04/21</span>
                                        </div>
                                        {/* Likes Count */}
                                        <div className="flex items-center gap-x-1 w-fit ">
                                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-second">
                                                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                             </svg>
                                             <span className="font-quicksand-regular text-sm text-second">2621 Likes</span>
                                        </div>
                                   </div>
                                   {/* Buttons - Play - download - like - ... */}
                                   <div className="rounded-md gap-4 flex flex-wrap w-full mt-4">
                                        {/* Play Now Button */}
                                        <button className="bg-secondBg bg-opacity-50 duration-150 flex items-center gap-x-1 w-fit border rounded-md py-1 px-2 border-second hover:border-main">
                                             <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff80" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-main">
                                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                                             </svg>
                                             <span className="font-quicksand-bold text-sm text-second ">Play Now</span>
                                        </button>
                                        {/* Bookmark Button */}
                                        <button className="bg-secondBg bg-opacity-50 duration-150 flex items-center gap-x-1 w-fit border rounded-md py-1 px-2 border-second hover:border-main">
                                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-second">
                                                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                             </svg>
                                             <span className="font-quicksand-bold text-sm text-second">Bookmark</span>
                                        </button>
                                        {/* Like Button */}
                                        <button className="bg-secondBg bg-opacity-50 duration-150 flex items-center gap-x-1 w-fit border rounded-md py-1 px-2 border-second hover:border-main">
                                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-second">
                                                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                             </svg>
                                             <span className="font-quicksand-bold text-sm text-second">Like</span>
                                        </button>
                                        {/* Download Button */}
                                        <button className="bg-secondBg bg-opacity-50 duration-150 flex items-center gap-x-1 w-fit border rounded-md py-1 px-2 border-second hover:border-main">
                                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-second">
                                                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                             </svg>
                                             <span className="font-quicksand-bold text-sm text-second">Download</span>
                                        </button>
                                        {/* Add To Collection Button */}
                                        <button onClick={()=> setIsShowAddToCollection(!isShowAddToCollection)} className="bg-secondBg bg-opacity-50 duration-150 flex items-center gap-x-1 w-fit border rounded-md py-1 px-2 border-second hover:border-main">
                                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-second">
                                                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                                             </svg>
                                             <span className="font-quicksand-bold text-sm text-second">Add To Collection</span>
                                        </button>
                                   </div>
                              </div>
                         </div>
                         {/* Details */}
                         <div className="w-full">
                              <h3 className='text-mainColor text-2xl font-quicksand-bold text-main mt-4'>Details.</h3>
                              <Swiper 
                                   className={" w-full mt-4 overflow-hidden"} 
                                   freeMode={false} 
                                   navigation={false} 
                                   spaceBetween={0} 
                                   modules={[ Navigation , FreeMode]}
                                   breakpoints= {{
                                        0:{
                                             slidesPerView: 1,
                                        },
                                        400: {
                                            slidesPerView: 2,
                                        },
                                        1000: {
                                            slidesPerView: 3,
                                        },
                                        1080: {
                                             slidesPerView: 4,
                                        }
                                   }}  
                              >
                                   {["Lyrics ","Arrangement ","Music ","Mix & Mastering"].map((item,index)=> (
                                        <SwiperSlide key={index}>
                                             <span className="font-quicksand-medium text-main w-full">{item}</span>
                                             <hr className="border-second my-2"/>
                                             <p className="text-second truncate w-full px-4">Reza Pishro</p>
                                        </SwiperSlide>
                                   ))}
                              </Swiper>
                         </div>
                         
                         {/* All Tracks In Playlist */}
                         <h3 className='text-mainColor text-2xl font-quicksand-bold text-main mt-6'>All Tracks In Playlist.</h3>
                         <section className="w-full mt-4 h-auto flex flex-col gap-y-4 gap-4">
                         {[   "https://cdnmrtehran.ir/media/imgtmp/640f2b0486667.jpg",
                              "https://cdnmrtehran.ir/media/imgtmp/6416fdfb59d02.jpg",
                              "https://cdnmrtehran.ir/media/imgtmp/641db0fadd11c.jpg"]
                              .map((imgSrc,index) => (
                                   <SongItemCommon img={imgSrc} key={index} playlist="Shakhe Ghermez" time="04:42" title={`Injaneb - ${index +1}`}/>
                              ))
                         }
                         </section>

                         {/* New Release */}
                         <FreeSlider type={ETypes.SONG} sliders={data} title={"Top Related."}/>

                         {/* More Related tracks */}
                         <h3 className='text-mainColor text-2xl font-quicksand-bold text-main mt-6'>More Related Tracks.</h3>

                         <section className="w-full mt-6 h-auto grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-4">
                              {[   "https://cdnmrtehran.ir/media/imgtmp/640f2b0486667.jpg",
                                   "https://cdnmrtehran.ir/media/imgtmp/6416fdfb59d02.jpg",
                                   "https://cdnmrtehran.ir/media/imgtmp/641db0fadd11c.jpg",
                                   "https://cdnmrtehran.ir/media/imgtmp/641db0fadd11c.jpg",
                                   "https://cdnmrtehran.ir/media/imgtmp/641db0fadd11c.jpg",
                                   "https://cdnmrtehran.ir/media/imgtmp/641db0fadd11c.jpg",
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
               </>
          </Layout>
     );
}
 
export default SongPage;