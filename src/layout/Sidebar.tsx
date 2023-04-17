// Icons
import { BsCollectionPlayFill } from 'react-icons/bs';
import { MdRadio } from 'react-icons/md';
import { RiUser3Fill } from 'react-icons/ri';
import { IoLogOut } from 'react-icons/io5';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar = () => {

     const router = useRouter()

     return (  
          <aside className='hidden lg:block col-span-2 sticky h-screen top-6 left-6 w-full z-30'>
               <div className="rounded-md overflow-hidden border border-secondBg">
                    <Link href="/" className={`p-4 ${router.pathname === '/' ? "text-yellow" : "text-second"} flex gap-x-2 items-center bg-secondBlackBg hover:bg-mainBlackBg`}>
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                         </svg>
                         <span className='font-quicksand-medium '>Home</span>
                    </Link>
                    <Link href={'/popular-playlists'} className={`p-4 ${router.pathname === '/popular-playlists' ? "text-yellow" : "text-second"} flex gap-x-2 items-center bg-secondBlackBg hover:bg-mainBlackBg`}>
                         <BsCollectionPlayFill className='h-6 w-6'/>
                         <span className='font-quicksand-medium '>Playlist</span>
                    </Link>
                    <div className='p-4 cursor-pointer flex gap-x-2 bg-secondBlackBg hover:bg-mainBlackBg'>
                         <MdRadio className='text-second h-6 w-6'/>
                         <span className='font-quicksand-medium text-second'>Radio</span>
                    </div>
               </div>
               <div className="rounded-md overflow-hidden mt-6 border border-secondBg">
                    <div className='p-4 cursor-pointer flex gap-x-2 bg-secondBlackBg hover:bg-mainBlackBg'>
                         <RiUser3Fill className='text-second h-6 w-6'/>
                         <span className='font-quicksand-medium text-second'>Profile</span>

                    </div>
                    <div className='p-4 cursor-pointer flex gap-x-2 bg-secondBlackBg hover:bg-mainBlackBg'>
                         <IoLogOut className='text-second h-6 w-6'/>
                         <span className='font-quicksand-medium text-second'>Logout</span>
                    </div>
               </div>
          </aside>
     );
}
 
export default Sidebar;