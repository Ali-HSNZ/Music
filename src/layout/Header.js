import logo from '@/images/logo.png'
import Link from "next/link"

const Header = () => {
    return(
        <header className='p-6 flex items-center'>
            <nav>
                <Link className="w-2" href={"/"}>
                    <img src={logo.src}/>
                </Link>
            </nav>
            <section className='w-full ml-6 relative'>
                <input type={'text'} placeholder="search..." className={'font-quicksand-light bg-transparent  focus:outline-none rounded-lg placeholder:text-secondColor text-mainColor pl-10 py-2 w-1/2'}/>
                <svg className="w-5 h-5 text-secondColor absolute left-2 top-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                    <path strokeLinecap="round" strokeLinejoin= "round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </section>
        </header>
    )
}

export default Header