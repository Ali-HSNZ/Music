import Header from './Header.js'
import Menu from './Menu.js'
const Layout = ({children}) => {
    return(
        <div className="w-full">
            <Header/>
            <main className='w-full flex justify-between  mt-6'>
                <Menu/>
                {children}
            </main>
       </div> 
    )   
}
export default Layout