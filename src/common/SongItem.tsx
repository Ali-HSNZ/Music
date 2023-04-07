import { TSongItemProps } from "@type/song.types";
import Link from "next/link";



const SongItemCommon : React.FunctionComponent<TSongItemProps> = ({img ,playlist , time , title}) => {
     return (  
          <article className={`w-full flex justify-between bg-secondBg bg-opacity-25 border border-secondBg rounded-md  p-2`}>
               <div className="w-full flex  justify-between">
                    <img className="w-[50px] cursor-pointer object-cover h-[50px] rounded-md my-auto" src={img}/>                                                  
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-y-2 pl-4">
                         <Link href="/song" className="text-second  my-auto font-quicksand-medium sm:w-fit pr-4 cursor-pointer text-left underline truncate">{title}</Link>
                         <span className={`text-second  ${playlist !== "solo" && "underline cursor-pointer" } sm:w-fit pr-4 my-auto truncate font-quicksand-medium   `}>{playlist}</span>
                    </div>
                    <span className="text-second  font-quicksand-medium flex items-center mr-4 text-left">{time}</span>
               </div>

               <button className="p-1 group hover:border-second border border-secondBg rounded-md py-2 h-fit my-auto px-4">
                    <svg className="w-6 h-6 text-second group-hover:text-main " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                    </svg>
               </button>

          </article>
     );
}
 
export default SongItemCommon;