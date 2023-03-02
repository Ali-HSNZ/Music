import { BsCollectionPlayFill } from 'react-icons/bs';
import { MdRadio } from 'react-icons/md';
import { RiUser3Fill } from 'react-icons/ri';
import { IoLogOut } from 'react-icons/io5';


const Menu = () => {
    return (
        <aside className='h-auto px-3 '>
            <div className="bg-black p-3 py-5 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                <div className='mt-6 cursor-pointer'>
                    <BsCollectionPlayFill className='text-secondColor h-6 w-6'/>
                </div>
                <div className='mt-6 cursor-pointer'>
                    <MdRadio className='text-secondColor h-6 w-6'/>
                </div>
                <div className='mt-6 cursor-pointer'>
                    <BsCollectionPlayFill className='text-secondColor h-6 w-6'/>
                </div>
            </div>
            <div className="bg-black mt-6 p-3 py-5 rounded-full">
                <div className='cursor-pointer'>
                    <RiUser3Fill className='text-secondColor h-6 w-6'/>
                </div>
                <div className='mt-6 cursor-pointer'>
                    <IoLogOut className='text-secondColor h-6 w-6'/>
                </div>
            </div>
        </aside>
    )
}
export default Menu