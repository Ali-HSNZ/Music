import Header from './Header.js'
const Layout = ({children}) => {
    return(
        <div className="w-full">
                <Header/>
            <main className='w-full flex justify-between gap-x-4'>
                <aside className='h-auto bg-gray-200'>
                    <h1 className='text-white'>Jelow</h1>
                </aside>
                {children}
            </main>
       </div> 
    )   
}
export default Layout