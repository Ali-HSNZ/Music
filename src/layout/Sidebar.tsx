// Icons
import { BsCollectionPlayFill } from 'react-icons/bs';
import { MdRadio } from 'react-icons/md';
import { RiUser3Fill } from 'react-icons/ri';
import { IoLogOut } from 'react-icons/io5';

const Sidebar = () => {
     return (  
          <aside className='col-span-2 sticky h-screen top-[81px] left-6 w-full'>
               <div className="rounded-md overflow-hidden border border-secondBg">
                    <div className='p-4 flex gap-x-2 items-center bg-secondBlackBg hover:bg-mainBlackBg'>
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                         </svg>
                         <span className='font-quicksand-medium text-yellow'>Home</span>
                    </div>
                    <div className='p-4 cursor-pointer flex gap-x-2 bg-secondBlackBg hover:bg-mainBlackBg'>
                         <BsCollectionPlayFill className='text-second h-6 w-6'/>
                         <span className='font-quicksand-medium text-second'>Playlist</span>
                    </div>
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