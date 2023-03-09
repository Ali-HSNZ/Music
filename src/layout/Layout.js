import Header from './Header.js'
import Menu from './Menu.js'
const Layout = ({children}) => {
    return(
        <div className="w-full flex flex-col items-center justify-center">
            <Header/>
            <main className='w-full flex justify-between max-w-[1600px] mt-6'>
                <Menu/>
                {children}
            </main>
        </div> 
    )   
}
export default Layout