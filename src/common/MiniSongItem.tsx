import { TMiniSongItemProps } from "@type/public.types";
import Link from "next/link";


const MiniSongItem : React.FunctionComponent<TMiniSongItemProps> = ({imgSrc , title , singer}) => {
     return (  
          <article className="w-full  h-auto border bg-secondBg bg-opacity-25 border-secondBg rounded-md p-2 flex items-center justify-between gap-x-2">
               <div className="flex">
                    <Link href={'/song'}>
                         <img className='w-[80px] h-[70px] cursor-pointer rounded-md  object-cover' src={imgSrc}/>
                    </Link>
                    <div className="w-fit  flex flex-col gap-y-2 justify-center h-auto rounded-md ">
                         {/* Track Name*/}
                         <Link href={'/song'} className='w-[125px] text-main truncate ml-3 text-secondColor text-left font-quicksand-medium'>Injaneb</Link>
                         
                         {/* Singer */}
                         <Link href="/singer" className=' w-fit relative pl-9 flex items-center justify-start'>
                              <svg className="absolute text-second left-2 w-6 h-6 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                   <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                              </svg>
                              <p className='max-w-[125px] w-fit underline hover:no-underline cursor-pointer text-second truncate ml-1 text-secondColor text-left font-quicksand-medium'>Shayea</p>
                         </Link>
                    </div>
               </div>
               <button className="p-3 gruop border  rounded-md border-secondBg hover:border-second duration-150 flex h-fit items-center">
                    <svg className="w-5 h-5 text-second " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                         <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                    </svg>
               </button>
          </article>
     );
}
export default MiniSongItem;